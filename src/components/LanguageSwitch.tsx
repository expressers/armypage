import { DICTS, LANGS, type Lang } from "../i18n/dict";
import { useLang, useT } from "../i18n/context";
import { Flag } from "./Flag";

export const LANG_KEY = "army.lang";

/** PT / EN links to the equivalent page; the choice is remembered for next visits. */
export function LanguageSwitch() {
  const current = useLang();
  const t = useT();
  const remember = (lang: Lang) => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // Storage unavailable (private mode): the link still works.
    }
  };

  return (
    <div className="lang" role="group" aria-label={t.a11y.language}>
      {LANGS.map((lang) => (
        <a
          key={lang}
          href={DICTS[lang].meta.path}
          hrefLang={DICTS[lang].meta.htmlLang}
          lang={DICTS[lang].meta.htmlLang}
          className={lang === current ? "lang-opt active" : "lang-opt"}
          aria-current={lang === current ? "page" : undefined}
          onClick={() => remember(lang)}
        >
          <Flag lang={lang} />
          <span>{lang.toUpperCase()}</span>
        </a>
      ))}
    </div>
  );
}
