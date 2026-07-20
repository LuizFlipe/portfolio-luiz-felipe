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
  visual: "bravus" | "fluxo" | "dimo" | "consignado" | "caf" | "data" | "dirige";
  externalUrl?: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  nda?: boolean;
  sections: CaseSection[];
};

export const cases: PortfolioCase[] = [
  {
    slug: "bravus-agendamento",
    index: "01",
    title: "Bravus — experiência de agendamento",
    eyebrow: "Product Design • Serviço • Web",
    summary:
      "Case conceitual para uma barbearia em Sorocaba, conectando posicionamento de marca, descoberta de serviços e um fluxo funcional de agendamento.",
    quick: {
      problem:
        "Transformar a presença digital da barbearia em uma experiência que gerasse confiança e levasse o cliente ao agendamento sem complicação.",
      role:
        "Product Designer responsável pelo conceito, arquitetura da informação, jornada, interface e protótipo funcional.",
      process:
        "Organização da proposta de valor, hierarquia de conteúdo e desenho do fluxo entre serviço, profissional, data, horário e confirmação.",
      result:
        "Uma landing page responsiva conectada a um fluxo funcional de agendamento, mantendo uma identidade premium e direta.",
    },
    tags: ["Product Design", "UX/UI", "Service Design", "Prototipação"],
    visual: "bravus",
    externalUrl: "https://bravus-ux-case-luiz.luiz-felipesantos11.chatgpt.site/",
    sections: [
      {
        title: "Contexto",
        text:
          "A Bravus é um case conceitual de experiência digital para uma barbearia em Sorocaba. O projeto parte de uma pergunta simples: como levar para o digital a sensação de atendimento cuidadoso que o cliente espera encontrar no espaço físico?",
      },
      {
        title: "O desafio",
        text:
          "A experiência precisava cumprir duas funções sem competir entre si: apresentar serviços, profissionais, avaliações e localização; e conduzir rapidamente quem já estava pronto para reservar um horário.",
      },
      {
        title: "Arquitetura e fluxo",
        text:
          "A landing page organiza os principais sinais de confiança e mantém o agendamento sempre acessível. O fluxo foi dividido em decisões curtas e previsíveis.",
        bullets: [
          "Escolha do serviço",
          "Seleção do profissional",
          "Definição de data e horário",
          "Revisão e confirmação do agendamento",
          "Consulta dos horários já reservados",
        ],
      },
      {
        title: "Direção visual",
        text:
          "A interface usa fundo escuro, tipografia editorial e laranja como ponto de ação. A decisão cria uma presença marcante para a marca sem comprometer contraste, leitura ou clareza dos próximos passos.",
      },
      {
        title: "Resultado",
        text:
          "O conceito evoluiu para uma experiência responsiva e funcional que conecta descoberta, confiança e conversão dentro do mesmo produto.",
      },
    ],
  },
  {
    slug: "fluxo-financas-pessoais",
    index: "02",
    title: "Fluxo — autonomia financeira no dia a dia",
    eyebrow: "Product Design • Fintech • Mobile",
    summary:
      "Um assistente financeiro pessoal que transforma gastos, relatórios e padrões de consumo em informações claras para decisões mais conscientes.",
    quick: {
      problem:
        "Produtos financeiros pessoais costumam exibir muitos números, mas oferecem pouco contexto e podem fazer o usuário se sentir julgado ou perdido.",
      role:
        "Product Designer responsável pela direção visual, arquitetura das telas, design system, componentes e protótipo de alta fidelidade.",
      process:
        "Tradução dos pilares autonomia, clareza e confiança em princípios visuais, seguida por moodboard, tokens, componentes e aplicação nos principais fluxos.",
      result:
        "Uma experiência mobile consistente que conecta registro de despesas, relatórios, ranking de gastos e dicas inteligentes em uma mesma linguagem.",
    },
    tags: ["Product Design", "UI Design", "Fintech", "Design System"],
    visual: "fluxo",
    externalUrl: "https://luizfelipeport.lovable.app/projetos/fluxo",
    gallery: [
      {
        src: "/images/fluxo/login.png",
        alt: "Tela de login do aplicativo Fluxo",
        caption: "Login simples e direto",
      },
      {
        src: "/images/fluxo/criar-conta.png",
        alt: "Tela de criação de conta do aplicativo Fluxo",
        caption: "Criação de conta",
      },
      {
        src: "/images/fluxo/home.png",
        alt: "Tela inicial do aplicativo Fluxo com resumo financeiro",
        caption: "Resumo financeiro e transações",
      },
      {
        src: "/images/fluxo/nova-despesa.png",
        alt: "Tela para registrar uma nova despesa no aplicativo Fluxo",
        caption: "Registro rápido de despesas",
      },
      {
        src: "/images/fluxo/relatorios.png",
        alt: "Tela de relatórios do aplicativo Fluxo",
        caption: "Relatórios e categorias",
      },
      {
        src: "/images/fluxo/ranking-gastos.png",
        alt: "Tela de ranking de gastos do aplicativo Fluxo",
        caption: "Ranking de gastos",
      },
      {
        src: "/images/fluxo/dicas-inteligentes.png",
        alt: "Tela de dicas inteligentes do aplicativo Fluxo",
        caption: "Dicas empáticas e acionáveis",
      },
    ],
    sections: [
      {
        title: "Contexto",
        text:
          "O Fluxo é um assistente financeiro pessoal pensado para pessoas que querem entender para onde o dinheiro está indo sem precisar interpretar planilhas ou interfaces bancárias complexas. O produto reúne registro cotidiano, leitura de padrões e orientação dentro de uma experiência mobile.",
      },
      {
        title: "O desafio",
        text:
          "O principal desafio era comunicar finanças com clareza sem criar uma experiência fria ou punitiva. A interface precisava destacar valores e tendências, mas também acolher quem ainda está construindo o hábito de acompanhar os próprios gastos.",
      },
      {
        title: "Princípios de design",
        text:
          "Três princípios orientaram as decisões do produto: autonomia para manter o usuário no controle, clareza para reduzir esforço cognitivo e confiança para lidar com informações sensíveis.",
        bullets: [
          "Informação principal reconhecível em poucos segundos",
          "Linguagem empática, sem julgamento",
          "Ações recorrentes sempre ao alcance do polegar",
          "Cores semânticas consistentes entre categorias",
          "Feedback imediato após registrar uma despesa",
        ],
      },
      {
        title: "Sistema visual",
        text:
          "O verde funciona como âncora de crescimento e segurança, enquanto a Plus Jakarta Sans mantém números e textos legíveis em diferentes escalas. Cards, inputs, chips, gráficos e estados de navegação foram construídos como componentes reutilizáveis para sustentar a evolução do produto.",
      },
      {
        title: "Arquitetura da experiência",
        text:
          "A navegação foi organizada em quatro áreas: início, relatórios, ranking e dicas. O botão central de nova despesa transforma a ação mais frequente no ponto de entrada do sistema, reduzindo etapas no uso diário.",
      },
      {
        title: "Dados que orientam ações",
        text:
          "Relatórios e rankings não existem apenas para mostrar números. Eles destacam categorias, participação no total e padrões de consumo. As dicas inteligentes transformam esses sinais em sugestões simples, específicas e possíveis de aplicar.",
      },
      {
        title: "Resultado",
        text:
          "O resultado é uma experiência coesa que ajuda o usuário a registrar, compreender e agir. O sistema mantém consistência entre telas e cria uma base preparada para evoluir com metas, alertas e personalização das recomendações.",
      },
    ],
  },
  {
    slug: "dimo-produto-financeiro",
    index: "03",
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
    index: "04",
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
    index: "05",
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
    index: "06",
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
    index: "07",
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
