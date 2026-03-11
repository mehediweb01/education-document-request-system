"use client";

import axios from "axios";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

const UploadPdfForm = ({
  email,
  id,
  onClose,
}: {
  email: string;
  id: string;
  onClose: () => void;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...fileArray]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      files.forEach((file) => {
        formData.append("files", file);
        formData.append("email", email);
        formData.append("requestDocId", id);
      });
      // admin upload a document
      const response = await axios.post(`/api/admin/upload-pdf`, formData);

      if (response.status === 201) {
        toast.success("Documents uploaded successfully");
        setFiles([]);
        router.refresh();
        onClose();
      }
    } catch (err: unknown) {
      if (err instanceof axios.AxiosError) {
        toast.error(err.response?.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <input
        type="file"
        accept="application/pdf"
        hidden
        id="fileUpload"
        name="files"
        multiple
        onChange={handleFileChange}
      />

      <label
        htmlFor="fileUpload"
        className="p-4 border border-slate-200 rounded cursor-pointer flex flex-col justify-center items-center gap-4 shadow-sm shadow-gray-200 hover:bg-gray-100 transition-all duration-200 ease-in-out"
      >
        <Upload className="w-8 h-8 mr-2 text-sky-500" />
        <span className="font-inter text-base bg-sky-400 px-2 py-1 rounded-md text-white">
          Upload PDF
        </span>
      </label>

      {/* selected */}
      <p className="mt-2 text-base font-semibold text-blue-500 my-3">
        Selected:
      </p>
      {files.length > 0 ? (
        <div className="space-y-1 scroll-auto max-h-52 overflow-y-auto">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-3 border-b border-b-gray-300 py-2 last:border-b-0"
            >
              <FaFilePdf className="w-6 h-6 text-sky-400" />
              <span className="text-base text-black/70 font-mono">
                {file.name}
              </span>
              <Button
                className="font-mono text-2xl text-red-500 cursor-pointer"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  setFiles((prevFiles) =>
                    prevFiles.filter((_, i) => i !== index),
                  );
                }}
              >
                X
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-base text-black/70 font-mono">
          No files selected yet!
        </p>
      )}

      <div className="mt-4">
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="outline"
          className="cursor-pointer"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default UploadPdfForm;
