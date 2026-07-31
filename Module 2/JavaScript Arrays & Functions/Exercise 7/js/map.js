let scores = [1, 2, 3, 4, 5];

scores.forEach((score) => {
  console.log(`${score} bình phương bằng: `, score ** 2);
});

const doublescore = scores.map((score) => {
  return score * 2;
});

console.log("Mảng ban đầu: ", scores);
console.log("Mảng đã nhân đôi: ", doublescore);
