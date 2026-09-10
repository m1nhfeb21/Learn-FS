import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Vui lòng nhập họ và tên")
    .max(100, "Tên được phép tối đa 100 ký tự"),
  cccd: Yup.string()
    .required("Vui lòng nhập căn cước công dân")
    .matches(/^[0-9]{12}$/, "Căn cước công dân phải bao gồm đúng 12 chữ số"),
  income: Yup.number()
    .required("Vui lòng nhập thu nhập hàng tháng")
    .moreThan(5000000, "Thu nhập phải lớn hơn 5.000.000")
    .typeError("Thu nhập phải là một số hợp lệ"),
});
function Intergrate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      cccd: "",
      income: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Dữ liệu hợp lệ:", values);
      alert("Kiểm chuẩn thành công");
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Tạo thông tin người dùng</h2>
        <div>
          <label htmlFor="name">Tên người dùng</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>

          <label htmlFor="cccd">Căn cước công dân</label>
          <input
            type="text"
            name="cccd"
            value={formik.values.cccd}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>

          <label htmlFor="income">Thu nhập hàng tháng</label>
          <input
            type="text"
            name="income"
            value={formik.values.income}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>

          {formik.touched.name && formik.errors.name && (
            <p style={{ color: "red" }}>{formik.errors.name}</p>
          )}

          {formik.touched.cccd && formik.errors.cccd && (
            <p style={{ color: "red" }}>{formik.errors.cccd}</p>
          )}

          {formik.touched.income && formik.errors.income && (
            <p style={{ color: "red" }}>{formik.errors.income}</p>
          )}
        </div>
        <button type="submit">Tạo thông tin người dùng</button>
      </form>
    </div>
  );
}

export default Intergrate;
