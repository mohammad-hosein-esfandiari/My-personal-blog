import { BtnProps } from '@/types/book.types'
import React, { FC } from 'react'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'



export const RightBtn:FC<BtnProps> = ({currentLocation,data,handlePage}) => {
  
    return (
    <button
    onClick={handlePage}
    className={`${
      currentLocation < data.length &&
      currentLocation !== 0 &&
      "translate-x-[880%]"
    } m-2  transition-transform duration-500 shadow-md p-2 text-lg rounded-md bg-slate-400 text-white`}>
    <BiSolidRightArrow />
  </button>
  )
}
