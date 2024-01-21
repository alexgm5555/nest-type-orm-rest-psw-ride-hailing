import { PartialType } from '@nestjs/mapped-types';
import { CreateRoutesdoneDto } from './create-routesdone.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateRoutesdoneDto extends PartialType(CreateRoutesdoneDto) {

  @IsString()
  @IsDate()
  timeIni?: string;

  @IsString()
  @IsDate()
  timeEnd?: string;
}
