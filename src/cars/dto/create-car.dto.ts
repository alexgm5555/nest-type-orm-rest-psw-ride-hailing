import {
  IsEmail,
  IsString,
} from 'class-validator';

export class CreateCarDto {
  @IsString()
  placa: string;

  @IsString()
  brand: string;

  @IsString()
  color: string;

  @IsString()
  @IsEmail()
  userEmail: string;
}
