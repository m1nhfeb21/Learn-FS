import React from "react";
import { useState } from "react";
import WelcomeBanner from "./WelcomeBanner";
import Loggin from "./Loggin";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <WelcomeBanner />
      ) : (
        <Loggin onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}
