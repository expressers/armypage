import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="brand small">
          <Logo size={20} />
          Army
        </span>
        <span className="muted">
          Um produto <a href="https://expressers.ao">Expressers</a>
        </span>
        <nav aria-label="Rodapé">
          <a href="#descarregar">Descarregar</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}
