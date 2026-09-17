import React from "react";

function App() {
  const keyword = "Laptop Gaming";
  const page = 2;

  axios.get("https://api.example.com/products", {
    params: {
      search: keyword,
      page: page,
    },
  })
    .then((res) => console.log(res.data));
  return <div>App</div>;
}

export default App;
