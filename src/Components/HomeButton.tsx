import Link from 'next/link'
import React from 'react'
import {AiFillHome} from 'react-icons/ai'
export const HomeButton = () => {
  return (
    <Link href={`/`} className=' fixed text-[#a8a8a8cf] z-10 hover:scale-[1.1] transition-all duration-300 cursor-pointer text-[30px] left-5 bottom-5 '>
        <AiFillHome/>
    </Link>
  )
}
