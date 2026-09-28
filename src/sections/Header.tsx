import { Logo } from "../components/Logo";

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
          <a href="#descarregar" className="btn btn-primary btn-sm">
            Descarregar
          </a>
        </div>
      </div>
    </header>
  );
}
