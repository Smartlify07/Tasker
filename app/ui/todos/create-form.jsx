"use client";
import { CompletedRadio, InProgressRadio, PendingRadio } from "./radios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addLocalTodo } from "@/app/lib/features/todos/todosSlice";

const CreateForm = () => {
  const [formData, setFormData] = useState({ title: "", status: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      addLocalTodo({
        title: formData.title,
        completed: formData.status.toLowerCase() === "completed" ? true : false,
      })
    );
    router.push("/dashboard/todos");
  };

  return (
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
          Add Todo
        </button>
      </form>
    </>
  );
};

export default CreateForm;
