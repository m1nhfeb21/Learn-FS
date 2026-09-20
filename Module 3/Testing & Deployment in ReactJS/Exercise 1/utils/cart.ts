type CartItem = {
  price: number;
};
export function calculateCart(items: CartItem[]) {
  const total = items.reduce((sum, item) => {
    return sum + item.price;
  }, 0);
  return {
    total: total,
    items: items.length,
  };
}
