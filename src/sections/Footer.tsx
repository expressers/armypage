import { LanguageSwitch } from "../components/LanguageSwitch";
import { Logo } from "../components/Logo";
import { useT } from "../i18n/context";

export function Footer() {
  const t = useT();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand small">
          <Logo size={20} />
          Army
        </span>
        <span className="muted">
          {t.footer.product} <a href="https://expressers.ao">Expressers</a>
        </span>
        <nav aria-label={t.a11y.footer}>
          <a href="#descarregar">{t.nav.download}</a>
          <a href="#faq">{t.nav.faq}</a>
          <LanguageSwitch />
        </nav>
      </div>
    </footer>
  );
}
