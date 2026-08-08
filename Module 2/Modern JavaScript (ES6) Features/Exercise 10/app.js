let btn = document.getElementById("get-user");
let userlist = document.getElementById("user-list");

import { fetchUser } from "./apiService.js";

const users = await fetchUser();

const newArray = users.map(({ name, email, website }) => {
  return { name, email, website };
});

btn.addEventListener("click", () => {
  if (userlist.children.length > 0) {
    userlist.innerHTML = "";
    return;
  }
  newArray.forEach((user) => {
    let li = document.createElement("li");
    li.textContent = `${user.name}-${user.email}-${user.website}`;
    userlist.appendChild(li);
  });
});
