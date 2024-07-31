"use client";
import Button from "@/app/ui/button";
import { TrashIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Status } from "./statuses";
import {
  deleteLocalTodo,
  deleteTodo,
} from "@/app/lib/features/todos/todosSlice";
import { useAppDispatch } from "@/app/lib/hook";

const Card = ({ title, completed, uuid, showDelete }) => {
  const dispatch = useAppDispatch();
  const handleDelete = () => {
    dispatch(deleteLocalTodo({ uuid }));
    dispatch(
      deleteTodo({
        id: Number(uuid),
        uuid,
      })
    );
    console.log(uuid);
  };
  return (
    <div className="flex flex-col gap-2 justify-between cursor-pointer border rounded-sm py-5 px-3 h-min-[150px] text-pretty row-span-1 shadow-sm transition-all  hover:scale-[105%] ">
      <h3 className="text-base font-medium text-black capitalize rounded-sm">
        {title}
      </h3>

      <div className="flex items-center justify-between">
        {<Status completed={completed} />}

        <div className="flex items-center gap-2 self-end">
          <Link
            href={`/dashboard/todos/${uuid}`}
            className={"text-sm font-medium border rounded-md  px-2 py-2"}
          >
            <EyeIcon className="text-gray-900 size-6" />
          </Link>

          {showDelete && (
            <Button
              onClick={() => handleDelete()}
              className={
                "font-medium py-2 px-2 border rounded-md transition-all hover:border-none hover:bg-red-500 hover:bg-opacity-80"
              }
            >
              <TrashIcon className="text-red-700 size-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
