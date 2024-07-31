"use client";

import {
  loadLocalTodos,
  selectAllLocalTodos,
} from "@/app/lib/features/todos/todosSlice";
import { useAppDispatch, useTodos } from "@/app/lib/hook";
import dynamic from "next/dynamic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PaginateNOSSR = dynamic(() => import("@/app/ui/dashboard/paginate"), {
  ssr: false,
});

const CardNOSSR = dynamic(() => import("@/app/ui/todos/cards"), {
  ssr: false,
});

const Page = () => {
  const { todos: serverTodos } = useTodos();
  const localTodos = useSelector(selectAllLocalTodos);
  const [allTodos, setAllTodos] = useState([]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    dispatch(loadLocalTodos());
  }, [dispatch]);

  useEffect(() => {
    setAllTodos(localTodos.concat(serverTodos));
  }, [localTodos, serverTodos]);

  useEffect(() => {
    params.set("page", page ? page : "1");
    router.push(`${pathname}?${params.toString()}`);
  }, [router]);

  const slicedTodos = allTodos.slice(
    Number(page) === 1 ? 0 : Number(page),
    Number(page) === 1 ? 0 + 6 : Number(page) + 6
  );
  return (
    <main className="flex py-5  flex-col gap-4 px-6">
      <h1 className="text-xl font-semibold text-black">Todos {}</h1>
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2  lg:gap-4 lg:grid-cols-3 lg:grid-rows-2">
        <Suspense fallback={<div>Loading todos...</div>}>
          {slicedTodos.map((todo) => (
            <CardNOSSR key={todo.uuid} {...todo} showDelete />
          ))}
        </Suspense>
      </div>

      <Suspense fallback={<div>Pagination</div>}>
        <PaginateNOSSR length={allTodos.length} />
      </Suspense>
    </main>
  );
};

export default Page;
