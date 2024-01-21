import { Injectable } from '@nestjs/common';
import { CreateRoutesdoneDto } from './dto/create-routesdone.dto';
import { UpdateRoutesdoneDto } from './dto/update-routesdone.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { getDataById, getTodayFormat, handleDBErrors} from 'src/utils';
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

  findAll() {
    return `This action returns all routesdone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routesdone`;
  }

  async findOnebyId(id: string) {
    return await getDataById(id, this.RoutesdoneRepository )
  }

  update(id: number, updateRoutesdoneDto: UpdateRoutesdoneDto) {
    return `This action updates a #${id} routesdone`;
  }

  remove(id: number) {
    return `This action removes a #${id} routesdone`;
  }
}
