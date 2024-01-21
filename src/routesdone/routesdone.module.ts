import { Module } from '@nestjs/common';
import { RoutesdoneService } from './routesdone.service';
import { RoutesdoneController } from './routesdone.controller';

@Module({
  controllers: [RoutesdoneController],
  providers: [RoutesdoneService],
})
export class RoutesdoneModule {}
