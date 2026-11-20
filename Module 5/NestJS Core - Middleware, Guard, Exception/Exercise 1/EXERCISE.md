# Bài thực hành 1 — Functional Logging Middleware (NestJS)

## Yêu cầu

- Viết functional middleware nhận `req`, `res`, `next`.
- In phương thức HTTP (`req.method`) và đường dẫn URL (`req.url`) vào console.
- Đăng ký middleware toàn ứng dụng trong `src/main.ts` bằng `app.use(logger)`.
- Gọi `next()` để request tiếp tục đến route handler hoặc bộ xử lý 404.

## Vị trí code

- `src/logger/logger.middleware.ts`: hàm `logger()` ghi log phương thức và URL, sau đó gọi `next()`.
- `src/main.ts`: đăng ký `app.use(logger)` trước `app.listen(...)`.
- `src/app.controller.ts`: route `GET /` trả về `Hello World!` (do NestJS scaffold tạo).

## Chạy và kiểm tra

```bash
npm ci --legacy-peer-deps
npm run start:dev
```

Trong terminal thứ hai:

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/hello
```

Kỳ vọng:

- `GET /` → HTTP 200 và `Hello World!`; terminal server in `GET /`.
- `GET /hello` → HTTP 404 (chưa định nghĩa route); terminal server vẫn in `GET /hello`.

Kiểm tra build và unit test:

```bash
npm run build
npm test
```

> Lưu ý: Tên chủ đề bao gồm Middleware, Guard và Exception nhưng bài này **chỉ thực hành Middleware**. Các bài khác sẽ bổ sung Guard và Exception sau.
