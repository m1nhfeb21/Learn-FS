let a = Number(prompt("Nhập một số bất kỳ: "));

let isPrime = true;

if (!Number.isInteger(a) || a < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) console.log(a + " là số nguyên tố");
else console.log(a + " Không phải là số nguyên tố");
