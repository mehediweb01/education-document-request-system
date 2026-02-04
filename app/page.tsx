import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="flex justify-between items-center gap-16 mx-8">
      <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      <ul className="flex justify-center items-center gap-2">
        <li>
          <Link href={"/"} className="flex items-center gap-1">
            Home <FaHome className="size-4" />
          </Link>
        </li>
        <span className="text-gray-400 font-bold">|</span>
        <li>
          <Link href={"/login"} className="flex items-center gap-1">
            Login <IoLogInOutline className="size-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
