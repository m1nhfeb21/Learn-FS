import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from './inventory.controller.js';
import { InventoryService } from './inventory.service.js';
import { DatabaseService } from '../database/database.service.js';

describe('InventoryController', () => {
  let controller: InventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryController],
      providers: [InventoryService, { provide: DatabaseService, useValue: { getConnection: () => 'Database connection' } }],
    }).compile();

    controller = await module.resolve<InventoryController>(InventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the inventory health message', () => {
    expect(controller.ping()).toBe('Inventory Module is running!');
  });

  it('should return the product ID from a route parameter', () => {
    expect(controller.findOne('99')).toBe('Fetching product ID: 99');
  });

  it('should call the database service through the inventory service', () => {
    expect(controller.checkDatabase()).toBe('Database connection');
  });
});
