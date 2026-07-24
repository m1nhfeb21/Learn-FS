let w = Number(prompt("Nhập chiều rộng"));
let h = Number(prompt("Nhập chiều dài"));

let row = "";
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    row += "* ";
  }
  row += "\n";
}

console.log(row);
