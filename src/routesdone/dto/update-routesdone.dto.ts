import { PartialType } from '@nestjs/mapped-types';
import { CreateRoutesdoneDto } from './create-routesdone.dto';

export class UpdateRoutesdoneDto extends PartialType(CreateRoutesdoneDto) {}
