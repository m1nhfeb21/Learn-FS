let getAlert = document.getElementById("btn-click");

getAlert.addEventListener("click", function (e) {
  alert("Button Clicked!");
  console.log(e);
});
