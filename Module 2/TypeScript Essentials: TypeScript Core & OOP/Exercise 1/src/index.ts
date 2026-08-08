let studentName: string;
let studentAge: number;
let isEnrolled: boolean;

let skills: string[] = [];

studentName = String(prompt("Nhập tên"));
studentAge = Number(prompt("Nhập tuổi"));
isEnrolled = confirm("Đã đăng ký nhập học chưa?");

skills.push(`${studentName}, ${studentAge}, ${isEnrolled}`);

console.log(skills);
