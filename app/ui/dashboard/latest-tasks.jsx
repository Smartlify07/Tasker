"use client";
import { selectAllLocalTodos } from "@/app/lib/features/todos/todosSlice";
import { useTodos, useAppSelector } from "@/app/lib/hook";
import { getLatestTasks } from "@/app/utils/getLatestTasks";
import { Poppins } from "next/font/google";
import Card from "../todos/cards";
import { CreateTodo } from "../todos/buttons";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const LatestTasks = () => {
  const { todos: serverTodos } = useTodos(); // get todosfrom the api
  const localTodos = useAppSelector(selectAllLocalTodos); // get todos from localstorage
  const allTodos = localTodos.concat(serverTodos); // combine all todos
  const latestTasks = getLatestTasks(allTodos); // get the latest todos
  return (
    <section
      className={`bg-white rounded-lg w-full py-7 px-7 ${poppins.className}`}
    >
      <div className="flex items-center mb-5 w-full justify-between">
        <h1 className="text-2xl font-semibold ">Latest Tasks</h1>
        <CreateTodo />
      </div>

      <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
        {latestTasks.map((todo) => (
          <Card {...todo} key={todo.uuid} />
        ))}
      </div>
    </section>
  );
};

export default LatestTasks;
