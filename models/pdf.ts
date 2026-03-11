import mongoose, { Schema } from "mongoose";

const PdfSchema = new Schema(
  {
    names: [
      {
        type: String,
        required: true,
      },
    ],
    fileUrl: [
      {
        type: String,
        required: true,
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Pdf = mongoose.models.pdf ?? mongoose.model("pdf", PdfSchema);
