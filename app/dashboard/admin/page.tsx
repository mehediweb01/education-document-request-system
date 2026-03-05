import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { notFound, redirect } from "next/navigation";

export const metadata = {
  title: "Admin Dashboard",
  description: "This is the admin dashboard page",
};

const AdminPage = async () => {
  const authUser = await getUserFromToken();

  if (!authUser) {
    redirect("/login");
  }

  if (authUser?.role !== "admin") {
    notFound();
  }

  return (
    <div>
      <h1>admin dashboard</h1>
    </div>
  );
};

export default AdminPage;
