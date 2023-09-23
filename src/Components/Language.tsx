"use client";
import { LangEnum } from "@/lang/lang";
import { useLang } from "@/store/lang";
import { useRouter } from "next/navigation";
import React from "react";

export const Language = () => {
  const setLang = useLang.getState().changeLang;
  return (
    <div className="fixed border-[1px] border-[#a8a8a845]  right-5 bottom-5">
      <ul className=" w-full h-full text-white flex">
        <li onClick={() => setLang(LangEnum.EN)} className="p-2 cursor-pointer">
          English
        </li>
        <li onClick={() => setLang(LangEnum.PR)} className="p-2 cursor-pointer">
          فارسی
        </li>
      </ul>
    </div>
  );
};
