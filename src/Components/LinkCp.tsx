'use client'
import { books } from '@/data/books'
import { useBook } from '@/store/book'
import Link from 'next/link'
import React from 'react'

export const LinkCp:React.FC<any> = ({link,name,title}) => {
    const addToStoreFunc = ()=>{
      const papers =   books.find(item=>item.name === name).headlines[0].pages
      useBook.getState().addPaperToBook(papers)
    }
    
  return (
    <Link onClick={addToStoreFunc}  className=' p-6 flex rounded-md border-[#a8a8a845] border-[1px] items-center justify-center  cursor-pointer text-[#c1c1c1] hover:scale-[1.02] transition-all duration-300' href={link}>
    <h3 className='font-bold text-[20px]'>{title}</h3>
    
    </Link>
  )
}
