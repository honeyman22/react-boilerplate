import React from "react";

import SideBar from "./sidebar";
import Header from "./header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  const [collapse, setCollapse] = React.useState(false);
  return (
    <div className="w-full font-nunito relative  flex min-h-screen h-auto justify-start bg-white">
      <SideBar collapse={collapse} setCollapse={setCollapse} />
      <div className=" bg-[#f5f5f5] w-full  relative min-h-screen ">
        <div className={`sticky w-full border  z-50 top-0`}>
          <Header collapse={collapse} setCollapse={setCollapse} />
        </div>
        <div className=" px-[73px] py-[45px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
