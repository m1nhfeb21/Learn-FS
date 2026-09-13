import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);
  return <div>Thời gian thực thi còn lại :{timeLeft} giây</div>;
}

export default App;
