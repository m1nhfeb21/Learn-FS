import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersService } from './users/users.service.js';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, { provide: UsersService, useValue: {} }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('orders', () => {
    it('should return the current orders response', () => {
      expect(appController.getAllOrders()).toBe('Connect cart');
    });
  });
});
