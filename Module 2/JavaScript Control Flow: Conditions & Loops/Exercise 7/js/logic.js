let salary = Number(prompt("Nhập số tiền lương"));
let age = Number(prompt("Nhập số tuổi"));
let Statusdebt = String(prompt("Nhập trạng thái (Yes/No):"));
let loan;
let loan = salary > 15000000 && age >= 18 && age <= 60 && Statusdebt == "No";

console.log(loan);
