import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import GridSelector from "../components/GridSelector";
import { useNavigate } from "react-router-dom";

const HomeHeader = ({ isGrid, setIsGrid, setIsList, isList }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-3 pr-16 flex items-center justify-between">
      <div className="w-full flex pl-8">
        <h1 className="text-lg font-bold">My Surveys</h1>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="relative">
          <div className="absolute flex text-xs pl-2 h-8 items-center w-20">
            <h1 className="whitespace-nowrap">
              sort by :<b>Date</b>
            </h1>
          </div>
          <input className="outline-none focus:border focus:border-yellow-500 h-8 text-sm w-44 pl-20" />
        </div>
        <div className="flex items-center justify-center">
          {isGrid ? (
            <React.Fragment>
              <GridSelector
                isGrid={isGrid}
                setIsList={setIsList}
                isList={isList}
                setIsGrid={setIsGrid}
                id={1}
                iconSrc="images/view_grid.png"
              />
              <GridSelector
                isGrid={isGrid}
                setIsList={setIsList}
                id={2}
                isList={isList}
                setIsGrid={setIsGrid}
                iconSrc="images/view_list.png"
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <GridSelector
                isGrid={isGrid}
                id={1}
                setIsList={setIsList}
                isList={isList}
                setIsGrid={setIsGrid}
                icon={<BsFillGridFill />}
              />
              <GridSelector
                isGrid={isGrid}
                setIsList={setIsList}
                id={2}
                isList={isList}
                setIsGrid={setIsGrid}
                iconSrc="images/view_list.png"
              />
            </React.Fragment>
          )}
        </div>
        <div>
          <button
            onClick={() => navigate("create-survey")}
            className="bg-blue px-4 h-8 text-sm rounded-sm text-white uppercase whitespace-nowrap"
          >
            Create Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
