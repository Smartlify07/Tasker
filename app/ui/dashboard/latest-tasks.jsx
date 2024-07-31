"use client";
import { selectAllLocalTodos } from "@/app/lib/features/todos/todosSlice";
import { useTodos, useAppSelector } from "@/app/lib/hook";
import { getLatestTasks } from "@/app/utils/getLatestTasks";
import { Poppins } from "next/font/google";
import Card from "../todos/cards";
import { CreateTodo } from "../todos/buttons";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const LatestTasks = () => {
  const { todos: serverTodos } = useTodos(); // get todosfrom the api
  const localTodos = useAppSelector(selectAllLocalTodos); // get todos from localstorage
  const allTodos = localTodos.concat(serverTodos); // combine all todos
  const [latestTasks, setLatestTasks] = useState([]);

  useEffect(() => {
    const newLatestTasks = getLatestTasks(allTodos);
    // Update state only if latestTasks has actually changed to avoid unnecessary re-renders
    if (JSON.stringify(latestTasks) !== JSON.stringify(newLatestTasks)) {
      setLatestTasks(newLatestTasks);
    }
  }, [allTodos, latestTasks]);

  // Load local todos on initial render

  return (
    <section
      className={`bg-white rounded-lg w-full py-10 md:py-8 px-7 ${poppins.className}`}
    >
      <div className="flex flex-col items-center gap-3 mb-7 w-full justify-between md:mb-5 md:gap-0 md:flex-row">
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
