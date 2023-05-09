import React from "react";
import Line from "./Line";

const HeaderLister = ({ iconSrc, icon, text, subtext }) => {
  return (
    <div className="h-14 flex items-center">
      <div className="h-full px-6 flex items-center gap-x-2">
        {iconSrc && (
          <img src={iconSrc} alt="manager" className="h-5 object-cover" />
        )}
        {icon && <div className="text-lg text-white">{icon}</div>}
        {text && subtext && (
          <div className="text-white text-[10px]">
            <h1 className="font-bold">{text}</h1>
            <h1 className="font-light text-gray-300">{subtext}</h1>
          </div>
        )}
      </div>
      <Line />
    </div>
  );
};

export default HeaderLister;
