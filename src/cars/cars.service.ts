import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }
}
