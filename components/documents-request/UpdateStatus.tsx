"use client";

import { Status } from "@/enum/enum";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateStatus = ({
  status,
  requestId,
}: {
  status: string;
  requestId: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [updateStatus, setUpdateStatus] = useState<string>(status);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(`/api/user/update-request-status`, {
        status: updateStatus,
        requestId: requestId,
      });
      if (response.status === 200) {
        toast.success("Status updated successfully");
        setIsOpen(false);
        router.refresh();
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
    <div className="flex flex-col justify-center items-center gap-4">
      <select
        name="status"
        id="status"
        className="border border-slate-300/50 p-1 rounded-md"
        value={updateStatus}
        onChange={(e) => setUpdateStatus(e.target.value)}
        disabled={!isOpen}
      >
        {Object.values(Status).map((statusValue) => (
          <option key={statusValue} value={statusValue}>
            {statusValue}
          </option>
        ))}
      </select>

      {/* action button */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={isOpen ? handleSave : handleOpen}
          className={`px-3 py-1.5 rounded-md font-medium ${isOpen ? "bg-green-500 hover:bg-green-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"} transition-all duration-200 ease-in-out cursor-pointer`}
        >
          {isOpen ? "Save" : "Update"}
        </button>
        {isOpen && (
          <button
            onClick={() => {
              setIsOpen(false);
              setUpdateStatus(status);
            }}
            className="text-red-500 cursor-pointer"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default UpdateStatus;
