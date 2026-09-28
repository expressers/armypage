import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Features } from "./sections/Features";
import { Security } from "./sections/Security";
import { Faq } from "./sections/Faq";
import { Download } from "./sections/Download";
import { Footer } from "./sections/Footer";

export function App() {
  return (
    <>
      <a className="skip" href="#main">
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Features />
        <Security />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
