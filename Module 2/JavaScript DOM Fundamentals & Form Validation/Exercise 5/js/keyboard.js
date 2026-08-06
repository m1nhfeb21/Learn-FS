let KeyInput = document.getElementById("user-input");
let result = document.getElementById("result");
KeyInput.addEventListener("keydown", function (e) {
  let newWord = document.createElement("p");
  newWord.textContent = e.key;
  result.appendChild(newWord);
});
