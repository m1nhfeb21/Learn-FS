import { Injectable, Scope } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto.js';
import { UpdateInventoryDto } from './dto/update-inventory.dto.js';
import { DatabaseService } from '../database/database.service.js';
@Injectable({ scope: Scope.REQUEST })
export class InventoryService {
  private mockProducts = [{ id: 1, name: 'Laptop' }];

  constructor(private readonly databaseService: DatabaseService) {
    console.log('Service Init');
  }

  checkDatabase(): string {
    return this.databaseService.getConnection();
  }
  ping(): string {
    return 'Inventory Module is running!';
  }

  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
  }

  findAll() {
    return this.mockProducts;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`;
  }

  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
