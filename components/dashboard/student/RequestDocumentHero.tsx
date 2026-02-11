import { ArrowRight } from "lucide-react";
import Link from "next/link";

const RequestDocumentHero = ({ userId }: { userId: string }) => {
  return (
    <div className="mt-4 md:mt-8">
      <h1 className="font-bold font-montserrat text-eerie-black tracking-[1px] text-base sm:text-xl md:text-2xl uppercase">
        Request academic documents
      </h1>
      <p className="italic text-sm sm:text-base md:text-xl font-roboto text-gray-500">
        Request the academic records from the university{" "}
        <span className="font-bold text-eerie-black">online</span>
      </p>
      {/* request now  */}
      <Link
        href={`/dashboard/student/request-document/${userId}`}
        className="text-white bg-linear-to-r from-blue-500/80 to-sky-400/60 px-4 py-1 rounded-md mt-4 btn-animate capitalize text-sm sm:text-base md:text-xl font-semibold font-inter hover:text-eerie-black hover:font-bold hover:transition-all hover:duration-300 hover:ease-in-out hover:from-sky-400 hover:to-white hover:border hover:border-sky-400 flex items-center gap-1 w-fit shadow-sm shadow-black"
      >
        request document <ArrowRight />
      </Link>
    </div>
  );
};

export default RequestDocumentHero;
