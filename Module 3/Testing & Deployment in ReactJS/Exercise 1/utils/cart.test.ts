import { describe, expect, test } from "@jest/globals";
import { calculateCart } from "./cart";
describe("Cart Logic", () => {
  it("trả về đối tượng giỏ hàng chuẩn xác", () => {
    const result = calculateCart([{ price: 100 }, { price: 200 }]);

    expect(result).toBe({ total: 300, items: 2 });
  });
});
