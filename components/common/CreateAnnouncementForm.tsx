"use client";

import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const CreateAnnouncementForm = ({ onClose }: { onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);

      const response = await axios.post("/api/announcement/create", {
        text,
      });

      if (response.status !== 201) {
        toast.error(response.data.message);
        setIsSubmitting(false);
      }

      if (response.status === 201) {
        toast.success("Announcement created successfully");
        setText("");
        setIsSubmitting(false);
        onClose();
      }
    } catch (err: unknown) {
      setIsSubmitting(false);
      if (err instanceof axios.AxiosError) {
        toast.error(err.response?.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <>
      <label htmlFor="body">
        Announcement: <span className="text-red-500">*</span>
      </label>
      <textarea
        name="body"
        id="body"
        cols={20}
        rows={10}
        autoFocus
        placeholder="type announcement..."
        value={text}
        onChange={handleChange}
        className="p-2 rounded-md focus:outline-none focus:shadow-inner focus:shadow-sky-400 hover:shadow-sm hover:shadow-sky-400/30 transition-all duration-300 ease-in-out border border-gray-400 focus:border-0 hover:border-sky-200"
        required
      />
      <button
        type="submit"
        className="bg-sky-400 text-white px-3 py-1 rounded-md hover:bg-sky-500 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={handleSubmit}
      >
        {isSubmitting ? "Creating..." : "Create"}
      </button>
    </>
  );
};

export default CreateAnnouncementForm;
