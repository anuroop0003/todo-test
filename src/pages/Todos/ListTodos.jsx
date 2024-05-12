import CompletedLists from "./CompletedLists";
import InprogressLists from "./InprogressLists";
import TodoLists from "./TodoLists";

export default function ListTodos() {
  return (
    <div className="flex w-full overflow-x-auto lg:grid lg:grid-cols-3 gap-5 mt-10 h-[calc(100%-80px)]">
      <TodoLists />
      <InprogressLists />
      <CompletedLists />
    </div>
  );
}
