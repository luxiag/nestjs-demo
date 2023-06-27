import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';
import { User } from './user.entity';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @Get()
  findAll() {
    // const db = this.configService.get(ConfigEnum.DB);
    // return db;
    // return this.userService.findAll();
  }
  @Get()
  getUsers(): any {
    return this.userService.findAll();
  }

  @Post()
  addUser(): any {
    const user = { username: 'toimc', password: '123456' } as User;
    return this.userService.create(user);
  }

  @Patch()
  updateUser(): any {
    const user = { username: 'newname' } as User;
    return this.userService.update(1, user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  @Get('/profile')
  getUserProfile(): any {
    return this.userService.findProfile(2);
  }

  @Get('/logs')
  getUserLogs(): any {
    return this.userService.findUserLogs(2);
  }
}
