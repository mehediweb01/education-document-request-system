import Header from "@/components/documents-request/Header";
import Requests from "@/components/documents-request/Requests";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { notFound, redirect } from "next/navigation";

export const metadata = {
  title: "Documents Request",
  description: "This is the documents request page for administrators",
};

const DocumentsRequest = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const authUser = await getUserFromToken();
  const page = await searchParams;
  const currentPage = Number(page.page);

  if (!authUser) {
    redirect("/login");
  }

  if (authUser?.role !== "admin") {
    notFound();
  }

  return (
    <div>
      <Header />
      <Requests page={currentPage as number} />
    </div>
  );
};

export default DocumentsRequest;
