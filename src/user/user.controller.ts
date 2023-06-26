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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
