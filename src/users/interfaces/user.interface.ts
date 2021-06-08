import { userDto } from '../dto/user.dto';

export interface User {
  createUser(user: userDto);
  getUser();
  getUserByUsername(username: string): userDto | undefined;
}
