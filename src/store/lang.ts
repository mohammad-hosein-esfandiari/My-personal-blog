import { LangEnum, english, persian } from "@/lang/lang";
import { create } from "zustand";

interface BearState {
  lang: LangEnum;
  langObj: any;
  changeLang: (lang: any) => void;
}

export const useLang = create<BearState>()((set) => ({
  lang: LangEnum.EN,
  langObj: english,
  changeLang: (i) =>
    set((state) => {
      const lang = i === LangEnum.EN ? english : persian;
      console.log(lang)
      return {
        langObj: lang,
        lang: i,
      };
    }),
}));
