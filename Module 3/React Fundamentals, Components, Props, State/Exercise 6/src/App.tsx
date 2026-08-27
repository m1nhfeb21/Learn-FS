import React from "react";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

type FormData = {
  username: string;
  password: string;
};

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formUser, SetFormUser] = useState<FormData[]>([]);
  const [error, setError] = useState("");

  const handleInformationUser = () => {
    if (
      username.trim() == "" ||
      password.trim() === "" ||
      username.includes(" ")
    ) {
      setError("Vui lòng kiểm tra lại thông tin");
      return;
    }

    const newUser: FormData = {
      username: username,
      password: password,
    };

    console.log({
      username,
      password,
    });

    SetFormUser([...formUser, newUser]);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <>
      <h2>Form đăng nhập</h2>

      <label htmlFor="username">Nhập tên đăng nhập</label>
      <input
        id="username"
        type="text"
        placeholder="nguyenvana..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <label htmlFor="password">Nhập mật khẩu</label>
      <input
        id="password"
        type="password"
        placeholder="123456@"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>

      <button onClick={handleInformationUser}>Thêm thông tin người dùng</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {formUser.map((user) => (
          <RegisterForm
            username={user.username}
            password={user.password}
          ></RegisterForm>
        ))}
      </div>
    </>
  );
}
