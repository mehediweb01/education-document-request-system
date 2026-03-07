import { replaceMongoIdInArray } from "@/lib/convertData";
import { Announcement } from "@/models/announcement";

export const getAnnouncementsByUser = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("user not found");
    }

    const announcements = await Announcement.find({ userId }).lean();

    if (!announcements) {
      throw new Error("Announcement not found!");
    }

    return replaceMongoIdInArray(announcements);
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Something went wrong!");
    }
  }
};
