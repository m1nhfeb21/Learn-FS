import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Header() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Header phải nằm trong ThemeProvider");

  const { theme, toggleTheme } = context;

  return (
    <header>
      <h1>Theme hiện tại: {theme}</h1>

      <button onClick={toggleTheme}>Đổi giao diện</button>
    </header>
  );
}
