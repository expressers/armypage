import type { ReactNode } from "react";

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const FEATURES: { icon: ReactNode; title: string; text: string }[] = [
  {
    icon: icon(<><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></>),
    title: "Fica na tua rede",
    text: "O vídeo vai directamente de um computador para o outro. Não passa por nenhum servidor, nem precisa de internet.",
  },
  {
    icon: icon(<><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>),
    title: "Encriptado de ponta a ponta",
    text: "Cada sessão é cifrada e autenticada. Nada é capturado nem enviado antes de o outro lado aceitar.",
  },
  {
    icon: icon(<path d="M13 2L4 14h7l-1 8 9-12h-7z" />),
    title: "Rápido de verdade",
    text: "Captura e codificação nativas (H.264 com aceleração por hardware no Mac), até 1080p a 30 fps, pensadas para baixa latência.",
  },
  {
    icon: icon(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.5" /></>),
    title: "Leve",
    text: "Cerca de 5 MB. Sem Electron, sem processos pesados em fundo. Abre num instante e fica discreto na barra de menus.",
  },
  {
    icon: icon(<><path d="M4 8h14l-3-3" /><path d="M20 16H6l3 3" /></>),
    title: "Mac ⇄ Windows",
    text: "Do Mac para o PC, do PC para o Mac, ou entre dois iguais. A mesma experiência dos dois lados.",
  },
  {
    icon: icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /><path d="M3 3l18 18" /></>),
    title: "Sem contas",
    text: "Sem registo, sem login, sem salas, sem links de convite. Sem telemetria nem rastreio.",
  },
];

export function Features() {
  return (
    <section className="section section-alt" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title">Feito para ser simples — e rápido.</h2>
        <p className="section-lead">
          Pensa no Army como um AirDrop, mas para o ecrã: uma pequena ferramenta do sistema, não mais uma plataforma de
          reuniões.
        </p>
        <div className="grid">
          {FEATURES.map((f) => (
            <article key={f.title} className="card">
              <span className="card-icon" aria-hidden="true">
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
