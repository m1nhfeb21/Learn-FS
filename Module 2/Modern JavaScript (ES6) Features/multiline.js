let productName = prompt("Nhập tên sản phẩm");
let productPrice = prompt("Nhập giá sản phẩm");
let quantity = prompt("Nhập số lượng sản phẩm");

const text = `You bought ${quantity} units of ${productName}
Price per unit: ${productPrice}
Total: ${productPrice * quantity}`;

console.log(text);
