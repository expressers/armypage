import { LanguageSwitch } from "../components/LanguageSwitch";
import { Logo } from "../components/Logo";
import { useT } from "../i18n/context";

export function Header() {
  const t = useT();
  return (
    <header className="header">
      <div className="nav-pill">
        <a className="brand" href="#top" aria-label={t.a11y.home}>
          <Logo size={24} />
          <span>Army</span>
        </a>
        <nav aria-label={t.a11y.sections}>
          <a href="#como-funciona">{t.nav.how}</a>
          <a href="#funcionalidades">{t.nav.features}</a>
          <a href="#seguranca">{t.nav.security}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <div className="nav-right">
          <LanguageSwitch />
          <a href="#descarregar" className="btn btn-primary btn-sm">
            {t.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}
