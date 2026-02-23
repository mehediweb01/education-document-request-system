import { UserProps } from "@/interface/interface";

const AdminAccount = ({ user }: { user: UserProps | null }) => {
  return (
    <div>
      <h1>This is a admin account</h1>
    </div>
  );
};

export default AdminAccount;
