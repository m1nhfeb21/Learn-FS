import React from "react";

type RegisterForm = {
  username: string;
  password: string;
};
export default function RegisterForm({ username, password }: RegisterForm) {
  return (
    <>
      <h2>Thông tin đăng nhập của người dùng</h2>
      <h3>Tên đăng nhập: {username}</h3>
      <h3>Mật khẩu đăng nhập: {password}</h3>
    </>
  );
}
