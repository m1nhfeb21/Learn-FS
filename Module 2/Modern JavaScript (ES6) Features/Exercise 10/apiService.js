export async function fetchUser() {
  try {
    const getData = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await getData.json();

    return users;
  } catch (error) {
    console.log("Không thấy dữ liệu");
  }
}
