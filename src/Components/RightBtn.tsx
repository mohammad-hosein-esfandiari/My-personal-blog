'use client'
import { BtnProps } from '@/types/book.types'
import React, { FC } from 'react'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'



export const RightBtn:FC<BtnProps> = ({currentLocation,bookLength,handlePage}) => {
  
    return (
    <button
    onClick={handlePage}
    className={`${
      currentLocation < bookLength &&
      currentLocation !== 0 &&
      "translate-x-[880%]"
    } m-2  transition-transform duration-500 rounded-md p-2 text-lg border-[#a8a8a845] border-[1px] text-white`}>
    <BiSolidRightArrow className="hover:scale-[1.5] transition-all duration-300" />
  </button>
  )
}
