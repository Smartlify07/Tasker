"use client";
import {
  selectAllLocalTodos,
  selectAllTodos,
} from "@/app/lib/features/todos/todosSlice";
import { useAppSelector, useTodos } from "@/app/lib/hook";
import { Status } from "@/app/ui/todos/statuses";
import { useRouter } from "next/navigation";

const Page = ({ params }) => {
  const { todos } = useTodos();
  const localTodos = useAppSelector(selectAllLocalTodos);
  const allTodos = todos.concat(localTodos);
  console.log(allTodos);

  const todo = allTodos.find((todo) => todo.uuid === params.id);
  console.log(todo);
  // console.log(typeof params.uuid, typeof todo.uuid);

  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center w-11/12  ">
      <div className="bg-gray-100 rounded-sm py-20 w-10/12 md:w-1/2 flex flex-col items-center px-6 border-black shadow-lg bg-gradient-to-r from-gray-100 to-gray-50">
        {todo ? (
          <>
            <h1 className="font-semibold capitalize text-xl text-black">
              {todo.title}
            </h1>

            <div className="mt-2">{<Status completed={todo.completed} />}</div>

            <button
              onClick={() => {
                router.push(`/dashboard/todos/${params.id}/edit`);
              }}
              className="mt-6 bg-black w-9/12 rounded-sm px-6 py-2 text-white font-medium"
            >
              Edit
            </button>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </main>
  );
};

export default Page;
