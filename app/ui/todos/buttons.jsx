import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const CreateTodo = () => {
  return (
    <Link
      href={"/dashboard/todos/create"}
      className="bg-slate-950 px-3 flex items-center gap-3 py-2  text-white font-medium md:self-end"
    >
      Create Todo <PlusIcon className="size-6" />
    </Link>
  );
};
