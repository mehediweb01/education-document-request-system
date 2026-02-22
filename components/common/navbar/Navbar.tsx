"use client";

import { navItemsForAdmin, navItemsForStudent } from "@/db/db";
import { UserProps } from "@/interface/interface";
import { replaceMongoIdInObject } from "@/lib/convertData";
import logo from "@/public/images/logo.png";
import axios from "axios";
import { LogIn, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
import { toast } from "react-toastify";
import MobileMenuIcon from "../../svg/MobileMenu";
import { Button } from "../../ui/button";
import MobileMenu from "./MobileMenu";

const liClassName =
  "font-montserrat font-medium hover:text-eerie-black hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors duration-300 text-sm sm:text-base";

const Navbar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  const path = usePathname();
  const pathname = path.split("/")[1];
  const router = useRouter();

  useEffect(() => {
    const checkAuthorization = async () => {
      const res = await axios.get("/api/auth/me");

      if (res.status === 200) {
        const newUser = replaceMongoIdInObject(res.data.user);
        setUser(newUser);
      }
    };

    checkAuthorization();
  }, [router, pathname]);

  console.log({ user });

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      setUser(null);
      router.push("/login");
      toast.success("Logout successful");
    } catch {
      toast.error("Failed to logout");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center gap-8 px-4 py-2 sticky top-0 left-0 right-0 rounded-md overflow-auto bg-linear-to-br from-white to-black/40 z-50">
        {/* Logo */}
        <div>
          <Link href={`/?role=${user?.role}`}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>

        {/* Navigation */}
        <div className="md:block hidden">
          <ul className="flex justify-center items-center gap-3">
            {user?.role === "admin"
              ? navItemsForAdmin.map((items) => (
                  <li
                    key={items.id}
                    className={
                      `${pathname === items.href.split("/")[1] ? "active" : ""}` +
                      " " +
                      liClassName
                    }
                  >
                    <Link
                      href={`${items.href}/${items.name === "Account" ? user?.id : ""}?role=${user?.role === "admin" ? "admin" : ""}`}
                    >
                      {items.name}
                    </Link>
                  </li>
                ))
              : navItemsForStudent.map((items) => (
                  <li
                    key={items.id}
                    className={
                      `${pathname === items.href.split("/")[1] ? "active" : ""}` +
                      " " +
                      liClassName
                    }
                  >
                    <Link
                      href={`${items.href}/${items.name === "Account" ? user?.id : ""}?role=${user?.role === "student" ? "student" : ""}`}
                    >
                      {items.name}
                    </Link>
                  </li>
                ))}
          </ul>
        </div>
        {/* mobile menu */}
        <div className="md:hidden block">
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
              document.body.style.overflow = isOpen ? "auto" : "hidden";
            }}
            variant="outline"
            className="bg-transparent btn-animate"
          >
            <MobileMenuIcon />
          </Button>
        </div>

        {/* Login and Register */}
        {user ? (
          <>
            <div className="flex justify-center items-center gap-2">
              <div className="md:block hidden">
                <h1 className="font-semibold text-eerie-black font-montserrat tracking-[1px]">
                  {user.name}
                </h1>
                <p className="text-gray-900 text-center">{user.email}</p>
              </div>

              <div>
                <Button
                  type="button"
                  onClick={handleLogout}
                  variant="link"
                  className="cursor-pointer"
                >
                  Logout
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-4 gap-2 flex-wrap">
              <Link
                href={`/login`}
                className={`${liClassName} ${pathname === "login" ? "active" : ""} flex gap-1 items-center`}
              >
                <LogIn /> Login
              </Link>

              <Link
                href={`/register`}
                className={`${liClassName}  ${pathname === "register" ? "active" : ""} flex gap-1 items-center`}
              >
                <User /> Register
              </Link>
            </div>
          </>
        )}
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 top-18 overflow-hidden z-50 shadow-inner shadow-sky-400 transition-opacity duration-300 mx-4 my-2 bg-black/80 rounded-md ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div
            className={`absolute top-0 left-0 w-full min-h-full bg-black/20 transition-transform duration-500 ease-out ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
          >
            <MobileMenu user={user} pathname={pathname} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
