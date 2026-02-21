import { replaceMongoIdInObject } from "@/lib/convertData";
import { User } from "@/models/user";

export const getUserById = async (userId: string) => {
  try {
    const user = await User.findById(userId).select("-password");
    return replaceMongoIdInObject(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};
