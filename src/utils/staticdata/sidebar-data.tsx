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
];
