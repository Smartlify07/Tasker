import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="py-5  px-5 flex items-center justify-center gradient">
      <h1 className={`text-3xl font-bold ${poppins.className} text-slate-950 `}>
        Tasker
      </h1>
    </nav>
  );
};

export default Navbar;
