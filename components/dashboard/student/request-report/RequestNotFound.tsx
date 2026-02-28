import { Button } from "@/components/ui/button";
import Link from "next/link";

const RequestNotFound = () => {
  return (
    <>
      <div className="min-h-[78vh] flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold font-montserrat text-2xl md:text-3xl capitalize text-red-400">
          Request Report not found!
        </h1>
        <p className="text-red-400 space-y-2 font-bold font-mono text-3xl md:text-4xl">
          404
        </p>
        <Link href={`/request-history`}>
          <Button
            type="button"
            variant="outline"
            className="cursor-pointer hover:bg-slate-500 hover:text-white transition-all duration-300 ease-in-out font-semibold font-inter text-base md:text-xl"
          >
            Go Back Request History
          </Button>
        </Link>
      </div>
    </>
  );
};

export default RequestNotFound;
