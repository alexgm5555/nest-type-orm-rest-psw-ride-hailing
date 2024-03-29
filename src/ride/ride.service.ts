import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/cars/entities/car.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Routesdone } from 'src/routesdone/entities/routesdone.entity';
import { getTodayFormat } from 'src/utils';
import { distanceKm } from 'src/utils';
import { RoutesdoneService } from 'src/routesdone/routesdone.service';
import { CarsService } from 'src/cars/cars.service';
import { UsersService } from 'src/users/users.service';
require ('dotenv').config();

@Injectable()
export class RideService {
  constructor(
    private readonly carService: CarsService,
    private readonly userService: UsersService,
    private readonly routesdoneService: RoutesdoneService,

    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Routesdone)
    private readonly routesdoneRepository: Repository<Routesdone>,
  ) {}

  async request(createRideDto: CreateRideDto) {
    try {
      let { userEmail, ...remainData } = createRideDto;
      
      const allcarsData =  await this.carService.findAllCars();
      const carData = allcarsData[0];
      console.log(carData);
      
      const userRiderData = await this.userService.findOnebyEmail(userEmail);
      if(!userRiderData) throw new UnauthorizedException('User are not register!');
      const userDriverData = await this.userService.findOnebyId(carData.user.id);

      const { ridesKm, ridesValue } = this.getRidesValue({ ...remainData });

      const routesdoneData =  await this.routesdoneService.create({
        locationIni: [ remainData.latIni, remainData.longIni ],
        locationEnd: [ remainData.latEnd, remainData.longEnd ],
        ridesKm, ridesValue,
        userRiderId: userRiderData.id,
        userDriverId: userDriverData.id,
        carId: carData.id
      });
      return {
        ride: {
          id: routesdoneData.id,
          distance: ridesKm,
          price: ridesValue,
          driversName: userDriverData.fullName,
          placa: carData.placa,
          carsColor: carData.color
        }
      };

    } catch (error) {
      console.log('RideService.request');
      return error
    }
  }

  async start(id: string) {
    try {
      const routesdoneData = await this.routesdoneService.update(
        id,
        { timeIni: getTodayFormat() }
      );
      return { ride: routesdoneData }
    } catch (error) {
      console.log('RideService.start');
      return error
    }
  }

  async end(id: string) {
    try {
      let routesdoneData = await this.routesdoneService.update(
        id,
        { timeEnd: getTodayFormat() }
      );
      const locationIni = routesdoneData.locationIni;
      const locationEnd = routesdoneData.locationEnd;
      const time = this.calMin(
        routesdoneData.timeIni,
        routesdoneData.timeEnd
      );
      
      const { ridesKm, ridesValue } = this.getRidesValue({
        latIni: locationIni[0],
        longIni: locationIni[1],
        latEnd: locationEnd[0],
        longEnd: locationEnd[1],
        time
      });
      if (routesdoneData.price !== ridesValue) {
        routesdoneData = await this.routesdoneService.update(
          id,
          { ridesValue: ridesValue }
        );
      }
      return {
        ride: {
          id: routesdoneData.id,
          distance: ridesKm,
          price: ridesValue,
          minutes: time,
        }
      }
    } catch (error) {
      console.log('RideService.end');
      return error
    }
  }

  private getRidesValue({latIni,longIni,latEnd,longEnd, time}:{
    latIni: number;
    longIni: number;
    latEnd: number;
    longEnd: number;
    time?: number
  }) {
    let ridesValue = 0;
    let ridesKm = distanceKm(+latIni, +longIni, +latEnd, +longEnd);
    // ridesKm = Math.round(ridesKm*100)/100;
    ridesKm = Math.round(ridesKm);
    const currentTime = this.calcTime(ridesKm);
    
    if(time && time > currentTime) {
      ridesValue = ((time-currentTime) * +process.env.BL_VALUE_MINUTE);
    };
    ridesValue = ridesValue +
      +process.env.BL_VALUE_BASE_FEE +
      (ridesKm * +process.env.BL_VALUE_KM);
    
    ridesValue= Math.round(ridesValue);
    
    return { ridesKm, ridesValue }
  }

  private calcTime(distance: number){
    return (60*distance)/+process.env.BL_SPEED_PER_HOUR;
  }

  private calMin = (fechaIni: string, fechaEnd: string)=>{
    let fecha1 = new Date(fechaIni);
    let fecha2 = new Date(fechaEnd);
    let diferencia = fecha2.getTime() - fecha1.getTime();
    return Math.round(diferencia / 1000 / 60);
  }
}
