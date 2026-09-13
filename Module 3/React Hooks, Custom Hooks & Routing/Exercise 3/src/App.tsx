import React from "react";
import { useState, useEffect, useRef } from "react";

function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const isScrollingRef = useRef<boolean>(false);

  const handleRegister = () => {
    // Nếu đang cuộn thì bỏ qua click tiếp theo
    if (isScrollingRef.current) return;

    // Khóa
    isScrollingRef.current = true;

    // Cuộn lên form
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Sau khi cuộn thì focus Email
    setTimeout(() => {
      emailRef.current?.focus();

      // Mở khóa
      isScrollingRef.current = false;
    }, 500);
  };
  return (
    <div>
      <div
        ref={formRef}
        style={{ padding: "30px", border: "1px solid black", margin: "30px" }}
      >
        <h2>Đăng ký tư vấn</h2>
        <label>Email</label>
        <br />
        <input
          ref={emailRef}
          type="email"
          placeholder="Nhập email"
          style={{ padding: "10px", width: "300px" }}
        ></input>
      </div>

      <div style={{ height: "1200px", padding: "30px" }}>
        <h2>Chương trình đào tạo</h2>
        <p>Nội dung giới thiệu chương trình đào tạo...</p>

        <div style={{ padding: "30px", textAlign: "center" }}>
          <button
            type="button"
            onClick={handleRegister}
            style={{ padding: "12px 20px", cursor: "pointer" }}
          >
            Đăng ký tư vấn
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
