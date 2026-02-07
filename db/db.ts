import { NavItem } from "@/types/type";

export const navItemsForStudent: NavItem[] = [
  {
    id: 1,
    href: "/",
    name: "Dashboard",
  },
  {
    id: 2,
    href: "/documents",
    name: "Documents",
  },
  {
    id: 3,
    href: "/request-history",
    name: "Request History",
  },
  {
    id: 4,
    href: "/account",
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
    href: "/documents-request",
  },
  {
    id: 3,
    name: "Account",
    href: "/account",
  },
];
