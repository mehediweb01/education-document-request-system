import AdminAccount from "@/components/account/admin/AdminAccount";
import StudentAccount from "@/components/account/student/StudentAccount";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// dynamically generate metadata based on user role
export const generateMetadata = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    return {
      title: "Login",
    };
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    role: string;
    user_id: string;
  };

  if (decoded.role === "admin") {
    return {
      title: "Admin Account",
    };
  } else if (decoded.role === "student") {
    return {
      title: "Student Account",
    };
  } else {
    return {
      title: "not found user account role",
    };
  }
};

const UserAccount = async () => {
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

export default UserAccount;
