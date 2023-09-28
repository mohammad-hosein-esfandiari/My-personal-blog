
import { HomeButton } from "@/Components/HomeButton";
import { LinkCp } from "@/Components/LinkCp";
import { books } from "@/data/books";
import { useTranslations } from "next-intl";

export default function Pages() {
  const t = useTranslations('Books')
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
