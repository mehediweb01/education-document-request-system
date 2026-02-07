import { PropsSearchParams } from "@/types/type";
import { redirect } from "next/navigation";

const Register = async ({ searchParams }: PropsSearchParams) => {
  const { role } = await searchParams;

  if (!role || role === "admin") {
    redirect("/login");
  }

  return (
    <div>
      <h1>Register page</h1>
    </div>
  );
};

export default Register;
