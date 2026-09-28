// All site copy, per language. `**text**` marks bold (see rich.tsx).
// Titles are [plain, highlighted] pairs; the second part gets the gradient.

export type Lang = "pt" | "en";

type Pair = readonly [string, string];

export interface Dict {
  meta: {
    htmlLang: string;
    ogLocale: string;
    path: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    twitterDescription: string;
    appDescription: string;
  };
  a11y: { skip: string; home: string; sections: string; footer: string; language: string };
  nav: { how: string; features: string; security: string; faq: string; download: string };
  downloadFor: string;
  downloads: { one: string; many: string };
  hero: {
    badge: string;
    title: Pair;
    lead: string;
    fine: string;
    demoLabel: string;
    macName: string;
    otherMac: string;
    tags: readonly [string, string, string];
  };
  principles: { label: string; items: readonly string[]; stats: readonly { value: string; label: string }[] };
  how: { eyebrow: string; title: Pair; lead: string; steps: readonly { title: string; text: string }[] };
  features: {
    eyebrow: string;
    title: Pair;
    lead: string;
    items: readonly { title: string; text: string }[];
  };
  security: {
    eyebrow: string;
    title: Pair;
    lead: string;
    codeLabel: string;
    yourMac: string;
    colleaguePc: string;
    codeNote: string;
    points: readonly (readonly [string, string])[];
  };
  download: {
    eyebrow: string;
    title: string;
    lead: string;
    macReq: string;
    winReq: string;
    macButton: string;
    winButton: string;
    firstLaunch: string;
    macSteps: readonly string[];
    winSteps: readonly string[];
    fine: string;
  };
  faq: { eyebrow: string; title: string; items: readonly { q: string; a: string }[] };
  final: { title: Pair; lead: string };
  footer: { product: string };
}

