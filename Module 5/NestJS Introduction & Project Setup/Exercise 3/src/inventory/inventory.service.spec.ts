import { Test, TestingModule } from '@nestjs/testing';
import { InventoryService } from './inventory.service.js';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryService],
    }).compile();

    service = module.get<InventoryService>(InventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the inventory health message', () => {
    expect(service.ping()).toBe('Inventory Module is running!');
  });
});
