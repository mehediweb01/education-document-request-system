import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB Connected");
    return conn;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("Database connection error");
  }
};
