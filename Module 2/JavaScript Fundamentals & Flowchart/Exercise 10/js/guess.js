let RandomNumber = Math.floor(Math.random() * 100) + 1;

let guessedCorrectly = false;

console.log("Số bí mật", RandomNumber);

for (let attempt = 1; attempt <= 5; attempt++) {
  const guess = Number(
    prompt(`Lần đoán ${attempt}/5 - Nhập một số từ 1 đến 100:`),
  );
  if (guess === RandomNumber) {
    console.log("Chúc mừng");
    guessedCorrectly = true;
    break;
  } else if (guess > RandomNumber) {
    console.log("Số bạn đoán quá lớn.");
  } else {
    console.log("Số bạn đoán quá nhỏ.");
  }
}

if (!guessedCorrectly) {
  console.log("Game Over! Số đúng là: " + RandomNumber);
}
