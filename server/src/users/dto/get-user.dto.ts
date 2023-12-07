import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { PHONE_NUMBER_LENGTH_ERROR } from '../users.constants';

export class GetUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Length(6, 6, { message: PHONE_NUMBER_LENGTH_ERROR })
  @IsString()
  @IsOptional()
  number?: string;
}
