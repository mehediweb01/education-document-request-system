import LoginForm from "@/components/login/LoginForm";
import logo from "@/public/images/logo.png";
import Image from "next/image";

const LoginPage = async () => {
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
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
