import InputField from "@/components/common/InputField";
import { RequestProps } from "@/interface/interface";
import { dateConvert } from "@/lib/DateConvert";

const RequestReport = ({ report }: { report: RequestProps }) => {
  const {
    name,
    email,
    studentNumber,
    year,
    session,
    reg,
    course,
    department,
    createdAt,
    documentType,
  } = report;

  return (
    <div className="shadow-sm border border-sky-400 rounded-md">
      <div>
        <h1 className="py-4 bg-green text-white font-semibold font-inter uppercase text-center text-xl md:text-2xl rounded-md">
          document request summary
        </h1>
      </div>
      <div className="px-4 py-6">
        <div>
          {/* student information */}
          <div className="flex justify-between items-start gap-2">
            <h1 className="font-semibold font-inter text-xl md:text-2xl text-eerie-black">
              student information
            </h1>
            <div>
              <p className="font-semibold text-xl font-inter text-eerie-black">
                Date:{" "}
                <span className="text-base font-medium">
                  {dateConvert(createdAt as Date)}
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 md:my-8">
            <InputField
              type="text"
              label="Name"
              value={name}
              name="name"
              disabled
            />
            <InputField
              type="text"
              label="Email"
              value={email}
              name="email"
              disabled
            />
            <InputField
              type="number"
              label="Student Number"
              value={studentNumber}
              name="student-number"
              disabled
            />
            <InputField
              type="text"
              label="Session"
              value={session}
              name="session"
              disabled
            />
            <InputField
              type="number"
              label="year"
              value={year}
              name="year"
              disabled
            />
            <InputField
              type="number"
              label="reg"
              value={reg}
              name="reg"
              disabled
            />
            <InputField
              type="text"
              label="Department"
              value={department}
              name="dept"
              disabled
            />
            <InputField
              type="text"
              label="Course"
              value={course}
              name="course"
              disabled
            />
          </div>
          <div>
            <h1 className="font-semibold text-xl md:text-2xl text-eerie-black font-inter">
              Required Documents
            </h1>
            <div className="mt-2">
              {documentType.map((doc, index) => (
                <div key={index} className="mx-4 space-y-4">
                  <p className="font-medium font-montserrat text-eerie-black ">
                    <span className="font-mono font-semibold text-xl">
                      {index}
                    </span>
                    :{" "}
                    <span className="underline underline-offset-4 underline-sky-400">
                      {" "}
                      {doc}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestReport;
