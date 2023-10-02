import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Partners from "./pages/Home/partners";
import Layout from "./components/common/layout";
import Testimonial from "./pages/Home/testimonial";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "home/partners",
        element: <Partners />,
      },
      {
        path: "home/testimonial",
        element: <Testimonial />,
      },
    ],
  },
]);
