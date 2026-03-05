import { AnnouncementStatus } from "@/enum/enum";
import mongoose, { Schema } from "mongoose";

const AnnounceSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(AnnouncementStatus),
      default: AnnouncementStatus.Pending,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Announcement =
  mongoose.models.Announcement ??
  mongoose.model("Announcement", AnnounceSchema);
