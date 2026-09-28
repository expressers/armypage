import { LangProvider } from "./i18n/context";
import type { Lang } from "./i18n/dict";
import { DICTS } from "./i18n/dict";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Principles } from "./sections/Principles";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { Security } from "./sections/Security";
import { Download } from "./sections/Download";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./sections/Footer";

export function App({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <div className="backdrop" aria-hidden="true">
        <div className="aurora" />
        <div className="gridlines" />
      </div>
      <a className="skip" href="#main">
        {DICTS[lang].a11y.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Principles />
        <HowItWorks />
        <Features />
        <Security />
        <Download />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </LangProvider>
  );
}
