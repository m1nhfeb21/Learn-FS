import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Footer phải nằm trong ThemeProvider");
  }

  const { theme } = context;

  return (
    <footer
      style={{
        backgroundColor: theme === "light" ? "#eeeeee" : "#111",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
      }}
    >
      Footer - Theme hiện tại: {theme}
    </footer>
  );
}
