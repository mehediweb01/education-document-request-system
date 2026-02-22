import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Documents Request",
  description: "This is the documents request page for administrators",
};

const DocumentsRequest = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Documents Request</h1>
    </div>
  );
};

export default DocumentsRequest;
