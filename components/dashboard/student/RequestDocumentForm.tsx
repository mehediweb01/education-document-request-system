"use client";

import InputField from "@/components/common/InputField";
import { Button } from "@/components/ui/button";
import { RequestProps, UserProps } from "@/interface/interface";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const RequestDocumentForm = ({ user }: { user: UserProps | null }) => {
  const [inputValue, setInputValue] = useState<RequestProps>({
    name: user?.name || "",
    studentNumber: String(user?.contactNumber) || "880",
    year: "",
    session: user?.session || "",
    course: "",
    email: user?.email || "",
    documentType: [],
    department: user?.department || "",
    reg: user?.reg || 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (name === "documentType") {
      setInputValue((prev) => ({
        ...prev,
        documentType: checked
          ? [...prev.documentType, value]
          : prev.documentType.filter((item) => item !== value),
      }));
    } else if (name === "studentNumber") {
      setInputValue((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, ""),
      }));
    } else if (name === "session") {
      setInputValue((prev) => ({
        ...prev,
        [name]: value.replace(/[^0-9-]/g, ""),
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (inputValue.documentType.length === 0) {
        toast.warning("Please select at least one document type");
      } else {
        const newRequest = {
          ...inputValue,
          studentNumber: Number(inputValue.studentNumber),
          year: Number(inputValue.year),
        };

        console.log({ newRequest });
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
    <form
      onSubmit={handleSubmit}
      className="px-4 py-6 w-[80%] mx-auto shadow-md shadow-black/60 rounded-lg border border-sky-300"
    >
      <h2 className="font-bold text-2xl text-green text-center mb-4 md:mb-8">
        Request Document From
      </h2>

      {/*  input filed : student information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InputField
          type="text"
          name="name"
          placeholder="john Doe"
          onChange={handleChange}
          value={inputValue?.name}
          label="Full Name"
          disabled={true}
        />

        <InputField
          type="tel"
          name="studentNumber"
          placeholder="+880 xxxxxxxxxx"
          onChange={handleChange}
          value={inputValue?.studentNumber}
          label="Student Number"
          disabled={true}
        />

        <InputField
          type="email"
          name="email"
          placeholder="8hMlW@example.com"
          onChange={handleChange}
          value={inputValue?.email}
          label="Email"
          disabled={true}
        />

        <InputField
          type="number"
          name="reg"
          placeholder="1234567891"
          onChange={handleChange}
          value={inputValue?.reg}
          label="Registration Number"
          disabled={true}
        />

        <InputField
          type="text"
          name="session"
          placeholder="2024-2025"
          onChange={handleChange}
          value={inputValue?.session}
          label="Session"
          disabled={true}
        />

        <InputField
          type="text"
          name="department"
          placeholder="Management"
          onChange={handleChange}
          value={inputValue?.department}
          label="Department"
          disabled={true}
        />

        <InputField
          type="number"
          name="year"
          placeholder="2000"
          onChange={handleChange}
          value={inputValue?.year}
          label="Year"
          disabled={false}
          required={true}
        />

        <InputField
          type="text"
          name="course"
          placeholder="course name..."
          onChange={handleChange}
          value={inputValue?.course}
          label="Course"
          disabled={false}
          required={true}
        />
      </div>

      {/* input filed : document information */}
      <div className="mt-4">
        <h3 className="font-bold text-2xl text-green text-start mb-4">
          Document Information
        </h3>
        <div>
          <input
            type="checkbox"
            name="documentType"
            className="mr-2"
            value="Semester Result Sheet"
            onChange={handleChange}
            id="semester-result"
          />
          <label htmlFor="semester-result">Semester Result Sheet </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="documentType"
            className="mr-2"
            value="Testimonials"
            onChange={handleChange}
            id="Testimonials"
          />
          <label htmlFor="Testimonials">Testimonials</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="documentType"
            className="mr-2"
            value="CGPA Certificate"
            onChange={handleChange}
            id="cgpa-certificate"
          />
          <label htmlFor="cgpa-certificate">CGPA Certificate</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="documentType"
            className="mr-2"
            value="Course Completion Certificate"
            onChange={handleChange}
            id="course-completion-certificate"
          />
          <label htmlFor="course-completion-certificate">
            Course Completion Certificate
          </label>
        </div>
      </div>

      {/* submit button */}
      <div className="mt-4 flex justify-end items-center">
        <Button
          type="submit"
          variant="outline"
          size="lg"
          className="cursor-pointer bg-green text-white border-sky-400 font-inter hover:bg-green/90 hover:text-white hover:border-sky-600 text-base md:text-xl tracking-[1px] transition-colors duration-300"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default RequestDocumentForm;
