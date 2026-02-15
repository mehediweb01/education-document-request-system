import { NavItem } from "@/types/type";

export const navItemsForStudent: NavItem[] = [
  {
    id: 1,
    href: "/dashboard/student",
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
    href: "/dashboard/admin",
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

export const guideLine: {
  id: number;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "step #1",
    description: `click the "Request Now" button & submit your request`,
  },
  {
    id: 2,
    title: "step #2",
    description: `admin reviews & uploads the document`,
  },
  {
    id: 3,
    title: "step #3",
    description: `download your approved document`,
  },
];
