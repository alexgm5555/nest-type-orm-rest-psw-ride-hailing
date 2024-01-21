import { Module } from '@nestjs/common';
import { RideService } from './ride.service';
import { RideController } from './ride.controller';
import { User } from 'src/users/entities/user.entity';
import { Routesdone } from 'src/routesdone/entities/routesdone.entity';
import { Car } from 'src/cars/entities/car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from 'src/cars/cars.module';
import { UsersModule } from 'src/users/users.module';
import { RoutesdoneModule } from 'src/routesdone/routesdone.module';

@Module({
  controllers: [RideController],
  providers: [RideService],
  imports: [
    TypeOrmModule.forFeature([ User, Car, Routesdone]),
    CarsModule, UsersModule, RoutesdoneModule
  ],
})
export class RideModule {}
