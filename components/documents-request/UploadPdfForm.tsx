"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { Button } from "../ui/button";

const UploadPdfForm = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...fileArray]);
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
        className="px-4 py-2 rounded cursor-pointer flex flex-col justify-center items-center gap-4"
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
        <p className="text-base text-black/70 font-mono">No files selected</p>
      )}

      <div className="mt-4">
        <Button variant="outline" className="cursor-pointer">
          Submit
        </Button>
      </div>
    </>
  );
};

export default UploadPdfForm;
