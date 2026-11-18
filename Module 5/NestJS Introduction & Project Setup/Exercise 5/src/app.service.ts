import { Injectable } from '@nestjs/common';

@Injectable() //DI - IOC (dependency injection - inversion of control)
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAllOrders(): string {
    return 'Connect cart';
  }
  createOrder(): string {
    return 'Create order successfully';
  }
}
