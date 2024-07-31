"use client";

import {
  loadLocalTodos,
  selectAllLocalTodos,
} from "@/app/lib/features/todos/todosSlice";
import { useAppDispatch, useTodos } from "@/app/lib/hook";
import Paginate from "@/app/ui/dashboard/paginate";
import Card from "@/app/ui/todos/cards";
import { generatePagination } from "@/app/utils/generatePagination";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { todos } = useTodos();
  const localTodos = useSelector(selectAllLocalTodos);
  const allTodos = localTodos.concat(todos);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    dispatch(loadLocalTodos());
    params.set("page", page ? page : "1");
    router.push(`${pathname}?${params.toString()}`);
  }, [dispatch, router]);

  const slicedTodos = allTodos.slice(
    Number(page) === 1 ? 0 : Number(page),
    Number(page) === 1 ? 0 + 6 : Number(page) + 6
  );
  return (
    <main className="flex py-5  flex-col gap-4 px-6">
      <h1 className="text-xl font-semibold text-black">Todos {}</h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2  lg:gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {slicedTodos.map((todo) => (
          <Card key={todo.uuid} {...todo} showDelete />
        ))}
      </div>

      <Suspense fallback={<h1>Pagination...</h1>}>
        <Paginate length={allTodos.length} />
      </Suspense>
    </main>
  );
};

export default Page;
