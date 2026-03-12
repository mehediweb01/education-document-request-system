import AdminAccount from "@/components/account/admin/AdminAccount";
import StudentAccount from "@/components/account/student/StudentAccount";
import { UserProps } from "@/interface/interface";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { getUserById } from "@/queries/users";
import { notFound, redirect } from "next/navigation";

export const dynamic = "force-dynamic";

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

const UserAccount = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const authUser = await getUserFromToken();
  const { userId: user_id } = await params;

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
