import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { Routesdone } from 'src/routesdone/entities/routesdone.entity';
import { Car } from 'src/cars/entities/car.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    TypeOrmModule.forFeature([Role, User, Car, Routesdone]),
    CarsModule, UsersModule
  ],
})
export class SeedModule {}
