import React from "react";
import { Link } from "react-router-dom";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { menudata } from "src/utils/staticdata/sidebar-data";
const SideBar = ({
  collapse,
  setCollapse,
}: {
  collapse: boolean;
  setCollapse?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = React.useState("");

  return (
    <div
      className={` duration-500 sidebar  ease-linear ${
        collapse ? "w-[80px]" : "w-[281px]"
      } h-screen border-r bg-white dark:bg-white dark:text-black  sticky z-40 top-0 overflow-auto drop-shadow-md `}
    >
      <Link
        to={"/"}
        className="sidebar-logo-section h-20 border-b flex items-center justify-center"
      >
        <img src="./aitclogo.png" alt="Aitc logo" height={50} width={141} />
      </Link>
      <div className="w-full flex p-4 flex-col">
        {menudata?.map(
          (item: { name: string; path: string; submenu?: any; icon?: any }) => {
            if (item?.submenu) {
              return (
                <>
                  <div
                    onClick={() => {
                      if (open !== "") {
                        setOpen("");
                      } else {
                        setOpen(item?.name);
                      }
                    }}
                    className="w-full cursor-pointer hover:bg-slate-100  h-10 flex justify-between items-center"
                  >
                    <div className="flex items-center gap-2">
                      {item?.icon}
                      <h1 className="font-semibold ">{item?.name}</h1>
                    </div>
                    {item?.name === open ? <BiChevronUp /> : <BiChevronDown />}
                  </div>

                  {item?.name === open && (
                    <>
                      {item?.submenu?.map((submenu: any) => (
                        <Link
                          key={submenu?.name}
                          to={submenu?.path}
                          className="sidebar-item w-full flex items-center px-8  h-10"
                        >
                          {submenu?.name}
                        </Link>
                      ))}
                    </>
                  )}
                </>
              );
            } else {
              return (
                <Link
                  key={item?.name}
                  to={item?.path}
                  className="w-full cursor-pointer hover:bg-slate-100  h-10 flex items-center gap-2"
                >
                  {item?.icon}
                  <h1 className="font-semibold ">{item?.name}</h1>
                </Link>
              );
            }
          }
        )}
      </div>
    </div>
  );
};

export default SideBar;
