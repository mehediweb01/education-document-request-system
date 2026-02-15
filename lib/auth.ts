import axios from "axios";
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

export const refreshAccessToken = async () => {
  try {
    const response: Response = await axios.post("/api/refresh");

    return response.ok;
  } catch (err: unknown) {
    console.error(
      `Error refreshing access token: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
};
