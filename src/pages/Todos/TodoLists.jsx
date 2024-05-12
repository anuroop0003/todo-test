import TodosCard from "../../components/TodosCard";
import { useListOpenTodos } from "../../queries/todosQueries";
import AddTodos from "./AddTodos";

export default function TodoLists() {
  const { data } = useListOpenTodos();
  console.log("data", data);
  return (
    <div
      className="bg-container px-5 rounded-md overflow-y-auto relative min-w-80"
      id="todo-list-container"
    >
      <h1 className="text-base bg-container py-5 font-semibold mb-2.5 sticky left-0 top-0">
        TO DO
      </h1>
      <div className="flex flex-col gap-5">
        {data?.map((item) => (
          <TodosCard key={item?.id} data={item} />
        ))}
      </div>
      <AddTodos />
    </div>
  );
}
