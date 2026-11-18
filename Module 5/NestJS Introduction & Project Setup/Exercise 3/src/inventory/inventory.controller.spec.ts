import { Test, TestingModule } from '@nestjs/testing';
import { InventoryController } from './inventory.controller.js';
import { InventoryService } from './inventory.service.js';

describe('InventoryController', () => {
  let controller: InventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryController],
      providers: [InventoryService],
    }).compile();

    controller = module.get<InventoryController>(InventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the inventory health message', () => {
    expect(controller.ping()).toBe('Inventory Module is running!');
  });
});
