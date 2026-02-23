import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import { Button } from "@/components/ui/button";
import { UserProps } from "@/interface/interface";
import { dateConvert } from "@/lib/DateConvert";
import Image from "next/image";

const StudentAccount = ({ user }: { user: UserProps | null }) => {
  const date = dateConvert(user?.createdAt as string);

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
              <Button variant="outline" className="cursor-pointer">
                Edit profile
              </Button>
            </div>
          </div>
          {/* profile information */}
          <div className="md:mt-8 lg:mt-12 w-full space-y-2">
            <div className="flex justify-between items-center gap-3 w-full">
              <h3 className="font-semibold font-inter text-eerie-black text-base md:text-xl">
                Full Name:
              </h3>
              <input
                type="text"
                value={user?.name}
                disabled
                className="input w-1/2"
              />
            </div>
            <div className="flex justify-between items-center gap-3 w-full">
              <h3 className="font-semibold font-inter text-eerie-black text-base md:text-xl">
                Email:
              </h3>
              <input
                type="text"
                value={user?.email}
                disabled
                className="input w-1/2"
              />
            </div>
            <div className="flex justify-between items-center gap-3 w-full">
              <h3 className="font-semibold font-inter text-eerie-black text-base md:text-xl">
                Gender:
              </h3>
              <input
                type="text"
                value={user?.gender}
                disabled
                className="input w-1/2"
              />
            </div>
            <div className="flex justify-between items-center gap-3 w-full">
              <h3 className="font-semibold font-inter text-eerie-black text-base md:text-xl">
                Role:
              </h3>
              <input
                type="text"
                value={user?.role}
                disabled
                className="input w-1/2"
              />
            </div>
            <div className="flex justify-between items-center gap-3 w-full">
              <h3 className="font-semibold font-inter text-eerie-black text-base md:text-xl">
                Account created:
              </h3>
              <input
                type="text"
                value={date}
                disabled
                className="input w-1/2"
              />
            </div>
          </div>
        </div>

        <RequestCreationProcess />
      </div>
    </>
  );
};

export default StudentAccount;
