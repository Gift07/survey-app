import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import Line from "./Line";
import HeaderLister from "./HeaderLister";

const Navbar = () => {
  return (
    <div className="w-screen h-14 font-medium bg-blue flex items-center justify-end px-12 text-white text-[14px] fixed">
      <div className="px-6">
        <ul className="flex items-center justify-center gap-x-9">
          <li className="flex items-center gap-x-1">
            Learn <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-x-1">
            Network <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-x-1">
            Evaluate <MdOutlineKeyboardArrowDown />
          </li>
          <li className="flex items-center gap-x-1">Jobs</li>
        </ul>
      </div>
      <Line />
      <HeaderLister
        iconSrc={"images/assets_Header_png/manager-5.png"}
        text={1305}
        subtext={"Profile Score"}
      />
      <HeaderLister
        iconSrc={"images/assets_Header_png/group-16.png"}
        text={400}
        subtext={"Tokens"}
      />
      <HeaderLister iconSrc={"images/calendar@3x.png"} />
      <HeaderLister icon={<IoNotificationsSharp />} />
      {/* user */}
      <div className="px-6 flex items-center gap-x-2">
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="user"
          className="w-7 h-7 rounded-full object-cover"
        />
        <div className="flex items-center gap-x-2">
          <h1>Sangeeta</h1>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
