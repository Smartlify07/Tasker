import { ArrowPathIcon, CheckIcon } from "@heroicons/react/24/outline";

export const Status = ({ completed }) => {
  if (!completed) {
    return <PendingStatus />;
  } else if (completed === true) {
    return <CompletedStatus />;
  }
};

const PendingStatus = () => {
  return (
    <span className=" flex  text-sm items-center py-2  gap-1 text-yellow-500 transition-all rounded-sm cursor-pointer hover:px-2 hover:bg-yellow-500 hover:text-white">
      In progress <ArrowPathIcon className="size-4" />
    </span>
  );
};

const CompletedStatus = () => {
  return (
    <span className=" cursor-pointer flex items-center  py-2 gap-1 text-sm  text-green-500 transition-all rounded-sm hover:px-2 hover:bg-green-500 hover:text-white">
      Complete <CheckIcon className="size-4" />
    </span>
  );
};
