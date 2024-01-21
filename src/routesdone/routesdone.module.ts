import { Module } from '@nestjs/common';
import { RoutesdoneService } from './routesdone.service';
import { RoutesdoneController } from './routesdone.controller';
import { Routesdone } from './entities/routesdone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/cars/entities/car.entity';
import { User } from 'src/users/entities/user.entity';
@Module({
  controllers: [RoutesdoneController],
  providers: [RoutesdoneService],
  imports: [
    TypeOrmModule.forFeature([Routesdone, Car, User])
  ],
  exports: [RoutesdoneService, TypeOrmModule],
})
export class RoutesdoneModule {}
