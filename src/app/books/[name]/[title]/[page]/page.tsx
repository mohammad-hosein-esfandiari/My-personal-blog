'use client'
import { Book } from '@/Components/Book';
import { LeftBtn } from '@/Components/LeftBtn';
import { RightBtn } from '@/Components/RightBtn';
import React,{FC, useState} from 'react'



const  BookPage:FC<any> =({params})=> {
  console.log(params)
  const [currentLocation, setCurrentLocation] = useState(Number(params.page));
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
    >
      
      </Book>
    <RightBtn
      currentLocation={currentLocation}
      data={data}
      handlePage={goNextPage}
    />
  </div>
  )
}

export default BookPage