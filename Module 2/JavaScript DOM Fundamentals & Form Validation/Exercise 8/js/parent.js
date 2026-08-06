let deleteBtn = document.querySelectorAll(".delete-btn");

deleteBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.remove();
  });
});
