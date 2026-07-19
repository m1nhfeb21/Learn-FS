let diemchuyencan = Number(prompt("Nhập điểm chuyên cần từ 0 đến 100:"));
let diemtrungbinh = Number(prompt("Nhập điểm trung bình:"));
let giayphepdacbiet = confirm("Sinh viên có giấy phép đặc biệt?");

let duocduthi = (diemchuyencan > 80 && diemtrungbinh >= 5) || giayphepdacbiet;

console.log("Điểm chuyên cần:", diemchuyencan);
console.log("Điểm trung bình:", diemtrungbinh);
console.log("Có giấy phép đặc biệt:", giayphepdacbiet);

if (duocduthi) {
  console.log("Kết quả: Được dự thi");
  alert("Kết quả: Được dự thi");
} else {
  console.log("Kết quả: Không được dự thi");
  alert("Kết quả: Không được dự thi");
}
