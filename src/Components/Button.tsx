import React, { FC } from 'react'

interface ButtonProps {
    icon:React.ReactNode
}

export const Button:FC<ButtonProps> = ({icon}):JSX.Element => {



  return (
    <button className='m-2 hover:scale-[1.1] transition-all duration-300 shadow-md p-2 text-lg rounded-md bg-slate-400 text-white'>{icon}</button>
  )
}
