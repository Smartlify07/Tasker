import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <form className="md:w-2/3 align-middle">
      <div className="relative align-middle">
        <input
          className="bg-gray-200 px-5 py-2 w-full rounded-full placeholder:text-sm placeholder:font-normal placeholder:text-[#777] focus:outline-gray-700"
          type="search"
          name="search-todos"
          id="search-todos"
          placeholder="Search"
        />
        <CiSearch className="size-5 absolute top-2.5  right-3" />
      </div>
    </form>
  );
};

export default Search;
