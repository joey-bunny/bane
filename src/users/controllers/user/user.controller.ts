import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { userDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(@Inject('USER_SERVICE') private readonly userService: User) {}
  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: userDto) {
    this.userService.createUser(user);
  }

  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    const data = this.userService.getUserByUsername(username);
    return data ? data : {};
  }
}
