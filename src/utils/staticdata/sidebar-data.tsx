import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
export const menudata = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardFill size={20} />,
  },
  {
    name: "Home",
    path: "/home/partners",
    icon: <AiFillHome size={20} className="" />,
    submenu: [
      {
        name: "Partners",
        path: "/home/partners",
      },
      {
        name: "Testimonial",
        path: "/home/testimonial",
      },
    ],
  },
  {
    name: "Role Management",
    path: "/role-management",
    icon: (
      <img
        src="/role-management-icon.png"
        alt="role management"
        height={20}
        width={20}
      />
    ),
    submenu: [
      {
        name: "Role",
        path: "/role-management/roles",
      },
      {
        name: "Testimonial",
        path: "/home/testimonial",
      },
    ],
  },
];
