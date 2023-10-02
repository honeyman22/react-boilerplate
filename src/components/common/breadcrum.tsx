import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  const noindexpage = ["Home"];
  return (
    <div className="breadcrumb hidden md:flex  gap-1 items-center font-bold">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={segment}>
          {index > 0 && <BiChevronRight size={20} />}
          {index === pathSegments.length - 1 ? (
            <span className="capitalize ">
              {segment === "dashboard" ? "Overview" : segment}
            </span>
          ) : noindexpage?.includes(segment) ? (
            <span className="capitalize text-[#595959] pointer-events-none">
              {segment}
            </span>
          ) : (
            <Link
              to={`/${pathSegments.slice(0, index + 1).join("/")}`}
              className="capitalize text-[#595959]"
            >
              {segment}
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
