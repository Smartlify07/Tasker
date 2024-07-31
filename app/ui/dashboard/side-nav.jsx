import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import NavLinks from "./nav-links";
import Search from "./search";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});
const SideNav = () => {
  return (
    <aside
      role="sidebar"
      className={`px-5 flex flex-col gap-5 rounded-lg py-3 bg-gray-200 border-2 border-gray-300 md:w-1/4 ${poppins.className}`}
    >
      <div className="flex flex-col items-center justify-between md:block">
        <h1 className="text-black font-semibold text-xl py-3 px-2 border-b-2 border-b-gray-600 border-opacity-40">
          Tasker
        </h1>

        <div className="bg-white w-full rounded-lg py-3 px-3 mt-4 md:hidden">
          <Search />
        </div>
      </div>

      <NavLinks />
    </aside>
  );
};

export default SideNav;
