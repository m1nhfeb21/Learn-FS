import React from "react";
import { useState } from "react";

type LoginPros = {
  onLogin: () => void;
};

export default function Loggin({ onLogin }: LoginPros) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      username.includes(" ")
    ) {
      setError("Kiểm tra lại thông tin đăng nhập");
      return;
    }

    setError("");
    onLogin();
  };
  return (
    <div>
      <h2>Đăng Nhập</h2>
      <label htmlFor="username">Tên tài khoản</label>
      <input
        id="username"
        type="text"
        placeholder="nguyenvana"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label htmlFor="password">Mật khẩu</label>
      <input
        id="password"
        type="password"
        placeholder="123456@"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button onClick={handleLogin}>Đăng nhập</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