const pt: Dict = {
  meta: {
    htmlLang: "pt",
    ogLocale: "pt_PT",
    path: "/",
    title: "Army · Partilha de ecrã instantânea entre Mac e Windows | Expressers",
    description:
      "Army partilha o ecrã do teu Mac ou PC Windows com o computador ao lado em segundos, pela rede local. Grátis, encriptado de ponta a ponta, sem contas, sem nuvem e sem internet.",
    ogTitle: "Army · Partilha o teu ecrã. Em segundos.",
    ogDescription:
      "Abre o Army, escolhe o computador ao lado e o teu ecrã aparece. Mac e Windows, pela rede local, sem contas nem nuvem.",
    ogImageAlt: "Army: partilha o teu ecrã em segundos. Mac e Windows, rede local, encriptado, sem contas.",
    twitterDescription: "Partilha de ecrã instantânea entre Mac e Windows na rede local. Grátis, encriptada, sem contas.",
    appDescription:
      "Partilha de ecrã instantânea entre Mac e Windows na mesma rede local. Encriptada de ponta a ponta, sem contas e sem servidores.",
  },
  a11y: {
    skip: "Saltar para o conteúdo",
    home: "Army, início",
    sections: "Secções",
    footer: "Rodapé",
    language: "Idioma",
  },
  nav: { how: "Como funciona", features: "Funcionalidades", security: "Segurança", faq: "FAQ", download: "Descarregar" },
  downloadFor: "Descarregar para",
  downloads: { one: "download", many: "downloads" },
  hero: {
    badge: "Versão {version} disponível para Mac e Windows",
    title: ["Partilha o teu ecrã.", "Em segundos."],
    lead: "O Army liga o teu computador ao que está ao lado, Mac ou Windows, e mostra o teu ecrã directamente pela rede local. Sem contas. Sem nuvem. Sem links de convite.",
    fine: "Grátis · macOS 12.3+ · Windows 10 e 11 · ~5 MB",
    demoLabel: "Ilustração: um Mac pede para partilhar o ecrã com um PC Windows, que aceita",
    macName: "iMac do Eládio",
    otherMac: "MacBook da Ana",
    tags: ["Rede local", "Noise · ChaCha20-Poly1305", "H.264 · até 1080p30"],
  },
  principles: {
    label: "Princípios",
    items: ["Sem contas", "Sem nuvem", "Sem servidores", "Sem links de convite", "Sem telemetria", "Sem anúncios"],
    stats: [
      { value: "~5 MB", label: "app nativa, sem Electron" },
      { value: "0", label: "servidores pelo meio" },
      { value: "1080p", label: "a 30 fps, H.264" },
      { value: "E2E", label: "encriptação Noise" },
    ],
  },
  how: {
    eyebrow: "Como funciona",
    title: ["Três passos.", "Zero explicações."],
    lead: "A experiência de um AirDrop, mas para o ecrã inteiro.",
    steps: [
      {
        title: "Abre o Army",
        text: "Os computadores próximos com o Army aberto aparecem sozinhos. Nada para configurar, nenhum código para trocar.",
      },
      {
        title: "Escolhe o dispositivo",
        text: "Clica no computador com quem queres partilhar e depois em Share Screen. Um só botão.",
      },
      {
        title: "O outro aceita",
        text: "A pessoa do outro lado aceita e o teu ecrã aparece. Qualquer um pode terminar quando quiser.",
      },
    ],
  },
  features: {
    eyebrow: "Funcionalidades",
    title: ["Simples por fora.", "Sério por dentro."],
    lead: "Não é mais uma plataforma de reuniões. É uma ferramenta rápida que faz uma coisa, e faz bem.",
    items: [
      {
        title: "Local-first, por desenho",
        text: "Descoberta automática por mDNS e vídeo directo de um computador para o outro. Nada passa por servidores, nem sequer precisas de internet.",
      },
      { title: "Encriptado ponta a ponta", text: "Cada sessão é cifrada e autenticada com chaves novas." },
      { title: "Baixa latência", text: "Captura nativa e H.264 com aceleração por hardware no Mac." },
      { title: "Mac ⇄ Windows", text: "Nos dois sentidos, com a mesma experiência dos dois lados." },
      { title: "Sem contas", text: "Sem registo, sem login, sem salas nem links de convite." },
      { title: "Tu decides", text: "Nada começa sem aceitação, e qualquer lado pode terminar a qualquer momento." },
      {
        title: "Leve como uma ferramenta do sistema",
        text: "Cerca de 5 MB, construído em Rust. Abre num instante, fica discreto na barra de menus e não corre nada pesado enquanto não estás a partilhar.",
      },
    ],
  },
  security: {
    eyebrow: "Segurança",
    title: ["Rede local", "não é rede de confiança."],
    lead: "Por isso o Army trata cada ligação como se estivesse numa rede pública.",
    codeLabel: "Exemplo: o mesmo código nos dois computadores",
    yourMac: "No teu Mac",
    colleaguePc: "No PC do colega",
    codeNote: "Os dois ecrãs mostram o mesmo código de verificação. Se coincidem, ninguém está no meio.",
    points: [
      ["Aceitação explícita", "O ecrã nunca é partilhado em silêncio. Nada é capturado antes de o outro lado aceitar."],
      ["Encriptação moderna", "Protocolo Noise (Curve25519, ChaCha20-Poly1305), com chaves novas em cada sessão."],
      ["Identidade verificada", "Cada dispositivo tem a sua chave; o Army confirma que falas com quem escolheste."],
      ["Zero dados", "Sem servidores, contas, analytics ou rastreio. O que acontece na tua rede fica na tua rede."],
    ],
  },
  download: {
    eyebrow: "Descarregar",
    title: "Instala nos dois computadores.",
    lead: "Ambos têm de estar na mesma rede. É só isso.",
    macReq: "macOS 12.3+ · Intel e Apple Silicon",
    winReq: "Windows 10 (1903+) e 11 · 64 bits",
    macButton: "Descarregar .dmg",
    winButton: "Descarregar instalador",
    firstLaunch: "Primeira abertura",
    macSteps: [
      "Abre o .dmg e arrasta o Army para Aplicações.",
      "Na primeira vez, clica com o botão direito no Army › **Abrir** (ainda não está assinado pela Apple).",
      "Permite o acesso à **Rede local** quando o macOS pedir.",
      "Para partilhar, activa o Army em Privacidade e Segurança › **Gravação de ecrã** e reabre a app.",
    ],
    winSteps: [
      "Executa o instalador.",
      "Se o SmartScreen avisar: **Mais informações** › **Executar mesmo assim** (ainda não está assinado).",
      "Permite o Army na Firewall em redes **privadas**.",
    ],
    fine: "Versão {version} · Grátis, sem contas nem anúncios",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes",
    items: [
      {
        q: "Preciso de internet?",
        a: "Não. Basta que os dois computadores estejam ligados à mesma rede (Wi-Fi ou cabo). O vídeo nunca sai dessa rede.",
      },
      {
        q: "Funciona entre casas ou escritórios diferentes?",
        a: "Não, e é de propósito. O Army é para computadores próximos, na mesma rede local. Redes de convidados que isolam os dispositivos também impedem que se encontrem.",
      },
      {
        q: "Posso controlar o outro computador?",
        a: "Não. O Army só mostra o ecrã. Não há controlo remoto, transferência de ficheiros, chat, áudio nem gravação.",
      },
      {
        q: "O ecrã pode ser partilhado sem eu saber?",
        a: "Não. Quem recebe tem de aceitar cada pedido, e quem partilha vê sempre que está a partilhar e pode parar a qualquer momento.",
      },
      {
        q: "O outro computador não aparece. E agora?",
        a: "Confirma que o Army está aberto nos dois, que estão na mesma rede, e que permitiste o acesso à rede local (macOS) e à firewall em redes privadas (Windows).",
      },
      {
        q: "Porque é que o sistema mostra um aviso ao instalar?",
        a: "Esta primeira versão ainda não está assinada com certificados da Apple e da Microsoft, por isso o sistema não reconhece o editor. A assinatura oficial chega numa próxima versão.",
      },
      { q: "É grátis?", a: "Sim. Sem contas, sem subscrições e sem anúncios." },
    ],
  },
  final: {
    title: ["O ecrã ao lado está", "a um clique."],
    lead: "Descarrega o Army, abre nos dois computadores e experimenta.",
  },
  footer: { product: "Um produto" },
};

