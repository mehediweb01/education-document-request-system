import CreateAnnouncement from "@/components/common/admin/CreateAnnouncement";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminDashboardHero = () => {
  return (
    <div className="space-y-3">
      <div>
        <h1 className="font-bold font-montserrat text-xl md:text-2xl text-eerie-black uppercase">
          Process document with each
        </h1>
        <p className="font-medium font-inter text-sm sm:text-base md:text-xl text-gray-600">
          View Document Requests submitted by the students.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <Link href={`/documents-request`}>
          <Button
            variant={"outline"}
            className="font-inter font-semibold text-base md:text-xl cursor-pointer hover:text-white hover:bg-gray-800 transition-all duration-300 ease-in-out py-4 px-3 border-sky-400 border-2"
          >
            View Document Requests
          </Button>
        </Link>
        <CreateAnnouncement />
      </div>
    </div>
  );
};

export default AdminDashboardHero;
