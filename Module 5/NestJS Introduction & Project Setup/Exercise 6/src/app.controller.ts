import { Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
import { AppService } from './app.service.js';
import { UsersService } from './users/users.service.js';

@Controller('orders')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}

  @Get()
  getAllOrders(): string {
    return this.appService.getAllOrders();
  }

  @Post()
  CreateOrder(): string {
    return this.appService.createOrder();
  }
}
