import { NavItem } from "@/types/type";

export const navItemsForStudent: NavItem[] = [
  {
    id: 1,
    href: "/dashboard/student",
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
    href: "/dashboard/admin",
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

export const documentTypes: {
  id: number;
  name: string;
}[] = [
  {
    id: 1,
    name: "Semester Result Sheet",
  },
  {
    id: 2,
    name: "CGPA Certificate",
  },
  {
    id: 3,
    name: "Testimonials",
  },
  {
    id: 4,
    name: "Course Completion Certificate",
  },
];
