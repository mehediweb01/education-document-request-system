import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "student"],
      default: "student",
    },
    address: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.models.User ?? mongoose.model("User", UserSchema);
