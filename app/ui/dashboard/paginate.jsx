"use client";
import { generatePagination } from "@/app/utils/generatePagination";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Paginate = ({ length }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const pathname = usePathname();
  const router = useRouter();
  const paginations = generatePagination(length, page);

  const setPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 mt-5 justify-center w-full">
      {paginations.map((item, index) =>
        item === "..." ? (
          <span key={item} className="border rounded-md px-3 py-2 text-sm">
            ...
          </span>
        ) : (
          <button
            onClick={() => {
              setPage(String(item));
            }}
            className={clsx(`border rounded-md size-9 text-sm `, {
              "bg-black text-white": page === String(item),
            })}
            key={item}
          >
            {item}
          </button>
        )
      )}
    </div>
  );
};

export default Paginate;
