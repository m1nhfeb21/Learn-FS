import React from "react";
import { useState } from "react";

function Update() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    address: "",
    birthday: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Cập nhập hồ sơ</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      ></input>

      <input
        type="text"
        name="fullName"
        placeholder="Họ và tên"
        value={formData.fullName}
        onChange={handleChange}
      ></input>

      <input
        type="tel"
        name="phone"
        placeholder="Số điện thoại"
        value={formData.phone}
        onChange={handleChange}
      ></input>

      <input
        type="text"
        name="address"
        placeholder="Địa chỉ"
        value={formData.address}
        onChange={handleChange}
      ></input>

      <input
        type="date"
        name="birthday"
        value={formData.birthday}
        onChange={handleChange}
      />

      <hr></hr>
      <p>Email: {formData.email}</p>
      <p>Họ tên: {formData.fullName}</p>
      <p>SĐT: {formData.phone}</p>
      <p>Địa chỉ: {formData.address}</p>
      <p>Ngày sinh: {formData.birthday}</p>
    </div>
  );
}

export default Update;
