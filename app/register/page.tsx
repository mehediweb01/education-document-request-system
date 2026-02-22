import RegisterForm from "@/components/register/RegisterForm";
import logo from "@/public/images/logo.png";
import Image from "next/image";

export const metadata = {
  title: "Register",
  description:
    "Register to access your account. Only students can be registered. Admin accounts are created by the system administrator.",
};

const Register = async () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center items-center min-h-[80vh]">
      <div className="sm:block hidden">
        <Image
          src={logo}
          alt="logo"
          className="h-full w-full object-cover bg-center"
          width={350}
          height={350}
        />
      </div>
      <div className="w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
