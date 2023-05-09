import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLister = ({ link, name, iconSrcActive, iconSrcInactive }) => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <Link to={link}>
      <div className="w-full h-10 my-1">
        {currentUrl === link ? (
          <div className="w-full h-full bg-red-600 flex items-center">
            <hr className="w-2 h-full bg-blue" />
            <div>
              <h1>{name}</h1>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center">
            <hr className="w-2 h-full bg-white" />
            <div>
              <h1>{name}</h1>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default SidebarLister;
