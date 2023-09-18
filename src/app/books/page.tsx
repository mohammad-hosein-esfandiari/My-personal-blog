import { books } from '@/data/books'
import Link from 'next/link'
import React from 'react'

export default function Pages ()  {
  return (
    <div className='grid grid-cols-4 gap-10 w-full p-10'>
      {
        books.map((item,index)=>(
          <Link href={`/books/${item.name}/menu`} key={item.id} className='bg-white uppercase font-bold text-[20px] flex items-center justify-center h-[420px] cursor-pointer hover:scale-[1.02] transition-all duration-300'>
            {item.name}
          </Link>
        ))
      }
    </div>
  )
}
