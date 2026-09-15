import { useCountdown } from "../hooks/useCountdown";

export default function FlashSale() {
  const { timeLeft, start, pause, reset } = useCountdown(20);

  return (
    <div>
      <h2>Flash Sale</h2>

      <h1>{timeLeft}</h1>

      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
