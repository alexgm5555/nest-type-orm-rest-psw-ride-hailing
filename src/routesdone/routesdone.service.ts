import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateRoutesdoneDto } from './dto/create-routesdone.dto';
import { UpdateRoutesdoneDto } from './dto/update-routesdone.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { getDataById, getTodayFormat, handleDBErrors, updateCode} from 'src/utils';
import { Routesdone } from './entities/routesdone.entity';
import { User } from 'src/users/entities/user.entity';
import { Car } from 'src/cars/entities/car.entity';

@Injectable()
export class RoutesdoneService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Routesdone)
    private readonly RoutesdoneRepository: Repository<Routesdone>,
  ) {}

  getStateTransaction(createRoutesdoneDto: CreateRoutesdoneDto) {
    return 'This action adds a new routesdone';
  }

  async create(createRoutesdoneDto: CreateRoutesdoneDto) {
    try {
      let { 
        userRiderId,
        userDriverId,
        carId,
        ...routeData
      } = createRoutesdoneDto;
      const userRiderData = await getDataById(userRiderId, this.userRepository);
      const userDriverData = await getDataById(userDriverId, this.userRepository);
      const carData = await getDataById(carId, this.carRepository);

      const newRoute = this.RoutesdoneRepository.create(
        {
          userRider: userRiderData,
          userDriver: userDriverData,
          car: carData,
          ...routeData
        }
      );
      const data = await this.RoutesdoneRepository.save(newRoute);
      return {...data}
    } catch (error) {
      handleDBErrors(error);
    }
  }

  async findOnebyId(id: string) {
    return await getDataById(id, this.RoutesdoneRepository )
  }

  async update(id: string, updateRoutesdoneDto: UpdateRoutesdoneDto) {
    let { ...toUpdate } = updateRoutesdoneDto;
    const route = await updateCode(
      id,
      toUpdate,
      this.RoutesdoneRepository
    );
    return this.RoutesdoneRepository.save(route);
  }

}
