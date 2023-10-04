import React from "react";

const CommonPageTab = ({
  setfunc,
  tablist,
  tab,
}: {
  setfunc: any;
  tablist: string[];
  tab: string;
}) => {
  return (
    <div className="flex mt-[19px]  h-14 mb-[24px]">
      {tablist?.map((item, i) => (
        <div
          key={item}
          className={`px-5 cursor-pointer flex items-center font-semibold ${
            i === 0 && "rounded-l-[4px]"
          } ${
            tablist?.length - 1 === i && "rounded-r-[4px]"
          } bg-white h-full border ${
            item === tab ? "text-primary scale-105" : "text-primary_text"
          }`}
          onClick={() => setfunc(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CommonPageTab;
