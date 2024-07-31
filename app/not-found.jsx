"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/dashboard");
  };
  return (
    <main className="py-10 h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold text-slate-950 md:text-6xl">
        404 Not Found
      </h1>

      <button
        className="border mt-5 py-3 px-4 rounded-md text-base font-medium"
        onClick={handleRedirect}
      >
        Go back home
      </button>
    </main>
  );
};

export default NotFound;
