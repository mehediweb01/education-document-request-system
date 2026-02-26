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
    reg: {
      type: Number,
      required: true,
      unique: true,
    },
    department: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    session: {
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
    requests: [
      {
        requestId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "RequestDocument",
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.models.User ?? mongoose.model("User", UserSchema);
