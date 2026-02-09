import { NavItem } from "@/types/type";

export const navItemsForStudent: NavItem[] = [
  {
    id: 1,
    href: "/",
    name: "Dashboard",
  },
  {
    id: 2,
    href: "/documents?role=student",
    name: "Documents",
  },
  {
    id: 3,
    href: "/request-history?role=student",
    name: "Request History",
  },
  {
    id: 4,
    href: "/account?role=student",
    name: "Account",
  },
];

export const navItemsForAdmin: NavItem[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/",
  },
  {
    id: 2,
    name: "Documents Request",
    href: "/documents-request?role=admin",
  },
  {
    id: 3,
    name: "Account",
    href: "/account?role=admin",
  },
];
