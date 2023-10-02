import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Breadcrumb from "./breadcrum";
import { MdNotifications } from "react-icons/md";
const Header = ({
  collapse,
  setCollapse,
}: {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const badge = 2;
  return (
    <div className="header-wrapper h-20  pl-5 pr-7   sm:px-10 w-full  flex items-center justify-between">
      <div className="flex  gap-10 dark:text-black  items-center">
        <div
          onClick={(e) => {
            setCollapse(!collapse);
          }}
          className="cursor-pointer"
        >
          <AiOutlineMenu size={25} />
        </div>
        <Breadcrumb />
      </div>
      <div className="flex gap-6 items-center">
        <div className="h-6 w-6 relative">
          <img src="/notifications.png" alt="" className="h-6 w-6" />
          <div
            className={`badge min-w-2 text-white absolute font-semibold -top-2 ${
              badge < 9 ? "-right-2 w-4" : badge < 99 ? "-right-3" : "-right-5"
            } grow-0 rounded-full px-[3px] py-[1px] text-xs bg-orange-700`}
          >
            {badge}
          </div>
        </div>
        <div className="flex gap-1  items-center">
          <img
            src="/deleteable/srk.jpg"
            alt=""
            className="h-10 w-10 rounded-full overflow-hidden"
          />
          <div className="flex flex-col ">
            <h1 className="text-white text-sm leading-4">Shah Rukh Khan</h1>
            <p className="text-[#FFFFFF] text-xs opacity-75">Actor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
