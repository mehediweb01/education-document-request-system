import AdminAccount from "@/components/account/admin/AdminAccount";
import StudentAccount from "@/components/account/student/StudentAccount";
import { getUserById } from "@/queries/users";
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

const UserAccount = async ({ params }: { params: { userId: string } }) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const searchParams = await params;
  const user_id = searchParams.userId;

  if (!token) {
    redirect("/login");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
    role: string;
    user_id: string;
  };

  if (decoded.user_id !== user_id) {
    redirect("/");
  }

  const user = await getUserById(user_id);

  if (decoded.role === "admin") {
    return <AdminAccount user={user} />;
  } else if (decoded.role === "student") {
    return <StudentAccount user={user} />;
  } else {
    redirect("/login");
  }
};

export default UserAccount;
