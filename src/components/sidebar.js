import React from "react";
import SidebarLister from "./SidebarLister";

const Sidebar = () => {
  const sidebar_items = [
    {
      id: 1,
      name: "My surveys",
      link: "/",
      iconSrcActive: "home/my_surveys@2x.png",
      iconSrcInactive: "home/my_surveys_inactive@2x.png",
    },
    {
      id: 2,
      name: "Requested surveys",
      link: "/requested-surveys",
      iconSrcActive: "home/requested_surveys@2x.png",
      iconSrcInactive: "home/requested_surveys_inactive@2x.png",
    },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full px-5 pb-3">
        <div className="py-4">
          <h1 className="capitalize text-blac font-bold">survey</h1>
        </div>
        <hr />
      </div>
      {/* sidebar items */}
      {sidebar_items.map((sidebar_item) => (
        <div key={sidebar_item.id}>
          <SidebarLister
            name={sidebar_item.name}
            iconSrcActive={sidebar_item.iconSrcActive}
            iconSrcInactive={sidebar_item.iconSrcInactive}
            link={sidebar_item.link}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
