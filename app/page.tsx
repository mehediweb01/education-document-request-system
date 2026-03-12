import { RequireRole } from "@/lib/auth";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Home = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (token) {
    const decoded = jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
    ) as {
      role: string;
      user_id: string;
    };

    RequireRole(decoded.role);

    if (decoded.role === "admin") {
      redirect(`/dashboard/admin/${decoded?.user_id as string}`);
    } else if (decoded.role === "student") {
      redirect(`/dashboard/student/${decoded?.user_id as string}`);
    } else {
      redirect("/login");
    }
  } else {
    redirect("/login");
  }
};

export default Home;
