import TodosCard from "../../components/TodosCard";
import { useListInprogressTodos } from "../../queries/todosQueries";

export default function InprogressLists() {
  const { data } = useListInprogressTodos();
  return (
    <div className="bg-container px-5 rounded-md overflow-y-auto relative min-w-80">
      <h1 className="text-base bg-container py-5 font-semibold mb-2.5 sticky left-0 top-0">
        IN PROGRESS
      </h1>
      <div className="flex flex-col gap-5 mb-5">
        {data?.map((item) => (
          <TodosCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
}
