import Header from "./Header";
import ListTodos from "./ListTodos";

export default function Todos() {
  return (
    <div className="p-5 h-screen">
      <Header />
      <ListTodos />
    </div>
  );
}
