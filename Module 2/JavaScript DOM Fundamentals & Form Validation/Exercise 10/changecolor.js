const colors = ["red", "blue", "green", "yellow", "purple"];

let changecolor = document.getElementById("changeBackground");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
changecolor.addEventListener("click", () => {
  shuffle(colors);
  document.body.style.backgroundColor = colors[0];
});
