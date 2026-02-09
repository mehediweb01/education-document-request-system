import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const StudentPage = async () => {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>student dashboard</h1>
    </div>
  );
};

export default StudentPage;
