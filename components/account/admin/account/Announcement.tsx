import AnnouncementCard from "@/components/common/admin/AnnouncementCard";
import CreateAnnouncement from "@/components/common/admin/CreateAnnouncement";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { getAnnouncementsByUser } from "@/queries/announcement";
import { AnnouncementProps } from "@/types/type";

const Announcement = async () => {
  const authUser = await getUserFromToken();
  const announcements = await getAnnouncementsByUser(
    authUser?.user_id as string,
  );

  return (
    <div className="bg-green w-full h-fit px-4 py-6 rounded-md">
      <div className="mb-4 flex justify-center items-center gap-4">
        <CreateAnnouncement />
      </div>
      <div className="space-y-2">
        {announcements.map((item) => (
          <AnnouncementCard
            key={item.id}
            announcement={item as AnnouncementProps}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcement;
