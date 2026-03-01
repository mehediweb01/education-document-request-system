"use client";

import { Button } from "@/components/ui/button";
import { RequestProps } from "@/interface/interface";
import axios from "axios";
import { toast } from "react-toastify";

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
  const reportDownload = async () => {
    const data = {
      name,
      email,
      studentNumber,
      session,
      reg,
      documentType,
      course,
      department,
      year,
    };

    try {
      const res = await axios.post("/api/generate-pdf", data, {
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));

      const a = document.createElement("a");
      a.href = url;
      a.download = `document-report-${id}${Math.floor(Math.random() * 10)}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
        console.error(err);
      } else {
        toast.error("Something went wrong");
        console.error(err);
      }
    }
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
