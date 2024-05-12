import { object, string } from "yup";

export const initialValuesLogin = {
  email: "test@gmail.com",
  password: "qwertyuiop",
};

export const validateLogin = object({
  email: string().email().required("Field is required"),
  password: string().required("Field is required"),
});
