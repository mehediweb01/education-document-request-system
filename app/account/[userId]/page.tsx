import AdminAccount from "@/components/account/admin/AdminAccount";
import StudentAccount from "@/components/account/student/StudentAccount";
import { UserProps } from "@/interface/interface";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { getUserById } from "@/queries/users";
import { notFound, redirect } from "next/navigation";

// dynamically generate metadata based on user role
export const generateMetadata = async () => {
  const user = await getUserFromToken();

  if (user?.role === "admin") {
    return {
      title: "Admin Account",
    };
  } else if (user?.role === "student") {
    return {
      title: "Student Account",
    };
  } else {
    return {
      title: "not found user",
    };
  }
};

const UserAccount = async ({ params }: { params: { userId: string } }) => {
  const authUser = await getUserFromToken();
  const searchParams = await params;
  const user_id = searchParams.userId;

  if (!authUser) {
    redirect("/login");
  }

  if (authUser?.user_id !== user_id) {
    notFound();
  }

  const user = await getUserById(authUser?.user_id);

  if (authUser?.role === "admin") {
    return <AdminAccount user={user as UserProps} />;
  } else if (authUser?.role === "student") {
    return <StudentAccount user={user as UserProps} />;
  } else {
    redirect("/login");
  }
};

export default UserAccount;
