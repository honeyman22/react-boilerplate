import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Partners from "./pages/Home/partners";
import Layout from "./components/common/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home/partners",
        element: <Partners />,
      },
      {
        path: "home/testimonial",
        element: <Partners />,
      },
    ],
  },
]);
