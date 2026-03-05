import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { notFound, redirect } from "next/navigation";

export const metadata = {
  title: "Documents Request",
  description: "This is the documents request page for administrators",
};

const DocumentsRequest = async () => {
  const authUser = await getUserFromToken();

  if (!authUser) {
    redirect("/login");
  }

  if (authUser?.role !== "admin") {
    notFound();
  }

  return (
    <div>
      <h1>Documents Request</h1>
    </div>
  );
};

export default DocumentsRequest;
