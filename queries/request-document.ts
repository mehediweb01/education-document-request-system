import { replaceMongoIdInObject } from "@/lib/convertData";
import { RequestDocument } from "@/models/RequestDocument";
import mongoose from "mongoose";

export const GetARequestDocument = async (requestId: string) => {
  try {
    if (!requestId) {
      return null;
    }

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
      return null;
    }

    const requestData = await RequestDocument.findById(requestId).lean();

    if (!requestData) {
      return null;
    }

    return replaceMongoIdInObject(requestData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Something went wrong!");
    }
  }
};
