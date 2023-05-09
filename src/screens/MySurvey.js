import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import { BsThreeDotsVertical } from "react-icons/bs";

const MySurvey = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);
  return (
    <div>
      {" "}
      <HomeHeader
        setIsGrid={setIsGrid}
        isGrid={isGrid}
        setIsList={setIsList}
        isList={isList}
      />
      <div className="w-full pl-8 pr-16 py-4 flex items-center justify-center">
        <div
          className={`w-full ${isGrid && " grid grid-cols-4 gap-4"} ${
            isList && "flex flex-col items-center"
          }`}
        >
          {isGrid &&
            Array.from({ length: 4 }).map((_, i) => (
              <div className="w-full bg-white shadow-sm rounded-md h-60">
                <img
                  src="images/my_surveys_grid.png"
                  alt="grid"
                  className="w-full h-[65%] object-cover p-3"
                />
                <div className="w-full px-2 pt-1">
                  <h1 className="text-sm font-semibold text-blac">
                    Career-skill feedback
                  </h1>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="images/calendar.png"
                        alt="calendar"
                        className="h-4 w-4 object-cover"
                      />
                      <h1 className="text-gray-400 font-light text-sm">
                        11 Mar 2020
                      </h1>
                    </div>
                    <div className="text-gray-400 text-sm">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
                <div className="w-full px-2 pt-1">
                  <button className="bg-blue py-1 uppercase text-sm text-white w-full rounded-md">
                    View response
                  </button>
                </div>
              </div>
            ))}

          {/* for a list */}
          {isList &&
            Array.from({ length: 4 }).map((_, i) => (
              <div className="w-full bg-white shadow-sm rounded-md h-20 my-2">
                <div className="w-full px-2 pt-1">
                  <div className="w-full flex items-center justify-between pr-2">
                    <h1 className="text-sm font-semibold text-blac">
                      Career-skill feedback
                    </h1>
                    <div className="text-gray-400 text-sm">
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                      <img
                        src="images/calendar.png"
                        alt="calendar"
                        className="h-4 w-4 object-cover"
                      />
                      <h1 className="text-gray-400 font-light text-sm">
                        11 Mar 2020
                      </h1>
                    </div>

                    <div className="w-1/5 px-2">
                      <button className="bg-blue py-1 uppercase text-sm text-white w-full rounded-md">
                        View response
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MySurvey;
