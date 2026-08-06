let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
  alert("Đây là cha");
});

child.addEventListener("click", function (event) {
  alert("Đây là con");
  event.stopPropagation();
});
