import { navItemsForAdmin, navItemsForStudent } from "@/db/db";
import { UserProps } from "@/interface/interface";
import Link from "next/link";

const liClassName =
  "font-montserrat font-medium hover:text-eerie-black hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-2 transition-colors duration-300 text-sm sm:text-base";

const MobileMenu = ({
  user,
  pathname,
}: {
  user: UserProps | null;
  pathname: string;
}) => {
  return (
    <div className="mt-8">
      <ul className="flex flex-col justify-start items-start ms-4 gap-3">
        {user?.role === "admin"
          ? navItemsForAdmin.map((items) => (
              <li
                key={items.id}
                className={
                  `${pathname === items.href.split("/")[1] ? "active" : "text-white"}` +
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
                  `${pathname === items.href.split("/")[1] ? "active" : "text-white"}` +
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
  );
};

export default MobileMenu;
