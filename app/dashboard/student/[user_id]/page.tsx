import InfoCard from "@/components/dashboard/InfoCard";
import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import RequestDocumentHero from "@/components/dashboard/student/RequestDocumentHero";
import { getAllAnnouncements } from "@/queries/announcement";

export const metadata = {
  title: "Student dashboard",
  description: "This is the student dashboard page",
};

const StudentPage = async ({
  params,
}: {
  params: Promise<{ user_id: string }>;
}) => {
  const { user_id } = await params;
  const announcements = await getAllAnnouncements();

  return (
    <>
      <h4 className="font-inter text-base sm:text-xl lg:text-2xl font-semibold">
        <span className="text-green">demo university</span> Document Request
        System
      </h4>

      <div className="w-full mx-auto flex sm:flex-row flex-col-reverse justify-between items-center gap-2 mt-4 md:mt-8">
        <div className="w-full sm:w-[60%] lg:w-[75%] mt-0 md:-mt-12">
          <RequestDocumentHero userId={user_id as string} />

          {/* Announcements */}
          <div className="mt-4 md:mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {announcements.map((announcement) => (
                <InfoCard key={announcement.id} title="Announcement">
                  {announcement.text}
                </InfoCard>
              ))}
            </div>
          </div>
        </div>

        <RequestCreationProcess />
      </div>
    </>
  );
};

export default StudentPage;
