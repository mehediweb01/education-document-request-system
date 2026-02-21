/* eslint-disable @typescript-eslint/no-unused-vars */
import { MongoObject } from "@/types/type";

export const replaceMongoIdInObject = <T extends MongoObject>(
  obj: T | null,
): (Omit<T, "_id"> & { id: string }) | null => {
  if (!obj) return null;

  const { _id, ...updatedObj } = { ...obj, id: obj._id };
  return updatedObj as Omit<T, "_id"> & { id: string };
};

export const replaceMongoIdInArray = <T extends MongoObject>(
  arr: T[] | null,
): (Omit<T, "_id"> & { id: string })[] => {
  if (!arr) return [];

  const mappedArray = arr.map((item) => {
    const { _id, ...updatedArrayItem } = { ...item, id: item._id };
    return updatedArrayItem as Omit<T, "_id"> & { id: string };
  });

  return mappedArray;
};
