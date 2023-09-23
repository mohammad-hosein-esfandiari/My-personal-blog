"use client";
import { LangEnum } from "@/lang/lang";
import { useLang } from "@/store/lang";
import { useRouter } from "next/navigation";
import React from "react";

export const Language = () => {
  const setLang = useLang(state=>state.changeLang);
  const lang = useLang(state=>state.lang);
  return (
    <div className="fixed border-[1px] border-[#a8a8a845]  right-5 bottom-5">
      <ul className=" w-full h-full text-white flex">
        <li onClick={() => setLang(LangEnum.EN)} className={`p-2 w-[80px] text-center  ${lang === LangEnum.EN ? "bg-[#a8a8a845]" : "text-[#777]"} cursor-pointer`}>
          English
        </li>
        <li onClick={() => setLang(LangEnum.PR)} className={`p-2 w-[80px] ${lang === LangEnum.PR ? "bg-[#a8a8a845]" : "text-[#777]"} text-center transition-all duration-1000 persian cursor-pointer`}>
          فارسی
        </li>
      </ul>
    </div>
  );
};
