import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ Connected to database successfully");
  } catch (error: unknown) {
    console.error(`❌ Error connecting to database: ${error}`);
  }
};
