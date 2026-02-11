import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const RequestDocument = async ({ params }: { params: { userId: string } }) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const { userId } = await params;

  if (!token) {
    redirect("/login");
  }

  console.log(userId);

  return (
    <div>
      <h1>request document for student</h1>
    </div>
  );
};

export default RequestDocument;
