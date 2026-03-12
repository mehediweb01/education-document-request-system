import Header from "@/components/documents-request/Header";
import Requests from "@/components/documents-request/Requests";

export const metadata = {
  title: "Documents Request",
  description: "This is the documents request page for administrators",
};

const DocumentsRequest = async ({
  searchParams,
}: {
  searchParams: { page: string };
}) => {
  const page = await searchParams;
  const currentPage = Number(page.page);

  return (
    <div>
      <Header />
      <Requests page={currentPage as number} />
    </div>
  );
};

export default DocumentsRequest;
