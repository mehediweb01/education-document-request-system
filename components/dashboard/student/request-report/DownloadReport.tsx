"use client";

import { Button } from "@/components/ui/button";
import { RequestProps } from "@/interface/interface";

const DownloadReport = ({
  id,
  name,
  studentNumber,
  year,
  session,
  course,
  email,
  documentType,
  department,
  reg,
}: RequestProps) => {
  const reportDownload = () => {
    // generate pdf
    // download pdf
    alert("pdf downloaded");
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={reportDownload}
      className="cursor-pointer bg-green text-white px-4 py-5 text-base md:text-xl"
    >
      Download
    </Button>
  );
};

export default DownloadReport;
