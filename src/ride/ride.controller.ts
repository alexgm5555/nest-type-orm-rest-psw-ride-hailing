import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RideService } from './ride.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { log } from 'console';

@Controller('ride')
export class RideController {
  constructor(private readonly rideService: RideService) {}
  @Post('request')
  request(@Body() createRideDto: any) {
    console.log('post: ride/request');
    console.log(createRideDto);
    
    return this.rideService.request(createRideDto);
  }

  @Patch('start/:id')
  start(@Param('id') id: string, ) {
    console.log('post: start:id');
    console.log(id);
    return this.rideService.start(id);
  }

  @Patch('end/:id')
  end(@Param('id') id: string, ) {
    console.log('post: start:id');
    console.log(id);
    return this.rideService.end(id);
  }
}
