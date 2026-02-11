import InfoCard from "@/components/dashboard/InfoCard";
import RequestDocumentHero from "@/components/dashboard/student/RequestDocumentHero";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const StudentPage = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    role: string;
    user_id: string;
  };

  return (
    <div className="w-full mx-auto flex sm:flex-row flex-col justify-between items-center gap-2">
      <div className="w-full sm:w-[75%]">
        <h4 className="font-inter text-sm sm:text-base md:text-xl">
          demo university Document Request System
        </h4>
        <RequestDocumentHero userId={decoded.user_id} />

        {/* information */}
        <div className="mt-4 md:mt-8 w-full md:w-1/2">
          <InfoCard title="Announcement">
            <p>
              Please be advised that the Office of the University Registrar will
              be conducting the Year-End Strategic Planning on M-Date-Date-Year.
              Hence, the in-person transaction of our clients on the said dates
              can be accommodated from 7:00 a.m. to 11:30 a.m.
            </p>
            <p className="mt-2">
              Furthermore, there will be limited and no in-person transaction on
              dates listed below to allow for the preparation of the office year
              end reports.
            </p>
          </InfoCard>
        </div>
      </div>
      {/* request creation process */}
      <div className="w-full sm:w-[25%] bg-green h-full sm:min-h-screen mt-4 sm:-mt-4">
        {/* request creation process component */}
        <h1 className="text-white pt-4">request creation process</h1>
      </div>
    </div>
  );
};

export default StudentPage;
