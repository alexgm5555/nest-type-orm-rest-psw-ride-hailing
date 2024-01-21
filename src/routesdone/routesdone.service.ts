import { Injectable } from '@nestjs/common';
import { CreateRoutesdoneDto } from './dto/create-routesdone.dto';
import { UpdateRoutesdoneDto } from './dto/update-routesdone.dto';

@Injectable()
export class RoutesdoneService {
  create(createRoutesdoneDto: CreateRoutesdoneDto) {
    return 'This action adds a new routesdone';
  }

  findAll() {
    return `This action returns all routesdone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} routesdone`;
  }

  update(id: number, updateRoutesdoneDto: UpdateRoutesdoneDto) {
    return `This action updates a #${id} routesdone`;
  }

  remove(id: number) {
    return `This action removes a #${id} routesdone`;
  }
}
