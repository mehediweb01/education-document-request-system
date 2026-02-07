import { RequireRole } from "@/lib/auth";
import { PropsSearchParams } from "@/types/type";
import AdminDashboard from "../components/dashboard/AdminDashboard";
import StudentDashboard from "../components/dashboard/StudentDashboard";

const Home = async ({ searchParams }: PropsSearchParams) => {
  const searchParam = await searchParams;
  const role = searchParam.role;

  RequireRole(role);

  if (role === "student") {
    return <StudentDashboard />;
  } else {
    return <AdminDashboard />;
  }
};

export default Home;
