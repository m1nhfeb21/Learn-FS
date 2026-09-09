import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  newPassword: Yup.string()
    .required("Vui lòng xác nhận mật khẩu")
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự"),

  confirmPassword: Yup.string()
    .required("Vui lòng xác nhận mật khẩu")
    .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không khớp"),
});

function PasswordForm() {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema,
    onSubmit: (values) => {
      console.log("Dữ liệu hợp lệ:", values);
      alert("Tạo mật khẩu thành công!");
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Tạo mật khẩu cấp 2</h2>

        <div>
          <label>Mật khẩu mới</label>

          <input
            type="password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>

          {formik.touched.newPassword && formik.errors.newPassword && (
            <p style={{ color: "red" }}>{formik.errors.newPassword}</p>
          )}
        </div>

        <div>
          <label>Xác nhận mật khẩu</label>

          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>

          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p style={{ color: "red" }}>{formik.errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit">Tạo mật khẩu</button>
      </form>
    </div>
  );
}

export default PasswordForm;
