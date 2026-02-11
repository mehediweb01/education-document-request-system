import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DocumentsPage = async () => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Documents page</h1>
    </div>
  );
};

export default DocumentsPage;
