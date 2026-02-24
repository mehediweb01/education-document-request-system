export interface UserProps {
  id?: string;
  name?: string;
  email?: string;
  gender?: string;
  role?: string;
  address?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface RequestProps {
  firstName: string;
  lastName: string;
  studentNumber: string;
  year: string;
  session: string;
  course: string;
  email: string;
  documentType: string[];
}
