let array = [];
let check = false;
const pushElementintoArray = () => {
  let numbers = Number(prompt("Nhập một số bất kỳ"));
  if (numbers === 0) {
    check = true;
    return;
  }
  array.push(numbers);
};

const sumAllNumbers = (...numbers) => {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

while (true) {
  pushElementintoArray();
  if (check) break;
}

let sum = sumAllNumbers(...array);
console.log(array);
console.log(sum);
