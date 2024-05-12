import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/login/logo.svg";
import Button from "../../components/Button";
import NormalInput from "../../components/NormalInput";
import PasswordInput from "../../components/PasswordInput";
import {
  initialValuesLogin,
  validateLogin,
} from "../../validations/loginValidations";

export default function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValuesLogin,
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,

    validationSchema: validateLogin,
    onSubmit: (values) => {
      sessionStorage.setItem("token", true);
      navigate("/todos");
    },
  });

  return (
    <div className="relative flex justify-center items-center flex-col p-5">
      <span className="md:fixed md:top-5 md:left-5 flex items-center gap-2">
        <img src={Logo} />
        <span className="text-lg font-bold">DoDo</span>
      </span>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full mt-10 lg:mt-0 lg:w-3/4 xl:w-1/2"
      >
        <h1 className="text-center mt-5 mb-10 text-xl font-bold">Sign In</h1>
        <label className="mt-5">Email</label>
        <NormalInput
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          className="my-2.5 relative"
          placeholder="Email"
          isInvalid={formik.errors.email}
          handleClick={() => formik.setFieldValue("email", "")}
        />
        <label className="mt-5">Password</label>
        <PasswordInput
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          className="relative my-2.5"
          placeholder="Password"
          isInvalid={formik.errors.password}
        />
        <Button type="submit" className="!mt-10" label="Sign In" />
      </form>
    </div>
  );
}
