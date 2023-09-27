'use client'
import { HomeButton } from "@/Components/HomeButton";
import { LinkCp } from "@/Components/LinkCp";
import { books } from "@/data/books";
import { useLang } from "@/store/lang";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Pages() {
const lang = useLang(state=>state.langObj)
  useEffect(()=>{

  },[lang])
  return (
    <div className="grid grid-cols-4 gap-10 w-full p-10">
      {books.map((item, index) => (
        <LinkCp
          link={`/books/${item.name}?headline=${item.headlines[0].headline}&paper=1`}
          {...item}
          key={item.id}
        />
      ))}
      <HomeButton/>
    </div>
  );
}
