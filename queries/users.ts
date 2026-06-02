import { replaceMongoIdInObject } from "@/lib/convertData";
import { User } from "@/models/user";
import { connectDB } from "@/mongodb/connectDB";

export const getUserById = async (userId: string) => {
  try {
    await connectDB();

    const user = await User.findById(userId)
      .select(["-password", "-requests"])
      .lean();
    return replaceMongoIdInObject(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};
