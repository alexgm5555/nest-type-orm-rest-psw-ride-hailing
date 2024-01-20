import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { DataSource, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { getDataByEmail } from 'src/utils/crudFunctions';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  async create(createCarDto: CreateCarDto) {
    try {
      let { userEmail, ...carData } = createCarDto;
      let userData = await getDataByEmail(userEmail, this.userRepository, );

      const newCar = this.carRepository.create({ user: userData, ...carData});
      return this.carRepository.save(newCar);
    } catch (error) {
      this.handleDBExeptions(error);
    }
  }
  handleDBExeptions(error: any) {
    throw new Error('Method not implemented.');
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }
}
