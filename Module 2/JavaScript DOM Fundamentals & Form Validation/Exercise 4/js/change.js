let getDiv = document.getElementById("changeBackground");

let colorBtn = document.getElementById("changecolorBtn");

colorBtn.addEventListener("click", function () {
  getDiv.classList.toggle("hightlight");
});
