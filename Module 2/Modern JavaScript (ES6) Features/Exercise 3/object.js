let userProfile = {
  username: "minh",
  age: 20,
  email: "minh@gmail.com",
  address: {
    city: "nha trang",
  },
};

let {
  username: fullname,
  address: { city },
} = userProfile;

console.log(fullname);
console.log(city);
