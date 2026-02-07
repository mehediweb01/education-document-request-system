import { redirect } from "next/navigation";

enum Role {
  Admin = "admin",
  Student = "student",
}

export const RequireRole = (role?: string): void => {
  if (!role || (role !== Role.Admin && role !== Role.Student)) {
    redirect("/login");
  }
};
