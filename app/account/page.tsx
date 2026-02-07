import { PropsSearchParams } from "@/types/type";

const Account = async ({ searchParams }: PropsSearchParams) => {
  const role = await searchParams;

  return (
    <div>
      <h1>{role.role === "admin" ? "admin" : "student"} Account</h1>
    </div>
  );
};

export default Account;
