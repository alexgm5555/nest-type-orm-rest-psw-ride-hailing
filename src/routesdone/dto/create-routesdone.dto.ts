import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsLatitude,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateRoutesdoneDto {
  @IsArray()
  @IsLatitude()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  locationIni: [number, number ];

  @IsArray()
  @IsLatitude()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  locationEnd: [number, number ];

  @IsInt()
  ridesKm: number;

  @IsInt()
  ridesValue: number;

  @IsString()
  @IsUUID()
  userRiderId: string;

  @IsString()
  @IsUUID()
  userDriverId: string;

  @IsString()
  @IsUUID()
  carId: string;
}
