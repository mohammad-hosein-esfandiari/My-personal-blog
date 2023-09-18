"use client";
import { useEffect, useState } from "react";
import { Book } from "@/Components/Book";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function Home() {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isOpenBook, setIsOpenBook] = useState<"open" | "close" | null>(null);
  const data = ["d", "s", "a", "dsc", "dscdsc"];

  const goNextPage = () => {
    if (currentLocation < data.length) {
      currentLocation === 1 && setIsOpenBook("open");
      currentLocation === data.length && setIsOpenBook("close");

      setCurrentLocation((prev) => prev + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 0) {
      setCurrentLocation((prev) => prev - 1);
    }
  };
  console.log(currentLocation);
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-[#66b4df]">
      <button
        onClick={goPrevPage}
        className={`${
          currentLocation < data.length &&
          currentLocation !== 0 &&
          "translate-x-[-520%]"
        } m-2 hover:scale-[1.1] transition-transform duration-500 shadow-md p-2 text-lg rounded-md bg-slate-400 text-white`}>
        <BiSolidLeftArrow />
      </button>
      <Book
        isOpenBook={isOpenBook}
        papers={data}
        currentLocation={currentLocation}
      />
      <button
        onClick={goNextPage}
        className={`${
          currentLocation >= 1 &&
          currentLocation !== data.length &&
          "translate-x-[520%]"
        } m-2 hover:scale-[1.1] transition-transform duration-500 shadow-md p-2 text-lg rounded-md bg-slate-400 text-white`}>
        <BiSolidRightArrow />
      </button>
    </div>
  );
}
