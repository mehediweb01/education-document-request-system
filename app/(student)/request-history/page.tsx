import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Request History",
  description: "This page shows the request history of the student",
};

const RequestHistory = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Request History</h1>
    </div>
  );
};

export default RequestHistory;
