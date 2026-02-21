import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import DocumentTypesCard from "@/components/documents/DocumentTypesCard";
import { documentTypes } from "@/db/db";
import jwt from "jsonwebtoken";
import { ArrowRight } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const DocumentsPage = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    user_id: string;
    role: string;
  };

  return (
    <>
      <h4 className="font-inter text-base sm:text-xl lg:text-2xl font-semibold">
        <span className="text-green">demo university</span> Document Request
        System
      </h4>

      <div className="w-full mx-auto flex sm:flex-row flex-col-reverse justify-between items-start sm:gap-2 gap-8 mt-4 md:mt-12">
        <div className="w-full sm:w-[60%] lg:w-[75%] mt-0">
          <div>
            <h1 className="uppercase font-inter font-semibold text-xl md:text-2xl border-b-4 border-gray-600/70 pb-1 text-eerie-black rounded-md w-full">
              Available documents
            </h1>
          </div>
          <div className="mt-6 md:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {documentTypes.map((item) => (
              <DocumentTypesCard key={item.id} name={item.name} />
            ))}
          </div>
          {/* request now */}
          <div className="mt-8 md:mt-12">
            <Link
              href={`/dashboard/student/request-document/${decoded.user_id}`}
              className="text-white bg-linear-to-r from-blue-500/80 to-sky-400/60 px-4 py-2 rounded-md mt-4 btn-animate capitalize text-sm sm:text-base md:text-xl font-semibold font-inter hover:text-eerie-black hover:font-bold hover:transition-all hover:duration-300 hover:ease-in-out hover:from-sky-400 hover:to-white hover:border hover:border-sky-400 flex items-center gap-1 w-fit shadow-sm shadow-black"
            >
              request document <ArrowRight />
            </Link>
          </div>
        </div>

        <RequestCreationProcess />
      </div>
    </>
  );
};

export default DocumentsPage;
