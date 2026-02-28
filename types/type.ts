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
  reg: number;
  department: string;
  gender?: string;
  role?: string;
  session?: string;
  contactNumber?: number;
};

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type MongoObject = {
  _id: ObjectId | string;
  [key: string]: unknown;
};

export type InputFieldType = {
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  className?: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};
