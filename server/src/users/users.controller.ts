import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetUserDto } from './dto/get-user.dto';
import { UsersService } from './users.service';
import { USER_NOT_FOUND_MESSAGE } from './users.constants';
import { isArrayWithoutItems } from 'src/utils/array';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Post чтобы не светить данными пользователей в урле
  @HttpCode(HttpStatus.OK)
  @Post()
  @UsePipes(new ValidationPipe())
  async getUser(@Body() dto: GetUserDto) {
    const result = await this.usersService.getUser(dto);

    if (isArrayWithoutItems(result)) {
      throw new HttpException(USER_NOT_FOUND_MESSAGE, HttpStatus.NOT_FOUND);
    }

    return result;
  }
}
