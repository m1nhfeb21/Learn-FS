import React from "react";
import { useCountdown } from "../hooks/useCountdown";
function QuizTimer() {
  const { timeLeft, isRunning, start, pause, reset } = useCountdown(10);

  return (
    <div>
      <h2>Bài kiểm tra</h2>

      <h1>{timeLeft}</h1>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>

      <p>Trạng thái: {isRunning ? "Đang chạy" : "Đang dừng"}</p>
    </div>
  );
}

export default QuizTimer;
