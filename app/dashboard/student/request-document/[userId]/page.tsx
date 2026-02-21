import RequestCreationProcess from "@/components/dashboard/student/RequestCreationProcess";
import RequestDocumentForm from "@/components/dashboard/student/RequestDocumentForm";
import { getUserById } from "@/queries/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const RequestDocument = async ({ params }: { params: { userId: string } }) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  const { userId } = await params;

  if (!token) {
    redirect("/login");
  }

  const user = await getUserById(userId);

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
