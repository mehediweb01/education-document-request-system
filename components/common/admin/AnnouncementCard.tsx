import { AnnouncementProps } from "@/types/type";
import AnnouncementAction from "./AnnouncementAction";

const AnnouncementCard = ({
  announcement,
}: {
  announcement: AnnouncementProps;
}) => {
  return (
    <div className="h-fit w-full px-4 py-3 rounded-md bg-white shadow-md shadow-black/40">
      {/* header */}
      <div className="bg-yellow-400 px-4 py-3 rounded-md">
        <h1 className="font-montserrat font-semibold text-base md:text-xl text-eerie-black tracking-widest">
          Announcement Board
        </h1>
      </div>
      {/* body */}
      <div className="my-4">
        <p className="font-inter font-medium text-sm md:text-base line-clamp-5">
          {announcement.text}
        </p>
      </div>
      {/* footer acton */}
      <div>
        <AnnouncementAction isPending={announcement.status} />
      </div>
    </div>
  );
};

export default AnnouncementCard;
