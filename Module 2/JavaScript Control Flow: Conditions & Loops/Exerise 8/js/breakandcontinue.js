let a = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 5 === 0) continue;
  a += i;
  console.log(" " + i);
  if (a > 200) break;
}

console.log("Tổng cuối cùng: " + a);
