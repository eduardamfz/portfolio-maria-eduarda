

export const profile = {
  name: "Maria Eduarda Fernandes",
  firstName: "Maria Eduarda",
  roles: ["Estudante de Sistemas para Internet", "Dev Front-end em formação", "Técnica em Desenvolvimento de Sistemas"],
  age: 20,
  city: "Recife - PE",
  emails: ["eduardam.fs54@gmail.com", "eduardamf.dev@gmail.com"],
  phone: "(81) 98444-2218",
  phoneLink: "5581984442218",

  github: process.env.NEXT_PUBLIC_GITHUB_USER || "eduardamfz",
  linkedin: "eduardamfz",
  about: [
    "Tenho 20 anos e sou estudante de Sistemas para Internet, com formação técnica em Desenvolvimento de Sistemas. Desde pequena tenho interesse pela área de tecnologia, o que me motivou a seguir essa área nos estudos.",
    "Possuo experiência na área administrativa como jovem aprendiz, onde desenvolvi organização, responsabilidade e rotina profissional.",
    "Atualmente, busco minha primeira oportunidade na área de tecnologia para aplicar meus conhecimentos, aprender na prática e continuar construindo minha trajetória profissional em TI.",
  ],
};

export const education = [
  {
    title: "Graduação em Sistemas para Internet",
    place: "Universidade Católica de Pernambuco (UNICAP)",
    period: "2025 – atualmente",
    detail: "3º de 5 períodos · Previsão de formatura: Dez/2027",
    status: "Em andamento",
  },
  {
    title: "Ensino Médio Técnico em Desenvolvimento de Sistemas",
    place: "Escola Técnica Estadual Ginásio Pernambucano",
    period: "Conclusão: 2023",
    detail: "Formação técnica integrada ao ensino médio.",
    status: "Concluído",
  },
];

export const courses = [
  { title: "Introdução a HTML, CSS e JavaScript", place: "Fundação Bradesco" },
  { title: "Introdução ao Power BI", place: "Fundação Bradesco" },
];

export const experience = [
  {
    role: "Jovem Aprendiz Administrativo",
    company: "PanCristal LTDA",
    period: "Março/2024 – Janeiro/2026",
    bullets: [
      "Atendimento telefônico a clientes e fornecedores",
      "Direcionamento de demandas para os setores corretos",
      "Organização e arquivamento de documentos",
      "Apoio às rotinas administrativas",
      "Cumprimento de prazos e organização de informações",
    ],
  },
];

export const skills = {
  tools: [
    { name: "HTML, CSS, JavaScript", level: 40 },
    { name: "Java", level: 30 },
    { name: "Figma", level: 30 },
    { name: "Power BI", level: 30 },
    { name: "Pacote Office", level: 70 },
    { name: "Trello", level: 70 },
  ],
  soft: [
    "Facilidade para aprender novas tecnologias e softwares",
    "Boa comunicação verbal e escrita",
    "Organização, responsabilidade e comprometimento com prazos",
    "Espírito de equipe e adaptação a novos ambientes",
    "Atendimento interno e organização de documentos",
  ],
};

// Tecnologias e módulos usados para desenvolver ESTE site (página Sobre)
export const stack = [
  { name: "Next.js 15", type: "Framework", desc: "App Router, rotas por pastas, layouts e metadata (SEO)." },
  { name: "React 19", type: "Biblioteca", desc: "Componentes, hooks (useState, useEffect) e Client Components." },
  { name: "next/link", type: "Módulo", desc: "Navegação entre páginas sem recarregar a aplicação." },
  { name: "next/navigation", type: "Módulo", desc: "usePathname para destacar o link ativo no menu." },
  { name: "Google Fonts", type: "Fontes", desc: "Tipografia Space Grotesk (títulos) e Inter (texto)." },
  { name: "next/metadata", type: "Módulo", desc: "Título e descrição de cada página para SEO." },
  { name: "CSS puro", type: "Estilo", desc: "Variáveis CSS, Grid, Flexbox, glassmorphism, animações e tema claro/escuro." },
  { name: "GitHub REST API", type: "API", desc: "Lista meus repositórios reais na página de Projetos." },
  { name: "Open-Meteo API", type: "API", desc: "Clima atual do Recife exibido na Home, sem necessidade de chave." },
  { name: "localStorage", type: "Web API", desc: "Guarda a escolha de tema claro/escuro do visitante." },
  { name: "Git & GitHub", type: "Ferramenta", desc: "Controle de versão e hospedagem do código." },
  { name: "Vercel", type: "Deploy", desc: "Publicação e deploy contínuo do site." },
  { name: "Node.js & npm", type: "Ambiente", desc: "Ambiente de execução e gerenciador de pacotes." },
];
