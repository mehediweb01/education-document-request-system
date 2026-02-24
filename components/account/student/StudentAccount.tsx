import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import { UserProps } from "@/interface/interface";
import { dateConvert } from "@/lib/DateConvert";
import Image from "next/image";
import EditProfile from "./EditProfile";
import ProfileInformationCard from "./ProfileInformationCard";

const StudentAccount = ({ user }: { user: UserProps | null }) => {
  const createdDate = dateConvert(user?.createdAt as string);
  const updatedDate = dateConvert(user?.updatedAt as string);

  return (
    <>
      <h4 className="font-inter text-base sm:text-xl lg:text-2xl font-semibold">
        <span className="text-green">demo university</span> Document Request
        System
      </h4>

      <div className="w-full mx-auto flex sm:flex-row flex-col-reverse justify-between items-start gap-2 mt-4 md:mt-8 lg:mt-12 ">
        <div className="w-full sm:w-[50%] mx-auto shadow-sm shadow-black/40 border border-blue-500 rounded-md p-4 bg-linear-to-br from-blue-500/20 to-sky-400/20">
          <h1 className=" capitalize font-bold font-montserrat text-xl md:text-2xl lg:text-3xl text-eerie-black border-b-3 border-eerie-black pb-1 ">
            Account
          </h1>
          {/* profile header */}
          <div className="mt-4 flex justify-center items-center gap-4">
            <div className="shadow-md rounded-full p-2 flex justify-center items-center border border-sky-400">
              <Image
                src="/images/avatar.png"
                alt={user?.name as string}
                height={100}
                width={100}
              />
            </div>
            <div>
              <h1 className="font-semibold text-eerie-black font-inter capitalize text-xl text-center">
                {user?.name}
              </h1>

              <EditProfile user={user} />
            </div>
          </div>
          {/* profile information */}
          <div className="md:mt-8 lg:mt-12 w-full space-y-2">
            <ProfileInformationCard
              label="Full Name"
              value={user?.name as string}
            />

            <ProfileInformationCard
              label="Email"
              value={user?.email as string}
            />

            <ProfileInformationCard
              label="Contact Number"
              value={`+${user?.contactNumber}` as string}
            />

            <ProfileInformationCard
              label="Registration Number"
              value={user?.reg as number}
            />

            <ProfileInformationCard
              label="Session"
              value={user?.session as string}
            />

            <ProfileInformationCard
              label="Department"
              value={user?.department as string}
            />

            <ProfileInformationCard
              label="Gender"
              value={user?.gender as string}
            />

            <ProfileInformationCard label="Role" value={user?.role as string} />

            {user?.address && (
              <ProfileInformationCard
                label="Address"
                value={user?.address as string}
              />
            )}

            <ProfileInformationCard
              label="Account created"
              value={createdDate}
            />

            <ProfileInformationCard
              label="Account updated"
              value={updatedDate}
              className="border-b-0"
            />
          </div>
        </div>

        <RequestCreationProcess />
      </div>
    </>
  );
};

export default StudentAccount;
