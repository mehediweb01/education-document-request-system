import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin Dashboard",
  description: "This is the admin dashboard page"
}


const AdminPage = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>admin dashboard</h1>
    </div>
  );
};

export default AdminPage;
