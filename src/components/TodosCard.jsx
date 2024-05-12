import delete_icon from "../assets/delete.svg";
import { useDeleteTodos, useUpdateTodos } from "../queries/todosQueries";
import DateViewer from "./DateViewer";
import PrioritySorter from "./PrioritySorter";
import Select from "./Select";

const selectOptions = [
  {
    label: "Todo",
    value: "0",
  },
  {
    label: "In progress",
    value: "1",
  },
  {
    label: "Completed",
    value: "2",
  },
];
export default function TodosCard({ data }) {
  const { mutate: mutateUpdate } = useUpdateTodos();
  const { mutate: mutateDelete } = useDeleteTodos();
  function handleOnChange(e, id) {
    mutateUpdate({ id, status: Number(e.target.value) });
  }
  function handleDeleteTask(id) {
    mutateDelete(id);
  }
  return (
    <div className="rounded-sm bg-white p-2 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <PrioritySorter priority={data.priority} />
        <span
          onClick={() => handleDeleteTask(data.id)}
          className="bg-delete_red h-5 w-5 flex justify-center items-center rounded-sm cursor-pointer"
        >
          <img className="h-full w-full px-[5px]" src={delete_icon} />
        </span>
      </div>
      <h1 className="text-sm font-normal text-content_color">{data.title}</h1>
      <div className="flex justify-between items-center">
        <DateViewer date_string={data.createdAt} />
        <Select
          options={selectOptions}
          onChange={(e) => handleOnChange(e, data.id)}
        />
      </div>
    </div>
  );
}
