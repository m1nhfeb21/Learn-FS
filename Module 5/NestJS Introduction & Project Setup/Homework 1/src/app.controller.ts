import { Controller, Delete, Patch, Post, Param } from '@nestjs/common';
import { AppService } from './app.service.js';
import { UsersService } from './users/users.service.js';
import { appConfig } from './config.constants.js';
import { Inject, Get } from '@nestjs/common';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UsersService,
  ) {}
  @Inject('APP_CONFIG')
  private readonly config: typeof appConfig;
  @Get()
  getAllOrders(): string {
    return this.appService.getAllOrders();
  }
  @Get('info')
  getInfo() {
    return this.config;
  }
  @Post()
  CreateOrder(): string {
    return this.appService.createOrder();
  }
}
