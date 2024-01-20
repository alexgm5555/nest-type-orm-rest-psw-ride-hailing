import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import {options as ormconfig} from '../ormconfig';
import { RolesModule } from './roles/roles.module';
import { CarsModule } from './cars/cars.module';
import { SeedModule } from './seed/seed.module';



@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...ormconfig
    }),
    UsersModule,
    TransactionsModule,
    RolesModule,
    CarsModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],

})
export class AppModule {}
