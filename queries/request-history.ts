import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
import { RequestDocument } from "@/models/RequestDocument";
import { User } from "@/models/user";

export const getAUserAndAllOfHisRequestHistory = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("user not found");
    }

    const user = await User.findById(userId).select("-password").lean();
    const request = await RequestDocument.find({
      requestId: user?.requests.requestId,
    }).lean();

    if (!user) {
      throw new Error("User not found!");
    }

    if (!request) {
      throw new Error("Request history not found!");
    }

    return {
      user: replaceMongoIdInObject(user),
      request: replaceMongoIdInArray(request),
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Failed to fetch user data and request history");
    }
  }
};
