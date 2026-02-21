import { guideLine } from "@/db/db";
import { cn } from "@/lib/utils";
import GuideLineCard from "./GuideLineCard";

const RequestCreationProcess = ({
  className,
}: Readonly<{ className?: string }>) => {
  return (
    <div
      className={cn(
        `w-full sm:w-[40%] lg:w-[25%] bg-green h-full sm:min-h-screen p-8 space-y-4 rounded-lg sm:mt-0 mt-8`,
        className,
      )}
    >
      <div className="shadow-md shadow-black bg-white rounded-md pe-2 pb-2 mb-8">
        <div className="shadow-md shadow-black bg-white rounded-md pe-2 pb-2">
          <div className="shadow-md shadow-black bg-white px-2 py-1 rounded-md">
            <p className="text-sm sm:text-base font-semibold capitalize text-green font-montserrat">
              <span className="text-2xl text-green font-bold font-montserrat">
                3
              </span>{" "}
              essay step to create a request{" "}
            </p>
          </div>
        </div>
      </div>
      {guideLine.map((item) => (
        <div key={item.id}>
          <GuideLineCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default RequestCreationProcess;
