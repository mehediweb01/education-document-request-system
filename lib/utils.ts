import { RequestProps } from "@/interface/interface";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const groupByPerson = (requests: RequestProps[]) => {
  const map: Record<string, RequestProps[]> = {};
  requests.forEach((req) => {
    const key = `${req.name}-${req.reg}-${req.studentNumber}`;
    if (!map[key]) map[key] = [];
    map[key].push(req);
  });
  return map;
};
