import React from "react";

export const Paper: React.FC = (): JSX.Element => {
  return (
    <>
    {/* paper 1 */}
      <div id="p1" className=" paper z-[3] absolute w-[100%] h-full top-0 left-0 ">
        <div  className="front origin-left transition-all duration-500 z-[1] bg-white absolute w-full h-full top-0 left-0 ">
          <div id="f1" className="front-content  w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Front-1</h1>
          </div>
        </div>
        <div className="back origin-left transition-all duration-500 z-[0] bg-white absolute w-full h-full top-0 left-0 ">
          <div id="b1" className="back-content w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Back-1</h1>
          </div>
        </div>
      </div>
    {/* paper 2 */}
      <div id="p2" className="paper z-[2] absolute w-[100%] h-full top-0 left-0 ">
        <div  className="front origin-left transition-all duration-500 z-[1] bg-white absolute w-full h-full top-0 left-0 ">
          <div id="f2" className="front-content  w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Front-2</h1>
          </div>
        </div>
        <div className="back origin-left transition-all duration-500 z-[0] bg-white absolute w-full h-full top-0 left-0 ">
          <div id="b2" className="back-content w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Back-2</h1>
          </div>
        </div>
      </div>
    {/* paper 3 */}
      <div id="p3" className="paper z-[1] absolute w-[100%] h-full top-0 left-0 ">
        <div  className="front origin-left transition-all duration-500 z-[1] bg-white absolute w-full h-full top-0 left-0 ">
          <div id="f3" className="front-content  w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Front-3</h1>
          </div>
        </div>
        <div className="back origin-left transition-all duration-500 z-[0] bg-white absolute w-full h-full top-0 left-0 ">
          <div id="b3" className="back-content w-full h-full flex justify-center items-center">
            <h1 className="font-bold text-2xl">Back-3</h1>
          </div>
        </div>
      </div>
    </>
  );
};
