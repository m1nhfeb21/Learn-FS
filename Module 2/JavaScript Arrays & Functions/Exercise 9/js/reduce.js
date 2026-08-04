let prices = [100, 200, 300, 400];

const totalPrice = (prices) => {
  let sum = prices.reduce((total, number) => total + number, 0);
  let vat = sum * 0.1;
  let finalPrice = sum + vat;
  return finalPrice;
};

console.log(totalPrice(prices));
