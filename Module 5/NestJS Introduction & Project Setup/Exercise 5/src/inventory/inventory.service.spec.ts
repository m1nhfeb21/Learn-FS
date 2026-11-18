import { Test, TestingModule } from '@nestjs/testing';
import { InventoryService } from './inventory.service.js';
import { DatabaseService } from '../database/database.service.js';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryService, { provide: DatabaseService, useValue: { getConnection: () => 'Database connection' } }],
    }).compile();

    service = module.get<InventoryService>(InventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the inventory health message', () => {
    expect(service.ping()).toBe('Inventory Module is running!');
  });

  it('should reuse DatabaseService through dependency injection', () => {
    expect(service.checkDatabase()).toBe('Database connection');
  });
});
