import { number, object, string } from "yup";

export const initialValuesCreateTodo = {
  createdAt: new Date().toISOString(),
  title: "",
  priority: 1,
  status: 0,
};

export const createTodo = object({
  createdAt: string().optional(),
  title: string().required("Field is required"),
  priority: number().required("Field is required"),
  status: number().optional(),
});
