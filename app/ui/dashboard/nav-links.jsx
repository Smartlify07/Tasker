"use client";
import { LuPieChart, LuListTodo } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-row flex-wrap py-3 md:py-0 gap-5 md:mt-5  md:flex-col md:gap-7">
      <Link
        className={clsx(
          "text-sm flex gap-3 items-center font-normal text-[#111] text-opacity-70 px-3",
          {
            "bg-slate-900 py-3 px-3 text-white text-opacity-100 rounded-full":
              pathname === "/dashboard",
          }
        )}
        href={"/dashboard"}
      >
        <MdOutlineSpaceDashboard className="size-4" />
        Dashboard
      </Link>
      <Link
        className={clsx(
          "text-sm flex gap-3 items-center font-normal text-[#111] text-opacity-70 px-3",
          {
            "bg-slate-900 py-3 px-3 text-white text-opacity-100 rounded-full":
              pathname === "/dashboard/projects",
          }
        )}
        href={"/dashboard/projects"}
      >
        <LuPieChart className="size-4" />
        Projects
      </Link>
      <Link
        className={clsx(
          "text-sm flex gap-3 items-center font-normal text-[#111] text-opacity-70 px-3",
          {
            "bg-slate-900 py-3 px-3 text-white text-opacity-100 rounded-full":
              pathname === "/dashboard/todos",
          }
        )}
        href={"/dashboard/todos"}
      >
        <LuListTodo className="size-4" />
        Todos
      </Link>
      <Link
        className={clsx(
          "text-sm flex gap-3 items-center font-normal text-[#111] text-opacity-70 px-3",
          {
            "bg-slate-900 py-3 px-3 text-white text-opacity-100 rounded-full":
              pathname === "/dashboard/services",
          }
        )}
        href={"/dashboard/services"}
      >
        <GrServices className="size-4" />
        Services
      </Link>
    </ul>
  );
};

export default NavLinks;
