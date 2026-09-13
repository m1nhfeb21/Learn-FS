import React from "react";
import { useState } from "react";

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
    console.log("Trạng thái hiện tại:", isExpanded);
  };
  return (
    <div>
      <p>
        {isExpanded
          ? "Nội dung mô tả chi tiết của khóa học..."
          : "Mô tả ngắn gọn..."}
      </p>
      <button onClick={toggleDescription}>Xem chi tiết</button>
    </div>
  );
}

export default App;
