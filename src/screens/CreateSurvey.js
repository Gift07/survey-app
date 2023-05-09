import React from "react";

import { Outlet } from "react-router-dom";

const CreateSurvey = () => {
  return (
    <div className="w-full h-full">
      <div className=" w-full h-full relative">
        <div className="bg-gray-200 w-full pl-8 pr-16 py-3">
          <h1 className="font-md font-bold text-blue">create survey</h1>
          <div className="flex items-center text-xs text-light">
            Home / My Survey / <h1 className="text-blue ml-1">Create Survey</h1>{" "}
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CreateSurvey;
