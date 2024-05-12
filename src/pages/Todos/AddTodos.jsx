import { useState } from "react";
import add_icon from "../../assets/add.svg";
import AddTodosCard from "../../components/AddTodosCard";
export default function AddTodos() {
  const [open, setOpen] = useState(false);
  function handleCreateTodo() {
    setOpen((prev) => !prev);
  }
  return open ? (
    <AddTodosCard open={open} setOpen={setOpen} />
  ) : (
    <div
      onClick={handleCreateTodo}
      className="sticky cursor-pointer left-0 bottom-0 bg-container flex items-center gap-2 py-2"
    >
      <img src={add_icon} />
      <p className="text-black text-sm font-medium">Add another card</p>
    </div>
  );
}
