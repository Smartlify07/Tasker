import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../ui/button";
import SideNav from "../ui/dashboard/side-nav";

const DashboardLayout = ({ children }) => {
  return (
    <main className=" py-10 px-5 md:px-10 bg-gradient-to-tr from-[#f1f1f1] to-[#f4f4f4] min-h-screen flex flex-col gap-6 md:flex-row">
      <SideNav />
      {children}
    </main>
  );
};

export default DashboardLayout;
