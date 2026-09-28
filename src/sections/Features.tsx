import type { ReactNode } from "react";
import { SectionHead } from "../components/SectionHead";
import { Spotlight } from "../components/Spotlight";

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const FEATURES: { icon: ReactNode; title: string; text: string; wide?: boolean }[] = [
  {
    wide: true,
    icon: icon(<><path d="M5 12.5a10 10 0 0 1 14 0" /><path d="M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.5" r="1" /><path d="M1.5 9a15 15 0 0 1 21 0" /></>),
    title: "Local-first, por desenho",
    text: "Descoberta automática por mDNS e vídeo directo de um computador para o outro. Nada passa por servidores, nem sequer precisas de internet.",
  },
  {
    icon: icon(<><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>),
    title: "Encriptado ponta a ponta",
    text: "Cada sessão é cifrada e autenticada com chaves novas.",
  },
  {
    icon: icon(<path d="M13 2L4 14h7l-1 8 9-12h-7z" />),
    title: "Baixa latência",
    text: "Captura nativa e H.264 com aceleração por hardware no Mac.",
  },
  {
    icon: icon(<><path d="M4 8h14l-3-3" /><path d="M20 16H6l3 3" /></>),
    title: "Mac ⇄ Windows",
    text: "Nos dois sentidos, com a mesma experiência dos dois lados.",
  },
  {
    icon: icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /><path d="M3 3l18 18" /></>),
    title: "Sem contas",
    text: "Sem registo, sem login, sem salas nem links de convite.",
  },
  {
    icon: icon(<><path d="M20 6L9 17l-5-5" /></>),
    title: "Tu decides",
    text: "Nada começa sem aceitação, e qualquer lado pode terminar a qualquer momento.",
  },
  {
    wide: true,
    icon: icon(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.5" /></>),
    title: "Leve como uma ferramenta do sistema",
    text: "Cerca de 5 MB, construído em Rust. Abre num instante, fica discreto na barra de menus e não corre nada pesado enquanto não estás a partilhar.",
  },
];

export function Features() {
  return (
    <section className="section" id="funcionalidades" aria-labelledby="features-title">
      <div className="container">
        <SectionHead
          id="features-title"
          eyebrow="Funcionalidades"
          title={
            <>
              Simples por fora. <span className="gradient-text">Sério por dentro.</span>
            </>
          }
          lead="Não é mais uma plataforma de reuniões. É uma ferramenta rápida que faz uma coisa, e faz bem."
        />
        <Spotlight className="bento">
          {FEATURES.map((f) => (
            <article key={f.title} className={f.wide ? "glass card wide" : "glass card"}>
              <span className="card-icon" aria-hidden="true">
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
