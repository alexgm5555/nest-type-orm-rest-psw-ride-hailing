import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RoutesdoneService } from './routesdone.service';
import { CreateRoutesdoneDto } from './dto/create-routesdone.dto';
import { UpdateRoutesdoneDto } from './dto/update-routesdone.dto';

@Controller('routesdone')
export class RoutesdoneController {
  constructor(private readonly routesdoneService: RoutesdoneService) {}


  @Get()
  findAll() {
    return this.routesdoneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesdoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoutesdoneDto: UpdateRoutesdoneDto) {
    return this.routesdoneService.update(id, updateRoutesdoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesdoneService.remove(+id);
  }
}
