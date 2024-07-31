import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/nav-bar";
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const poppinsLight = Roboto({
  subsets: ["latin"],
  weight: "400",
});
export default function Home() {
  return (
    <>
      <main className="gradient min-h-screen flex flex-col justify-center overflow-y-auto ">
        <section
          className={`   self-center gap-5 py-20 md:w-10/12 md:py-20 ${poppinsLight.className}`}
        >
          <h1 className="text-4xl md:text-5xl w-full text-center self-center mb-4">
            {" "}
            Get Tasking with{" "}
            <span className={`text-slate-950 ${poppins.className}`}>
              Tasker
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-5 justify-center">
            <Link
              href={"/dashboard"}
              className="border rounded-md px-8 py-2 md:text-lg"
            >
              Go straight to your Dashboard
            </Link>

            <Link
              href={"/dashboard/todos"}
              className="bg-slate-950  rounded-md text-white py-2 px-5 font-medium md:text-lg "
            >
              Your Todos
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
