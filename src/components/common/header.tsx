import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Header = ({
  collapse,
  setCollapse,
}: {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
      </div>
    </div>
  );
};

export default Header;
