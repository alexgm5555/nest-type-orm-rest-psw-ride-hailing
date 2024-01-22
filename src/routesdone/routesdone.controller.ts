import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { RoutesdoneService } from './routesdone.service';
import { CreateRoutesdoneDto } from './dto/create-routesdone.dto';
import { UpdateRoutesdoneDto } from './dto/update-routesdone.dto';

@Controller('routesdone')
export class RoutesdoneController {}
