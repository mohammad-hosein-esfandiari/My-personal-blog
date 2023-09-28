"use client";
import { LangEnum } from "@/lang/lang";
import LinkWithRef from "next-intl/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export const Language = () => {
  const path = usePathname();
  const urlMaker = (path:string)=>{
    let url =path
    if(path.includes('fa') || path.includes('en')){
      url ='/'+ path.split('/').slice(2).join('/')
    }
    return url
  }
  const url = urlMaker(path)
  return (
    <div
      dir="ltr"
      className="fixed rounded-md overflow-hidden border-[1px] border-[#a8a8a845]  right-5 bottom-5">
      <ul className=" w-full h-full text-white flex">
        <LinkWithRef
          href={url}
          locale="en"
          className={`p-2 w-[80px] text-center  cursor-pointer`}>
          English
        </LinkWithRef>
        <LinkWithRef
          href={url}
          locale="fa"
          className={`p-2 w-[80px]  text-center transition-all duration-1000 persian cursor-pointer`}>
          فارسی
        </LinkWithRef>
      </ul>
    </div>
  );
};
