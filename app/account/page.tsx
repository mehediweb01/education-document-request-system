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

  return (
    <div>
      <h1>{decoded.role === "admin" ? "admin" : "student"} Account</h1>
    </div>
  );
};

export default Account;
