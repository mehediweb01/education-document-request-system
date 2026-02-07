import { RequireRole } from "@/lib/auth";

const Register = () => {
  RequireRole("admin");
  return (
    <div>
      <h1>Register</h1>
    </div>
  );
};

export default Register;
