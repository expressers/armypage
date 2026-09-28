import { Logo } from "../components/Logo";
import { REPO } from "../links";

export function Header() {
  return (
    <header className="header">
      <div className="nav-pill">
        <a className="brand" href="#top" aria-label="Army, início">
          <Logo size={24} />
          <span>Army</span>
        </a>
        <nav aria-label="Secções">
          <a href="#como-funciona">Como funciona</a>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#seguranca">Segurança</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-right">
          <a href={REPO} className="nav-gh" aria-label="Código no GitHub">
            <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true">
              <path
                fill="currentColor"
                d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.6 3.9.3.3.5.8.5 1.5v2.2c0 .2.1.5.6.4A8 8 0 0 0 8 0z"
              />
            </svg>
          </a>
          <a href="#descarregar" className="btn btn-primary btn-sm">
            Descarregar
          </a>
        </div>
      </div>
    </header>
  );
}
