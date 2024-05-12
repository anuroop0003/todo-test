import { useFormik } from "formik";
import { useEffect } from "react";
import { useCreateTodos } from "../queries/todosQueries";
import {
  createTodo,
  initialValuesCreateTodo,
} from "../validations/createTodosValidation";
import Button from "./Button";
import Select from "./Select";

const selectOptions = [
  {
    label: "low priority",
    value: "0",
  },
  {
    label: "medium priority",
    value: "1",
  },
  {
    label: "high priority",
    value: "2",
  },
  {
    label: "highest priority",
    value: "3",
  },
];

export default function AddTodosCard({ open, setOpen }) {
  const { mutateAsync: mutateCreate } = useCreateTodos();
  useEffect(() => {
    if (open) {
      const container = document.getElementById("todo-list-container");
      container.scrollTop = container.scrollHeight;
    }
  }, [open]);

  const formik = useFormik({
    initialValues: initialValuesCreateTodo,
    validateOnChange: false,
    validateOnBlur: false,
    enableReinitialize: true,
    validationSchema: createTodo,
    onSubmit: (values) => {
      mutateCreate(values)
        .then(() => {
          formik.handleReset();
          setOpen(false);
        })
        .catch(() => {
          formik.handleReset();
          setOpen(false);
        });
    },
  });
  function handleOnChange(e) {
    formik.setFieldValue("priority", Number(e.target.value));
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="rounded-sm bg-white p-2 flex flex-col gap-2 my-5"
    >
      <textarea
        name="title"
        onChange={formik.handleChange}
        maxLength={100}
        rows={3}
        placeholder="Enter Title"
        className={`${
          formik.errors.title && "border-red-500"
        } text-sm font-normal p-2 text-content_color border border-slate-400 resize-none focus:outline-none`}
      />
      <div className="flex justify-between items-center">
        <Select
          className="w-32"
          options={selectOptions}
          onChange={(e) => handleOnChange(e)}
        />
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => setOpen(false)}
            className="w-16 h-7 !p-0 !m-0 !text-xs !bg-delete_red"
            label="Cancel"
            type="button"
          />
          <Button
            type="submit"
            className="w-16 h-7 !p-0 !m-0 !text-xs"
            label="Submit"
          />
        </div>
      </div>
    </form>
  );
}
