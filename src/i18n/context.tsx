import { createContext, useContext, type ReactNode } from "react";
import { DICTS, type Dict, type Lang } from "./dict";

const LangContext = createContext<Lang>("pt");

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang(): Lang {
  return useContext(LangContext);
}

export function useT(): Dict {
  return DICTS[useContext(LangContext)];
}

/** Language of the current URL: /en/... is English, everything else Portuguese. */
export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}
