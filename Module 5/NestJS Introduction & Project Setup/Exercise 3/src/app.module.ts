import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { DatabaseModule } from './database/database.module.js';
import { InventoryModule } from './inventory/inventory.module.js';

@Module({
  imports: [UsersModule, DatabaseModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
