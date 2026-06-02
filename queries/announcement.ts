import { AnnouncementStatus } from "@/enum/enum";
import { replaceMongoIdInArray } from "@/lib/convertData";
import { Announcement } from "@/models/announcement";
import { connectDB } from "@/mongodb/connectDB";

export const getAllAnnouncements = async () => {
  try {
    await connectDB();

    const announcements = await Announcement.find({
      status: AnnouncementStatus.Published,
    }).lean();

    if (announcements.length === 0) {
      throw new Error("Announcements not found!");
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

export const getAnnouncementsByUser = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("user not found");
    }

    await connectDB();

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
