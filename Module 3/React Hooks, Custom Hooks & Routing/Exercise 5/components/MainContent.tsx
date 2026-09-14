import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function MainContent() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("MainContent phải nằm trong ThemeProvider");
  const { theme } = context;
  return (
    <main
      style={{
        backgroundColor: theme === "light" ? "white" : "#0222",
        color: theme === "light" ? "black" : "white",
        minHeight: "400px",
        padding: "20px",
      }}
    >
      <h2>Nội dung chính</h2>
      <p>Theme hiện tại trong MainContent: {theme}</p>
    </main>
  );
}

export default MainContent;
