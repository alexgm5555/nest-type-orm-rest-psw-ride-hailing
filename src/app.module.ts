import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import {options as ormconfig} from '../ormconfig';
import { RolesModule } from './roles/roles.module';
import { CarsModule } from './cars/cars.module';
import { SeedModule } from './seed/seed.module';
import { RoutesdoneModule } from './routesdone/routesdone.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...ormconfig
    }),
    UsersModule,
    RolesModule,
    CarsModule,
    SeedModule,
    RoutesdoneModule,
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
