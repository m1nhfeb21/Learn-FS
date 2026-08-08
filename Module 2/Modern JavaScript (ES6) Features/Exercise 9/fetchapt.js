async function getUsers() {
  try {
    const getData = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await getData.json();
    users.forEach((user) => {
      console.log(user.name);
    });
  } catch (error) {
    console.log("Lỗi");
  }
}

getUsers();
