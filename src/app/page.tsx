"use client";
import { useEffect, useState } from "react";
import { Book } from "@/Components/Book";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
import { RightBtn } from "@/Components/RightBtn";
import { LeftBtn } from "@/Components/LeftBtn";

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
  return (
    <div className=" w-screen overflow-hidden h-screen flex justify-center items-center">
      <LeftBtn
        currentLocation={currentLocation}
        data={data}
        handlePage={goPrevPage}
      />
      <Book
        isOpenBook={isOpenBook}
        papers={data}
        currentLocation={currentLocation}
      />
      <RightBtn
        currentLocation={currentLocation}
        data={data}
        handlePage={goNextPage}
      />
    </div>
  );
}
