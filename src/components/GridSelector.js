import React from "react";

const GridSelector = ({
  setIsGrid,
  isGrid,
  iconSrc,
  icon,
  isList,
  setIsList,
  id,
}) => {
  return (
    <div
      onClick={() => {
        setIsGrid(!isGrid);
        setIsList(!isList);
      }}
      className={`h-8 w-8 ${
        isGrid && id === 1 ? "bg-blue" : "border border-yellow-500"
      } ${
        isList && id === 2 ? "bg-blue" : "border border-yellow-500"
      } flex items-center justify-center cursor-pointer`}
    >
      {iconSrc ? (
        <img src={iconSrc} alt="grid" className="h-4 w-4 object-cover" />
      ) : (
        <div className="text-blue">{icon}</div>
      )}
    </div>
  );
};

export default GridSelector;
