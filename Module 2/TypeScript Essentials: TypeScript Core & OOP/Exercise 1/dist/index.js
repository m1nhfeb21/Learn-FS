let studentName;
let studentAge;
let isEnrolled;
let skills = [];
studentName = String(prompt("Nhập tên"));
studentAge = Number(prompt("Nhập tuổi"));
isEnrolled = confirm("Đã đăng ký nhập học chưa?");
skills.push(`${studentName}, ${studentAge}, ${isEnrolled}`);
console.log(skills);
export {};
//# sourceMappingURL=index.js.map
