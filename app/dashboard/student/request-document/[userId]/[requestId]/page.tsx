import DownloadReport from "@/components/dashboard/student/request-report/DownloadReport";
import RequestNotFound from "@/components/dashboard/student/request-report/RequestNotFound";
import RequestReport from "@/components/dashboard/student/request-report/RequestReport";
import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import { Button } from "@/components/ui/button";
import { RequestProps } from "@/interface/interface";
import { GetARequestDocument } from "@/queries/request-document";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Request Document Report",
  description: "This page is used to view the report of a request document",
};

const RequestReportPage = async ({
  params,
}: {
  params: { userId: string; requestId: string };
}) => {
  const { requestId, userId } = await params;
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const decoded = jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
  ) as {
    role: string;
    user_id: string;
  };

  const requestData = await GetARequestDocument(requestId as string);

  if (!token) {
    redirect("/login");
  }

  if (decoded.user_id !== userId) {
    return <RequestNotFound />;
  }

  if (!requestData) {
    return <RequestNotFound />;
  }

  return (
    <div className="w-full mx-auto flex sm:flex-row flex-col-reverse justify-between items-start gap-2">
      <div className="w-full sm:w-[60%] lg:w-[75%] mt-8 md:mt-12 mx-0 md:mx-12">
        <RequestReport report={requestData as unknown as RequestProps} />
        <div className="my-4 flex justify-end items-center gap-4 flex-wrap">
          <Link href={`/`}>
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer bg-green text-white px-4 py-5 text-base md:text-xl"
            >
              Back to Home
            </Button>
          </Link>

          <DownloadReport {...(requestData as RequestProps)} />
        </div>
      </div>

      <RequestCreationProcess />
    </div>
  );
};

export default RequestReportPage;
