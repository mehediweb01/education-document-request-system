"use client";

import { Button } from "@/components/ui/button";
import { UserProps } from "@/interface/interface";

const RequestDocumentForm = ({ user }: { user: UserProps }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle the form submission logic here
    alert(`Form submitted for user ID: ${user.id}`);
  };

  console.log(user);

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
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input
            name="first-name"
            type="text"
            id="first-name"
            placeholder="John"
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input
            name="last-name"
            type="text"
            id="last-name"
            placeholder="Doe"
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="student-number">Student Number:</label>
          <input
            type="text"
            name="student-number"
            id="student-number"
            className="input"
            placeholder="+880 xxxxxxxxxx"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            disabled
            className="input disabled:text-gray-400 disabled:cursor-not-allowed"
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="year">Year: </label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="2000"
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="session">Session: </label>
          <input
            type="text"
            id="session"
            name="session"
            className="input"
            placeholder="2024-2025"
            required
          />
        </div>
        <div>
          <label htmlFor="course">Course: </label>
          <input
            type="text"
            id="course"
            name="course"
            className="input"
            placeholder="Computer Science"
            required
          />
        </div>
      </div>

      {/* input filed : document information */}
      <div className="mt-4">
        <h3 className="font-bold text-2xl text-green text-start mb-4">
          Document Information
        </h3>
        <div>
          <input
            type="checkbox"
            name="document"
            className="mr-2"
            value="Semester Result Sheet"
            id="semester-result"
          />
          <label htmlFor="semester-result">Semester Result Sheet </label>
        </div>
        <div>
          <input
            type="checkbox"
            name="document"
            className="mr-2"
            value="Testimonials"
            id="Testimonials"
          />
          <label htmlFor="Testimonials">Testimonials</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="document"
            className="mr-2"
            value="CGPA Certificate"
            id="cgpa-certificate"
          />
          <label htmlFor="cgpa-certificate">CGPA Certificate</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="document"
            className="mr-2"
            value="Course Completion Certificate"
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
