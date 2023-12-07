import { Injectable } from '@nestjs/common';
import { GetUserDto } from './dto/get-user.dto';

import * as users from './users-data.json';
import { UserModel } from './user.model';

@Injectable()
export class UsersService {
  async getUser(dto: GetUserDto): Promise<UserModel[]> {
    const result = (users as UserModel[]).filter((user) => {
      const number = dto.number?.trim();
      return (
        user.email.trim() === dto.email.trim() &&
        (number ? number === user.number.trim() : true)
      );
    });

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 5000);
    });
  }
}
