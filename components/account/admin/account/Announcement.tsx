import AnnouncementCard from "@/components/common/admin/AnnouncementCard";
import CreateAnnouncement from "@/components/common/admin/CreateAnnouncement";

const Announcement = () => {
  return (
    <div className="bg-green w-full h-fit px-4 py-6 rounded-md">
      <div className="mb-4 flex justify-center items-center gap-4">
        <CreateAnnouncement />
      </div>
      <div>
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default Announcement;
