import { HomeButton } from "@/Components/HomeButton";
import { LinkCp } from "@/Components/LinkCp";
import { books } from "@/data/books";
import Link from "next/link";
import React from "react";

export default function Pages() {
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
