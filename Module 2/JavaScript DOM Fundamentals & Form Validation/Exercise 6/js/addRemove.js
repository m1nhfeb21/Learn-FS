let AddItemBtn = document.getElementById("AddItem");
let RemoveItemBtn = document.getElementById("RemoveItem");
let list = document.getElementById("item-list");

AddItemBtn.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
});

RemoveItemBtn.addEventListener("click", function () {
  if (list.lastElementChild) list.lastElementChild.remove();
});
