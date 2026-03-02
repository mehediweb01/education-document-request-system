import ReqHistory from "@/components/dashboard/student/request-history/ReqHistory";
import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Request History",
  description: "This page shows the request history of the student",
};

const RequestHistory = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const decoded = jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
  ) as {
    role: string;
    user_id: string;
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
              Request history
            </h1>
          </div>
          <div className="mt-6 md:mt-8 ">
            <ReqHistory userId={decoded.user_id} />
          </div>
        </div>

        <RequestCreationProcess />
      </div>
    </>
  );
};

export default RequestHistory;
