import { getDate } from "@/app/utils/getDate";
import Search from "./search";

const NavTop = () => {
  return (
    <div className="bg-[#fdfdfd] hidden items-center justify-between gap-5 rounded-lg py-4 px-7 w-full md:flex">
      <div className="hidden items-center justify-between md:flex md:w-full">
        <Search />
        <p className="text-gray-500 font-normal text-sm">{getDate()}</p>
      </div>
    </div>
  );
};

export default NavTop;
