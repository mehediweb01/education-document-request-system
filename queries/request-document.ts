import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/lib/convertData";
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

export const getAllRequest = async (page: number = 1, limit: number = 10) => {
  try {
    const skip = (page - 1) * limit;

    const requests = await RequestDocument.find()
      .skip(skip)
      .limit(limit)
      .lean();

    const totalRequests = await RequestDocument.countDocuments();

    if (!requests) {
      throw new Error("Request not found!");
    }

    if (!totalRequests) {
      throw new Error("Total request not found!");
    }

    return {
      requests: replaceMongoIdInArray(requests),
      total: totalRequests,
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Something went wrong!");
    }
  }
};