const en: Dict = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    path: "/en/",
    title: "Army · Instant screen sharing between Mac and Windows | Expressers",
    description:
      "Army shares your Mac or Windows PC screen with the computer next to you in seconds, over your local network. Free, end-to-end encrypted, no accounts, no cloud, no internet needed.",
    ogTitle: "Army · Share your screen. In seconds.",
    ogDescription:
      "Open Army, pick the computer next to you, and your screen appears. Mac and Windows, over your local network, with no accounts or cloud.",
    ogImageAlt: "Army: share your screen in seconds. Mac and Windows, local network, encrypted, no accounts.",
    twitterDescription: "Instant screen sharing between Mac and Windows on your local network. Free, encrypted, no accounts.",
    appDescription:
      "Instant screen sharing between Mac and Windows on the same local network. End-to-end encrypted, no accounts and no servers.",
  },
  a11y: { skip: "Skip to content", home: "Army, home", sections: "Sections", footer: "Footer", language: "Language" },
  nav: { how: "How it works", features: "Features", security: "Security", faq: "FAQ", download: "Download" },
  downloadFor: "Download for",
  downloads: { one: "download", many: "downloads" },
  hero: {
    badge: "Version {version} available for Mac and Windows",
    title: ["Share your screen.", "In seconds."],
    lead: "Army connects your computer to the one next to it, Mac or Windows, and shows your screen straight over the local network. No accounts. No cloud. No invite links.",
    fine: "Free · macOS 12.3+ · Windows 10 and 11 · ~5 MB",
    demoLabel: "Illustration: a Mac asks to share its screen with a Windows PC, which accepts",
    macName: "Eladio's iMac",
    otherMac: "Ana's MacBook",
    tags: ["Local network", "Noise · ChaCha20-Poly1305", "H.264 · up to 1080p30"],
  },
  principles: {
    label: "Principles",
    items: ["No accounts", "No cloud", "No servers", "No invite links", "No telemetry", "No ads"],
    stats: [
      { value: "~5 MB", label: "native app, no Electron" },
      { value: "0", label: "servers in between" },
      { value: "1080p", label: "at 30 fps, H.264" },
      { value: "E2E", label: "Noise encryption" },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: ["Three steps.", "Zero explanations."],
    lead: "The AirDrop experience, for your whole screen.",
    steps: [
      {
        title: "Open Army",
        text: "Nearby computers running Army show up on their own. Nothing to set up, no codes to exchange.",
      },
      {
        title: "Pick the device",
        text: "Click the computer you want to share with, then Share Screen. One button.",
      },
      {
        title: "They accept",
        text: "The other person accepts and your screen appears. Either side can end it whenever they want.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    title: ["Simple on the outside.", "Serious on the inside."],
    lead: "Not another meeting platform. A fast tool that does one thing, and does it well.",
    items: [
      {
        title: "Local-first by design",
        text: "Automatic discovery over mDNS and video sent straight from one computer to the other. Nothing goes through servers, you don't even need internet.",
      },
      { title: "End-to-end encrypted", text: "Every session is encrypted and authenticated with fresh keys." },
      { title: "Low latency", text: "Native capture and hardware-accelerated H.264 on Mac." },
      { title: "Mac ⇄ Windows", text: "Both directions, with the same experience on both sides." },
      { title: "No accounts", text: "No sign-up, no login, no rooms, no invite links." },
      { title: "You're in control", text: "Nothing starts without acceptance, and either side can stop at any time." },
      {
        title: "Light as a system utility",
        text: "About 5 MB, built in Rust. Opens instantly, sits quietly in the menu bar and runs nothing heavy while you're not sharing.",
      },
    ],
  },
  security: {
    eyebrow: "Security",
    title: ["A local network", "is not a trusted network."],
    lead: "That's why Army treats every connection as if it were on a public network.",
    codeLabel: "Example: the same code on both computers",
    yourMac: "On your Mac",
    colleaguePc: "On your colleague's PC",
    codeNote: "Both screens show the same verification code. If they match, nobody is in the middle.",
    points: [
      ["Explicit acceptance", "Your screen is never shared silently. Nothing is captured before the other side accepts."],
      ["Modern encryption", "Noise protocol (Curve25519, ChaCha20-Poly1305), with fresh keys every session."],
      ["Verified identity", "Every device has its own key; Army confirms you're talking to the one you picked."],
      ["Zero data", "No servers, accounts, analytics or tracking. What happens on your network stays on your network."],
    ],
  },
  download: {
    eyebrow: "Download",
    title: "Install it on both computers.",
    lead: "Both need to be on the same network. That's it.",
    macReq: "macOS 12.3+ · Intel and Apple Silicon",
    winReq: "Windows 10 (1903+) and 11 · 64-bit",
    macButton: "Download .dmg",
    winButton: "Download installer",
    firstLaunch: "First launch",
    macSteps: [
      "Open the .dmg and drag Army to Applications.",
      "The first time, right-click Army › **Open** (it isn't signed by Apple yet).",
      "Allow **Local Network** access when macOS asks.",
      "To share, enable Army in Privacy & Security › **Screen Recording** and reopen the app.",
    ],
    winSteps: [
      "Run the installer.",
      "If SmartScreen warns you: **More info** › **Run anyway** (it isn't signed yet).",
      "Allow Army through the Firewall on **private** networks.",
    ],
    fine: "Version {version} · Free, no accounts, no ads",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Do I need internet?",
        a: "No. Both computers just need to be on the same network (Wi-Fi or cable). The video never leaves that network.",
      },
      {
        q: "Does it work between different homes or offices?",
        a: "No, on purpose. Army is for nearby computers on the same local network. Guest networks that isolate devices also stop them from finding each other.",
      },
      {
        q: "Can I control the other computer?",
        a: "No. Army only shows the screen. There's no remote control, file transfer, chat, audio or recording.",
      },
      {
        q: "Can my screen be shared without me knowing?",
        a: "No. The receiver has to accept every request, and the sharer always sees that they're sharing and can stop at any moment.",
      },
      {
        q: "The other computer doesn't show up. What now?",
        a: "Check that Army is open on both, that they're on the same network, and that you allowed local network access (macOS) and the firewall on private networks (Windows).",
      },
      {
        q: "Why does my system show a warning when installing?",
        a: "This first version isn't signed with Apple and Microsoft certificates yet, so the system doesn't recognise the publisher. Official signing is coming in a future version.",
      },
      { q: "Is it free?", a: "Yes. No accounts, no subscriptions and no ads." },
    ],
  },
  final: {
    title: ["The screen next to you is", "one click away."],
    lead: "Download Army, open it on both computers and try it.",
  },
  footer: { product: "A product by" },
};

export const DICTS: Record<Lang, Dict> = { pt, en };
export const LANGS: readonly Lang[] = ["pt", "en"];
