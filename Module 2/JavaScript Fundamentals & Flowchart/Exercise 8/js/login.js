const ADMIN_USER = "Ngocminh";
const ADMIN_PASS = "21022006";

let user = prompt("Nhập tên người dùng: ");
let pass = prompt("Nhập mật khẩu người dùng: ");

console.log(ADMIN_USER);
console.log(user);
let check = user === ADMIN_USER && pass === ADMIN_PASS;
if (check) {
  alert("Đăng nhập thành công");
} else {
  alert("Sai tên đăng nhập hoặc mật khẩu");
}
