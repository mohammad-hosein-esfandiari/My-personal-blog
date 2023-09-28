
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Index() {
  const t = useTranslations('Home');
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <h1 className=" border-[1px] mb-8 animate- border-[#a8a8a845] rounded-md text-8xl p-10 font-bold text-white">
          {t('welcome')}
          <span className="animate-pulse inline-block bg-[#a8a8a845] duration-1000 text-yellow-600 px-4 py-2 mx-2 rounded-md">
            {t('notebook')}
          </span>
        </h1>
        <Link
          href={`/books`}
          className="border-[1px] hover:bg-[#a8a8a845] transition-all duration-300 p-4 border-[#a8a8a845] rounded-md text-blue-500">
          {t('allNotebook')}
        </Link>
      </div>
    </div>
  );
}
