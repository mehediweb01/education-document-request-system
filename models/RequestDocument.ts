import mongoose, { Schema } from "mongoose";

const RequestDocumentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    studentNumber: {
      type: Number,
      required: true,
    },
    reg: {
      type: Number,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    documentType: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const RequestDocument =
  mongoose.models.RequestDocument ??
  mongoose.model("RequestDocument", RequestDocumentSchema);
