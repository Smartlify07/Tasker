import LatestTasks from "@/app/ui/dashboard/latest-tasks";
import NavTop from "@/app/ui/dashboard/top-nav";
import { Suspense } from "react";
import Loading from "./loading";
const Page = () => {
  return (
    <main className="flex flex-col gap-5 px-3 md:w-11/12">
      <NavTop />
      <Suspense fallback={<Loading />}>
        <LatestTasks />
      </Suspense>
    </main>
  );
};

export default Page;
