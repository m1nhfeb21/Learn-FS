const colors = ["Red", "Green", "Blue", "Yellow"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(`Phần tử thứ nhất ${firstColor}
Phần tử thứ hai ${(secondColor = 5)}
Phần tử thứ ba ${thirdColor}`);

console.log(colors);
