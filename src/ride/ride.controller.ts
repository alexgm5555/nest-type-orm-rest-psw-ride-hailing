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

  @Get(':id')
  async findOne(
    // @Param('id', ParseUUIDPipe) id: string
    @Param('id') id: string
    ) {
    return this.rideService.findOne(id);
  }

  @Patch('start:id')
  start(@Param('id') id: string, @Body() updateRideDto: UpdateRideDto) {
    console.log('post: start:id');
    console.log(updateRideDto);
    return this.rideService.start(id, updateRideDto);
  }

  @Patch('end:id')
  end(@Param('id') id: string, @Body() updateRideDto: UpdateRideDto) {
    return this.rideService.update(id, updateRideDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rideService.remove(+id);
  // }
}
