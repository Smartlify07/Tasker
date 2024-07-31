"use client";
import {
  editLocalTodo,
  editTodo,
  selectAllLocalTodos,
} from "@/app/lib/features/todos/todosSlice";
import { useAppDispatch, useAppSelector, useTodos } from "@/app/lib/hook";
import {
  CompletedRadio,
  InProgressRadio,
  PendingRadio,
} from "@/app/ui/todos/radios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { todos } = useTodos();
  const localTodos = useAppSelector(selectAllLocalTodos);
  const allTodos = localTodos.concat(todos);

  const todo = allTodos.find((todo) => todo.uuid === params.id);
  const [formData, setFormData] = useState({
    title: todo ? todo.title : "",
    status: todo?.status,
  });

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      title: todo ? todo.title : "",
      status: todo?.status,
    }));
  }, []);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      editLocalTodo({
        title: formData.title,
        completed: formData.status.toLowerCase() === "completed" ? true : false,
        uuid: todo.uuid,
      })
    );
    dispatch(
      editTodo({
        title: formData.title,
        completed: formData.status.toLowerCase() === "completed" ? true : false,
        uuid: todo.uuid,
      })
    );
    router.push("/dashboard/todos");
  };
  return (
    <main className="py-7 px-7 border flex items-center justify-center w-11/12">
      <>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-4 md:px-0"
        >
          <fieldset>
            <legend className="text-xl font-medium">Todo Details</legend>

            <div className="flex flex-col gap-4 mt-5">
              <div className="flex flex-col gap-1">
                <label htmlFor="Title" className="text-base font-medium">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  value={formData.title}
                  className="py-2 px-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <fieldset>
                  <legend className="mb-2 block text-sm font-medium">
                    Set the Todo status
                  </legend>

                  <div className="todo-statuses py-3 px-3">
                    <InProgressRadio onChange={(e) => handleChange(e)} />

                    <CompletedRadio onChange={(e) => handleChange(e)} />
                  </div>
                </fieldset>
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            className={
              "bg-slate-950 py-3  rounded-sm flex items-center justify-center font-medium text-white"
            }
          >
            Update Todo
          </button>
        </form>
      </>
    </main>
  );
};

export default Page;
