import { RequireRole } from "@/lib/auth";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Home = async () => {
  const authUser = await getUserFromToken();

  if (authUser?.token) {
    RequireRole(authUser?.role as string);

    if (authUser?.role === "admin") {
      redirect(`/dashboard/admin/${authUser?.user_id as string}`);
    } else if (authUser?.role === "student") {
      redirect(`/dashboard/student/${authUser?.user_id as string}`);
    } else {
      redirect("/login");
    }
  } else {
    redirect("/login");
  }
};

export default Home;
