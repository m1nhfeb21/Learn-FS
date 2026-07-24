let a;

do {
  a = Number(prompt("Nhập các số từ khoảng 1 đến 10"));
} while (a < 1 || a > 10 || Number.isNaN(a));

alert("Số hợp lệ bạn vừa nhập là " + a);
