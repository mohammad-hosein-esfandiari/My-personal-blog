'use client'
import {useState} from 'react'
import { Book } from "@/Components/Book";
import { Button } from "@/Components/Button";
import {BiSolidRightArrow,BiSolidLeftArrow} from "react-icons/bi"

export default function Home() {
  const [currentLocation,setCuurentLocation] = useState(1)
  const numOfPapers = 3
  const openBook = ()=>{

  }
  const closeBook = ()=>{
      
  }

  const goNextPage = ()=>{
    
  }
  const goPrevPage = ()=>{

  }
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-[#66b4df]">
      <Button icon={<BiSolidLeftArrow/>}/>
      <Book/>
      <Button icon={<BiSolidRightArrow/>}/>
    </div>
  )
}
