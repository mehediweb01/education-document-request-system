import { ObjectId } from "mongoose";

export type NavItem = {
  id: number;
  href: string;
  name: string;
};

export type PropsSearchParams = {
  searchParams: {
    role: string;
  };
};

export type InputState = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  role?: string;
};

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type MongoObject = {
  _id: ObjectId | string;
  [key: string]: unknown;
};
