"use client";

import { navItemsForAdmin, navItemsForStudent } from "@/db/db";
import logo from "@/public/images/logo.png";
import { LogIn, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const liClassName =
  "text-white font-montserrat font-medium hover:text-eerie-black hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors duration-300 text-sm sm:text-base";

const Navbar: React.FC = () => {
  const role = useSearchParams().get("role");

  return (
    <div className="flex justify-between items-center gap-8 px-4 py-2 sticky top-0 left-0 right-0 rounded-md overflow-auto bg-linear-to-br from-white to-black/40 z-50">
      <div>
        <Link href={`/?role=${role}`}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-3">
          {role === "admin"
            ? navItemsForAdmin.map((items) => (
                <li key={items.id} className={liClassName}>
                  <Link href={`${items.href}/?role=${role}`}>{items.name}</Link>
                </li>
              ))
            : navItemsForStudent.map((items) => (
                <li key={items.id} className={liClassName}>
                  <Link href={`${items.href}/?role=${role}`}>{items.name}</Link>
                </li>
              ))}
        </ul>
      </div>
      <div className="flex line-center gap-4">
        <Link
          href="/login"
          className={`${liClassName} flex gap-1 items-center`}
        >
          <LogIn /> Login
        </Link>
        {role === "admin" && (
          <Link
            href={`${role === "admin" ? "/register" : "/login"}`}
            className={`${liClassName} flex gap-1 items-center`}
          >
            <User /> Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
