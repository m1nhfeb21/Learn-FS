let a = Number(prompt("Nhập số thứ nhất"));
let b = Number(prompt("Nhập số thứ hai"));
let pheptinh = String(prompt("Nhập phép tính"));
let c;
if (pheptinh == "+") {
  c = a + b;
}

if (pheptinh == "-") {
  c = a - b;
}

if (pheptinh == "/") {
  if (b == 0) {
    alert("Không có phép chia cho 0");
  } else c = a / b;
}

if (pheptinh == "*") {
  c = a * b;
}

alert("Kết quả của phép tính a và b là: " + c);
