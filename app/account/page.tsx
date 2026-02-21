import AdminAccount from "@/components/account/admin/AdminAccount";
import StudentAccount from "@/components/account/student/StudentAccount";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Account = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    role: string;
  };

  if (decoded.role === "admin") {
    return <AdminAccount />;
  } else if (decoded.role === "student") {
    return <StudentAccount />;
  } else {
    redirect("/login");
  }
};

export default Account;
