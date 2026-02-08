import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ Connected to database successfully");
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorSplit = error.message.split(":")[1];
      console.log("❌ Mongodb connection error:", errorSplit.trim());
    } else {
      console.log("❌ Failed to connect to database");
    }
  }
};
