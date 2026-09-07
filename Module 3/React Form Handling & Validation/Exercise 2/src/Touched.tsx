import { useFormik } from "formik";

import React from "react";

export default function Touched() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validate: (values) => {
      const errors: { email?: string } = {};
      if (!values.email) {
        errors.email = "Email không được để trống";
      } else if (!values.email.includes("@")) {
        errors.email = "Email không hợp lệ";
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Đăng ký nhận bản tin</h2>

      <input
        type="email"
        name="email"
        placeholder="Nhập email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.email && formik.errors.email && (
        <p style={{ color: "red" }}>{formik.errors.email}</p>
      )}

      <button type="submit">Đăng ký</button>
    </form>
  );
}
