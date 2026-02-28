export interface UserProps {
  id?: string;
  name?: string;
  email?: string;
  gender?: string;
  role?: string;
  address?: string;
  reg?: number;
  department?: string;
  contactNumber?: number;
  session?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RequestProps {
  id?: string;
  name: string;
  studentNumber: string;
  year: string;
  session: string;
  course: string;
  email: string;
  documentType: string[];
  department: string;
  reg: number;
  createdAt?: string | Date;
}
