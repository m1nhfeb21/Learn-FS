import { useState } from "react";
import { get } from "./api/apiClient";

function App() {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    try {
      const data = await get("/posts", {
        userId: 1,
        page: undefined,
      });

      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };
  return (
    <div>
      <button onClick={handleGetPosts}>Lấy dữ liệu</button>
      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default App;
