export type CaseSection = {
  title: string;
  text: string;
  bullets?: string[];
};

export type PortfolioCase = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  quick: {
    problem: string;
    role: string;
    process: string;
    result: string;
  };
  tags: string[];
  visual: "dimo" | "consignado" | "caf" | "data" | "dirige";
  nda?: boolean;
  sections: CaseSection[];
};

export const cases: PortfolioCase[] = [
  {
    slug: "dimo-produto-financeiro",
    index: "01",
    title: "Dimo — produto financeiro mobile",
    eyebrow: "Produto • Fintech • Mobile",
    summary:
      "Evolução de experiências financeiras dentro da carteira digital da Motorola, conectando necessidades do usuário, regras de negócio e viabilidade de produto.",
    quick: {
      problem:
        "Simplificar jornadas financeiras complexas sem perder clareza, segurança e contexto para o usuário.",
      role:
        "Product Designer Pleno, atuando em descoberta, fluxos, UI, escrita e alinhamento com produto e tecnologia.",
      process:
        "Mapeamento de jornada, análise de problemas, benchmarks, hipóteses, prototipação e refinamento com stakeholders.",
      result:
        "Uma base mais consistente para evoluir jornadas de conta, crédito, pagamentos e segurança.",
    },
    tags: ["Product Design", "Mobile", "Fintech", "UX Strategy"],
    visual: "dimo",
    nda: true,
    sections: [
      {
        title: "Contexto",
        text:
          "A Dimo é uma carteira digital da Motorola. Meu trabalho acontece em jornadas que misturam produto financeiro, comportamento do usuário, restrições técnicas e exigências de segurança.",
      },
      {
        title: "O desafio",
        text:
          "Em produtos financeiros, uma tela raramente existe sozinha. Cada decisão precisa considerar entendimento, confiança, regras de negócio, estados de erro e continuidade da jornada.",
      },
      {
        title: "Como trabalho",
        text:
          "Minha atuação combina leitura de contexto, investigação do problema e construção visual. O objetivo é reduzir complexidade sem esconder informação importante.",
        bullets: [
          "Mapeamento de fluxos e estados críticos",
          "Análise de dados e evidências disponíveis",
          "Benchmarks e referências de mercado",
          "Prototipação e refinamento de interface",
          "Alinhamento com produto, negócio e tecnologia",
        ],
      },
      {
        title: "Aprendizado",
        text:
          "Design financeiro exige mais do que deixar a interface bonita: é preciso transformar regras difíceis em decisões que o usuário consiga entender e tomar com segurança.",
      },
    ],
  },
  {
    slug: "consignado-clt",
    index: "02",
    title: "Consignado CLT — reduzindo fricção na contratação",
    eyebrow: "Crédito • Pesquisa • Conversão",
    summary:
      "Investigação da jornada pós-oferta para entender abandono, percepção de valor, confiança e barreiras de contratação.",
    quick: {
      problem:
        "Poucos usuários avançavam da simulação até a contratação, exigindo entender onde a proposta perdia força.",
      role:
        "Product Designer responsável por pesquisa, leitura do funil, hipóteses e evolução da experiência.",
      process:
        "Análise de funil, benchmark, conversas com stakeholders e desenho de pesquisas quantitativas e abertas.",
      result:
        "Estrutura de investigação mais clara para separar problemas de oferta, comunicação, confiança e intenção de contratação.",
    },
    tags: ["UX Research", "Crédito", "Funil", "Product Discovery"],
    visual: "consignado",
    nda: true,
    sections: [
      {
        title: "Contexto",
        text:
          "O desafio não era apenas redesenhar uma tela. Era entender por que pessoas que chegavam até uma oferta não necessariamente seguiam para a contratação.",
      },
      {
        title: "Evidências",
        text:
          "A investigação combinou comportamento do funil com perguntas sobre valor disponível, condições, momento de contratação e sensação de segurança.",
      },
      {
        title: "Pesquisa",
        text:
          "A estratégia passou a considerar duas abordagens complementares: uma pergunta totalmente aberta e outra pesquisa estruturada, além de opt-in para entrevistas posteriores.",
      },
      {
        title: "Decisão de design",
        text:
          "Antes de propor mudanças definitivas na interface, a prioridade foi melhorar a qualidade da evidência. Assim, as hipóteses de UX poderiam ser conectadas a motivos reais de abandono.",
      },
    ],
  },
  {
    slug: "onboarding-caf",
    index: "03",
    title: "Onboarding & CAF — segurança sem perder clareza",
    eyebrow: "Segurança • Biometria • Jornada crítica",
    summary:
      "Desenho de estados de sucesso, erro recuperável e reprovação crítica em uma jornada de troca de dispositivo com validação facial.",
    quick: {
      problem:
        "Explicar situações de segurança e bloqueio de forma clara em uma jornada que depende de um provedor externo.",
      role:
        "Product Designer na definição de fluxo, estados, mensagens e contingências da experiência.",
      process:
        "Mapeamento de cenários, classificação de erros, desenho de telas, UX Writing e comunicação fora do app.",
      result:
        "Uma jornada com respostas diferentes para falhas recuperáveis, situações críticas e bloqueio preventivo.",
    },
    tags: ["Onboarding", "Segurança", "UX Writing", "Service Design"],
    visual: "caf",
    nda: true,
    sections: [
      {
        title: "Problema",
        text:
          "Falhas de biometria não podem ser tratadas como um único erro genérico. Algumas situações permitem nova tentativa; outras exigem interrupção imediata por segurança.",
      },
      {
        title: "Mapeamento de cenários",
        text:
          "A jornada foi organizada em sucesso, erro recuperável, reprovação crítica e falha técnica, criando respostas e mensagens coerentes para cada nível de risco.",
      },
      {
        title: "Decisão importante",
        text:
          "Como parte da experiência acontece dentro de um fornecedor externo, também foi necessário pensar em comunicação fora do app para cenários em que o usuário perde o acesso à conta.",
      },
      {
        title: "Aprendizado",
        text:
          "Em jornadas de segurança, clareza é parte da proteção. O usuário precisa saber o que aconteceu, o que pode fazer e o que não pode fazer, sem receber detalhes que enfraqueçam o processo.",
      },
    ],
  },
  {
    slug: "data-experience-active-bi",
    index: "04",
    title: "Data Experience — interfaces para decisões complexas",
    eyebrow: "Dashboards • Dados • B2B",
    summary:
      "Experiência acumulada em produtos de dados, dashboards e interfaces B2B para diferentes empresas e setores.",
    quick: {
      problem:
        "Transformar grandes volumes de informação em interfaces úteis para pessoas que precisam decidir rápido.",
      role:
        "UX/UI Designer atuando em arquitetura, visualização, prototipação e consistência visual.",
      process:
        "Entendimento do contexto, hierarquia da informação, desenho de fluxos e evolução de dashboards.",
      result:
        "Experiência multidisciplinar em produtos orientados por dados para diferentes contextos de negócio.",
    },
    tags: ["Dashboard", "B2B", "Data Experience", "UI Design"],
    visual: "data",
    sections: [
      {
        title: "Contexto",
        text:
          "Na Active BI, trabalhei em projetos para empresas de diferentes setores, lidando com necessidades distintas de análise, operação e acompanhamento de indicadores.",
      },
      {
        title: "O que muda em produtos de dados",
        text:
          "O desafio não é apenas exibir gráficos. É decidir o que precisa ter prioridade, como diferentes informações se relacionam e qual ação a interface deve apoiar.",
      },
      {
        title: "Minha atuação",
        text:
          "Trabalhei com Figma, Power BI, Qlik e processos de UX/UI para transformar necessidades de negócio em estruturas visuais mais claras e consistentes.",
      },
      {
        title: "Marcas e contextos",
        text:
          "Ao longo da experiência, participei de projetos relacionados a marcas como Lenovo, Motorola, State Grid, OceanPact e Porto do Açu.",
      },
    ],
  },
  {
    slug: "dirige-brasil",
    index: "05",
    title: "Dirige Brasil — desenhando um produto do zero",
    eyebrow: "Produto próprio • Marketplace • Mobile",
    summary:
      "Construção de uma experiência para conectar alunos a instrutores de direção, organizando descoberta, agenda e comunicação.",
    quick: {
      problem:
        "Criar confiança e previsibilidade em uma experiência que conecta duas pontas com necessidades diferentes.",
      role:
        "Product Designer e participante da construção do produto, do conceito aos fluxos e protótipos.",
      process:
        "Definição do MVP, fluxos críticos, arquitetura, prototipação e evolução das jornadas de aluno e instrutor.",
      result:
        "Uma proposta de produto centrada nos momentos mais importantes da contratação e realização das aulas.",
    },
    tags: ["0→1", "Marketplace", "Mobile", "Product Strategy"],
    visual: "dirige",
    sections: [
      {
        title: "Contexto",
        text:
          "O Dirige Brasil nasce da ideia de aproximar alunos e instrutores de direção independentes, criando uma experiência mais clara para encontrar, contratar e acompanhar aulas.",
      },
      {
        title: "Desafio",
        text:
          "O produto precisa funcionar para dois públicos diferentes. O aluno quer segurança e praticidade; o instrutor precisa organizar agenda, disponibilidade e comunicação.",
      },
      {
        title: "Foco do MVP",
        text:
          "A prioridade foi desenhar o caminho mínimo para gerar valor: encontrar um instrutor, escolher uma aula, confirmar o agendamento e manter um canal simples de contato.",
      },
      {
        title: "Princípio de produto",
        text:
          "Cada nova funcionalidade precisa responder a uma necessidade real da jornada. Isso evita transformar o MVP em um sistema complexo antes de validar o valor central.",
      },
    ],
  },
];

export const skills = [
  "Figma",
  "FigJam",
  "UX Research",
  "Product Discovery",
  "Prototipação",
  "UI Design",
  "UX Writing",
  "Design System",
  "Jornada do usuário",
  "Benchmark",
  "Análise heurística",
  "Power BI",
  "Qlik",
  "HTML/CSS",
  "IA aplicada ao design",
];

export const experience = [
  {
    period: "2026 — atual",
    role: "Product Designer Pleno",
    company: "Jazz Tech • Dimo",
    description:
      "Produto financeiro mobile, com atuação em conta, crédito, pagamentos, onboarding e segurança.",
  },
  {
    period: "2022 — 2026",
    role: "UX/UI Designer",
    company: "Active BI",
    description:
      "Produtos de dados, dashboards e experiências digitais para empresas de diferentes setores.",
  },
];

export const brands = [
  "Motorola",
  "Dimo",
  "Lenovo",
  "State Grid",
  "OceanPact",
  "Porto do Açu",
];
