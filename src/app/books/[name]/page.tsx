'use client'
import { Book } from '@/Components/Book';
import { LeftBtn } from '@/Components/LeftBtn';
import { RightBtn } from '@/Components/RightBtn';
import { books } from '@/data/books';
import { useBook } from '@/store/book';
import { useRouter } from 'next/navigation';
import React,{FC, useState} from 'react'

interface PageParams {
  params:any
  searchParams:any
}

const  Page:FC<PageParams> =({params,searchParams})=> {
  const {name}= params
  const {headline,paper} = searchParams
  const book = books.find(item=> item.name === name)
  const bookLength = book.headlines.map((item:any)=>item.pages).flat().length
  const papersArray = useBook.getState().book
  console.log(papersArray)
  const router = useRouter()
  const currentLocation = Number(paper)
  const [isOpenBook, setIsOpenBook] = useState<"open" | "close" | null>(null);
  const goNextPage = () => {
    console.log(paper)
    if (currentLocation < bookLength) {
      currentLocation === 1 && setIsOpenBook("open");
      currentLocation === bookLength && setIsOpenBook("close");
      console.log(papersArray.length)
      if(currentLocation == papersArray.length-1){
        const papersArrayIndex = book.headlines.findIndex((item:any)=> item.headline === headline)
        const title = book.headlines[papersArrayIndex+1].headline
        const arr = book.headlines[papersArrayIndex+1].pages
        useBook.getState().addPaperToBook(arr)
        router.push(`/books/${name}?headline=${title}&paper=${Number(paper)+1}`)
      }else{

        router.push(`/books/${name}?headline=${headline}&paper=${Number(paper)+1}`)
      }

    }
  };

  const goPrevPage = () => {
    if (currentLocation > 0) {
      router.push(`/books/${name}?headline=${headline}&paper=${Number(paper-1)}`)
    }
  };
  return (
    <div className=" w-screen overflow-hidden h-screen flex justify-center items-center">
    <LeftBtn
      currentLocation={currentLocation}
      bookLength={bookLength}
      handlePage={goPrevPage}
    />
    <Book
      isOpenBook={isOpenBook}
      papers={papersArray}
      currentLocation={currentLocation}
      bookLength={bookLength}
    />
    <RightBtn
      currentLocation={currentLocation}
      bookLength={bookLength}
      handlePage={goNextPage}
    />
  </div>
  )
}

export default Page