import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import User from 'src/repositories/entities/user';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllUsers(): Promise<User> {
    return await this.appService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    return await this.appService.getUserById(id);
  }

  @Get('byname/:name')
  async getUserByName(@Param('name') name: string): Promise<User> {
    return await this.appService.getUserByName(name);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return await this.appService.createUser(user);
  }
  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    return await this.appService.updateUser(id, user);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<User> {
    return await this.appService.deleteUser(id);
  }
}
