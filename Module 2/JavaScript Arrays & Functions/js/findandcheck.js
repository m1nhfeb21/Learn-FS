let array = [1, 5, 7, 4, 2];
let number = Number(prompt("Nhập số cần tìm: "));

const checkNumber = (searchValue) => {
  const checkExist = array.includes(searchValue);
  if (checkExist) {
    const index = array.indexOf(searchValue);
    console.log("Vị trí của phần tử đó trong mảng là: ", index);
  } else console.log("Not Found");
};

checkNumber(number);
