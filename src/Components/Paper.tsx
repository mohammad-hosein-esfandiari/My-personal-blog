import React from "react";
interface PaperProps {
  index: number;
  paperLength: number;
  currentLocation: number;
}
export const Paper: React.FC<PaperProps> = ({
  index,
  paperLength,
  currentLocation,
}): JSX.Element => {

  return (
    <>
      <div
        style={{
          zIndex:
            index + 1 <= currentLocation ? index + 1 : paperLength - index,
        }}
        id={"p" + (index + 1)}
        className={` paper absolute w-[100%] h-full top-0 left-0 ${
          index + 1 <= currentLocation ? `flipped` : ``
        }`}>
        <div className="front origin-left transition-all duration-500 z-[1] bg-white absolute w-full h-full top-0 left-0 ">
          <div
            id={"f" + (index + 1)}
            className="front-content  w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Front-{index + 1}</h1>
          </div>
        </div>
        <div className="back origin-left transition-all duration-500 z-[0] bg-white absolute w-full h-full top-0 left-0 ">
          <div
            id={"b" + (index + 1)}
            className="back-content w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Back-{index + 1}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
