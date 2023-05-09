import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <Outlet />
    </div>
  );
};

export default Home;
