import { Module } from '@nestjs/common';
import { UserController } from 'src/users/controllers/user/user.controller';
import { UserService } from 'src/users/services/user/user.service';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';

@Module({
  controllers: [UserController, PostController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    PostService,
  ],
})
export class UsersModule {}
