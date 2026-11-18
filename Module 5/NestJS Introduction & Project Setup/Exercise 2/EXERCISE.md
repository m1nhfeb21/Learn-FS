# Bài 2 — Xây dựng REST Route cơ bản (NestJS)

Yêu cầu: Tạo HTTP GET `/inventory/ping` và trả về chính xác `Inventory Module is running!`.

- `src/inventory/inventory.controller.ts`: `@Controller('inventory')`, `@Get('ping')` và lời gọi `this.inventoryService.ping()`.
- `src/inventory/inventory.service.ts`: `ping()` trả về chuỗi yêu cầu.
- `src/inventory/inventory.module.ts`: Đăng ký Controller và Service để NestJS thực hiện Dependency Injection.
- `src/app.module.ts`: Import `InventoryModule`.

## Chạy và kiểm thử

```bash
npm ci --legacy-peer-deps
npm run start:dev
# Trên terminal khác:
curl http://localhost:3000/inventory/ping
```

Kết quả: `Inventory Module is running!`.

```bash
npm run build
npm test
```

Thư mục này cũng giữ lại các bài thực hành `orders`, `users`, `database` đã có trong project học NestJS của buổi học.
