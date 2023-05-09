import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLister = ({ link, name, iconSrcActive, iconSrcInactive }) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const urlList = currentUrl.split("/");

  console.log(urlList);
  return (
    <Link to={link}>
      <div className="w-full h-10 my-1">
        {urlList.find((url) => `/${url}` === link) ? (
          <div className="w-full h-full flex items-center gap-x-2">
            <hr className="w-2 h-full bg-blue" />
            <div className="flex items-center gap-x-2">
              <img
                src={iconSrcActive}
                alt="icon"
                className="h-6 object-cover"
              />
              <h1 className="font-semibold text-blue">{name}</h1>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center gap-x-2">
            <hr className="w-2 h-full bg-white" />
            <div className="flex items-center gap-x-2">
              <img
                src={iconSrcInactive}
                alt="icon"
                className="h-6 object-cover"
              />
              <h1>{name}</h1>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default SidebarLister;
