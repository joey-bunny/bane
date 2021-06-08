import { Body, Injectable } from '@nestjs/common';
import { userDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/interfaces/user.interface';

@Injectable()
export class UserService implements User {
  private users: userDto[] = [];

  createUser(@Body() user: userDto) {
    console.log(user);
    return this.users.push(user);
  }

  getUser(): userDto[] {
    return this.users;
  }

  getUserByUsername(username: string): userDto | undefined {
    return this.users.find((user) => user.username === username);
  }
}
