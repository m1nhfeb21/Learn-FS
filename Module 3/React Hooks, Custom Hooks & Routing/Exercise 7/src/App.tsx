import React from "react";
import { useState, useEffect, useRef } from "react";
import CourseSearch from "./components/modules/CourseSearch";
import QuizTimer from "./components/QuizTimer";
import FlashSale from "./components/FlashSale";
function App() {
  return (
    <div>
      <QuizTimer />
      <hr />
      <FlashSale></FlashSale>
    </div>
  );
}

export default App;
