import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import RequestDocumentForm from "@/components/dashboard/student/RequestDocumentForm";
import { getUserById } from "@/queries/users";

export const metadata = {
  title: "Request Documents form",
  description: "This page allows students to request a document",
};

const RequestDocument = async ({
  params,
}: {
  params: Promise<{ user_id: string }>;
}) => {
  const { user_id } = await params;

  const user = await getUserById(user_id as string);

  return (
    <div className="w-full mx-auto flex sm:flex-row flex-col-reverse justify-between items-start gap-2">
      <div className="w-full sm:w-[60%] lg:w-[75%] mt-8 md:mt-12">
        <RequestDocumentForm user={JSON.parse(JSON.stringify(user))} />
      </div>

      <RequestCreationProcess />
    </div>
  );
};

export default RequestDocument;
