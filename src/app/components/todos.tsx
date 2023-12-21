"use client";
import { TodoCard } from "@/app/components/ui/todoCard";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
export type Todo = {
  name: string;
  description: string;
  onFinished?: (key: string) => void;
};
export default function Todos() {
  const [data, setData, removeData, getAllData] = useLocalStorage("Todos");
  const Todos = getAllData() as Todo[];

  return (
    <div className="flex flex-col gap-4">
      {Todos.map((todo) => {
        return (
          <TodoCard
            key={todo.name}
            name={todo.name}
            description={todo.description}
            onFinished={() => removeData(todo.name)}
          />
        );
      })}
    </div>
  );
}
