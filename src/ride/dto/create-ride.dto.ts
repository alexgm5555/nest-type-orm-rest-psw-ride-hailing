import {
  IsEmail,
  IsLatitude,
  IsLongitude,
  IsString,
} from 'class-validator';

export class CreateRideDto {
  @IsString()
  @IsLatitude()
  latIni: number;

  @IsString()
  @IsLongitude()
  longIni: number;

  @IsString()
  @IsLatitude()
  latEnd: number;

  @IsString()
  @IsLongitude()
  longEnd: number;

  @IsString()
  @IsEmail()
  userEmail: string;
}

