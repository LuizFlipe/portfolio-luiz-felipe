export type CaseSection = {
  title: string;
  text: string;
  bullets?: string[];
  takeaway?: string;
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
  visual: "bravus" | "fluxo" | "dimo" | "consignado" | "caf" | "data" | "dirige" | "clinica" | "malia" | "lumea" | "ale";
  externalProject?: "bravus" | "fluxo" | "clinica" | "malia" | "lumea" | "ale";
  interactive?: { label: string; anchor: string; description: string; image?: string }[];
  facts?: {
    label: string;
    value: string;
  }[];
  shareImage?: string;
  gallery?: {
    src: string;
    alt: string;
    caption: string;
  }[];
  nda?: boolean;
  contentGaps?: string[];
  sections: CaseSection[];
};

export const cases: PortfolioCase[] = [
  {
    slug: "lumea-estetica-avancada",
    index: "01",
    title: "LUMÉA — beleza em cada interação",
    eyebrow: "Direção visual • Web • Projeto conceitual",
    summary: "Uma experiência editorial de estética avançada que conecta identidade, descoberta de cuidados e interações que convidam a explorar.",
    quick: {
      problem: "Apresentar uma proposta de estética com personalidade e tornar a descoberta dos serviços simples e acolhedora.",
      role: "Projeto de portfólio que reúne direção visual, interface e experiência web interativa.",
      process: "Uma jornada entre apresentação da marca, procedimentos, exploração por interesse e esclarecimento de dúvidas.",
      result: "Um site conceitual navegável, com seleção de interesses, comparação visual e perguntas expansíveis. Sem métricas de uso publicadas.",
    },
    tags: ["UI Design", "Direção de arte", "Interação", "Web responsiva"],
    visual: "lumea",
    externalProject: "lumea",
    shareImage: "/images/lumea/inicio.jpg",
    facts: [
      { label: "Formato", value: "Experiência web interativa" },
      { label: "Segmento", value: "Estética avançada" },
      { label: "Status", value: "Projeto conceitual" },
    ],
    interactive: [
      { label: "Primeira impressão", anchor: "top", image: "/images/lumea/inicio.jpg", description: "Fotografia editorial, tipografia expressiva e uma chamada clara apresentam o universo da marca." },
      { label: "Descobrir cuidados", anchor: "procedimentos", image: "/images/lumea/procedimentos.jpg", description: "Quatro frentes de cuidado organizam a descoberta. Explore a hierarquia entre imagem, título e descrição." },
      { label: "Escolher um interesse", anchor: "tratamento", image: "/images/lumea/tratamento.jpg", description: "No site ao vivo, selecione um interesse e veja o conteúdo mudar. A interação aproxima a navegação da intenção de quem visita." },
      { label: "Tirar dúvidas", anchor: "faq", image: "/images/lumea/duvidas.jpg", description: "Abra as perguntas no site ao vivo para conhecer as respostas. A informação aparece no momento em que faz falta." },
    ],
    sections: [
      { title: "Uma marca para explorar", text: "LUMÉA é um projeto conceitual de estética avançada. A experiência combina tons claros, fotografia editorial e tipografia serifada para construir uma presença calma, com espaço para observar e descobrir.", takeaway: "A identidade visual também organiza o ritmo da navegação." },
      { title: "Da curiosidade à descoberta", text: "A página começa pela proposta da marca e apresenta os procedimentos antes de convidar o visitante a explorar interesses. Essa sequência conecta posicionamento e informação sem depender de um catálogo extenso.", bullets: ["Apresentação editorial da marca", "Procedimentos agrupados em quatro frentes", "Conteúdo que muda conforme o interesse selecionado", "Perguntas expansíveis antes do contato"] },
      { title: "Interação com propósito", text: "O seletor de interesses alterna explicações e possibilidades de cuidado. O comparador de imagens permite explorar uma demonstração visual, e as perguntas frequentes revelam respostas sob demanda.", takeaway: "Cada interação oferece uma forma de entender melhor a proposta." },
      { title: "O que este projeto demonstra", text: "O site demonstra uma direção visual consistente e uma jornada navegável. A clínica, a profissional, os depoimentos e os resultados apresentados são fictícios, conforme sinalizado no próprio projeto. Não há resultados clínicos ou métricas de negócio validados neste case.", takeaway: "Uma peça de portfólio para explorar interface, conteúdo e comportamento." },
    ],
  },

  {
    slug: "emerson-psicologia-sexologia",
    index: "02",
    title: "Emerson Alexandre — presença digital com acolhimento",
    eyebrow: "UX Strategy • Content Design • UI Design",
    summary:
      "Uma presença digital para psicologia clínica e sexologia, organizando atuação, temas de trabalho e contato em uma experiência sóbria, humana e acessível.",
    quick: {
      problem:
        "Transformar uma presença concentrada nas redes sociais em um espaço próprio, profissional e claro para apresentar o trabalho e facilitar o primeiro contato.",
      role:
        "Product Designer responsável pela estratégia de conteúdo, arquitetura da informação, direção visual e experiência web.",
      process:
        "Organização da apresentação profissional, áreas de atuação, forma de atendimento, dúvidas frequentes e caminhos de contato.",
      result:
        "Uma estrutura de site responsiva pensada para comunicar com cuidado temas como sexualidade, desejo, vínculos e relações, sem promessas terapêuticas.",
    },
    tags: ["UX Strategy", "Arquitetura da Informação", "Content Design", "UI Design"],
    visual: "ale",
    externalProject: "ale",
    interactive: [
      {
        label: "Site ao vivo",
        anchor: "top",
        description:
          "Navegue pela experiência publicada de Emerson Alexandre diretamente dentro do case. Você também pode abrir o site completo em uma nova aba.",
      },
    ],
    facts: [
      { label: "Profissional", value: "Emerson Alexandre" },
      { label: "Atuação", value: "Psicologia clínica e sexologia" },
      { label: "Registro", value: "CRP 06/211058" },
    ],
    sections: [
      {
        title: "Uma presença além das redes sociais",
        text:
          "A proposta parte da oportunidade de transformar a atuação de Emerson Alexandre em uma presença digital própria. Em vez de depender apenas de publicações e mensagens nas redes sociais, o site organiza informações essenciais em um espaço profissional e fácil de consultar.",
        takeaway:
          "O site funciona como ponto central para apresentar o trabalho antes do primeiro contato.",
      },
      {
        title: "Conteúdo sensível pede clareza",
        text:
          "Sexualidade, desejo, vínculos e relações são temas que exigem uma comunicação cuidadosa. A arquitetura evita promessas, linguagem apelativa ou excesso de informação e prioriza explicações diretas sobre atuação, atendimento e formas de contato.",
        bullets: [
          "Apresentação profissional e registro visíveis",
          "Áreas de atuação explicadas em linguagem acessível",
          "Informações sobre como funciona o atendimento",
          "Perguntas frequentes antes do contato",
        ],
      },
      {
        title: "Direção visual",
        text:
          "A identidade foi pensada para equilibrar profissionalismo e proximidade. Tons profundos, áreas de respiro e tipografia limpa criam uma experiência calma, evitando tanto uma aparência clínica excessivamente fria quanto uma comunicação informal demais.",
        takeaway:
          "A interface precisa transmitir segurança sem criar distância.",
      },
      {
        title: "Ética desde a estrutura",
        text:
          "O projeto evita depoimentos, garantias de resultado ou qualquer linguagem que possa sugerir promessa terapêutica. O conteúdo é estruturado para informar e facilitar o contato, preservando os limites de uma comunicação profissional responsável.",
      },
      {
        title: "Próximos passos",
        text:
          "Com a validação do profissional, a próxima etapa é aprofundar conteúdo, modalidades de atendimento, perguntas frequentes, formas de contato e identidade visual. O objetivo é evoluir o projeto junto ao próprio Emerson, sem inventar informações sobre sua prática.",
      },
    ],
  },
  {
    slug: "bravus-agendamento",
    index: "03",
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
    externalProject: "bravus",
    shareImage: "/og/bravus.png",
    gallery: [
      {
        src: "/images/bravus/home.webp",
        alt: "Página inicial da Bravus com chamada para agendamento",
        caption: "Proposta de valor e acesso imediato ao agendamento",
      },
      {
        src: "/images/bravus/servicos.webp",
        alt: "Catálogo de serviços da Bravus com duração e preço",
        caption: "Serviços comparáveis por preço, duração e benefício",
      },
      {
        src: "/images/bravus/como-funciona.webp",
        alt: "Seção da Bravus explicando o agendamento em três passos",
        caption: "Antecipação do fluxo para reduzir dúvidas",
      },
      {
        src: "/images/bravus/profissionais.webp",
        alt: "Perfis dos profissionais disponíveis na Bravus",
        caption: "Escolha de profissional por especialidade",
      },
      {
        src: "/images/bravus/agendamento-servico.webp",
        alt: "Primeira etapa do agendamento para escolher um serviço",
        caption: "Etapa 01 — escolha do serviço",
      },
      {
        src: "/images/bravus/agendamento-data.webp",
        alt: "Etapa do agendamento para selecionar uma data",
        caption: "Etapa 03 — calendário com disponibilidade",
      },
      {
        src: "/images/bravus/agendamento-horario.webp",
        alt: "Etapa do agendamento com horários disponíveis e ocupados",
        caption: "Etapa 04 — disponibilidade e estados de horário",
      },
      {
        src: "/images/bravus/agendamento-revisao.webp",
        alt: "Revisão dos dados antes de confirmar o agendamento",
        caption: "Etapa 06 — revisão antes do compromisso",
      },
      {
        src: "/images/bravus/agendamento-confirmado.webp",
        alt: "Confirmação final do agendamento na Bravus",
        caption: "Confirmação com calendário, WhatsApp e número de reserva",
      },
    ],
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
        title: "Arquitetura da experiência",
        text:
          "A landing page organiza a experiência em uma sequência que responde às dúvidas mais comuns antes da reserva: proposta de valor, serviços, funcionamento, profissionais, avaliações, ambiente e localização. O agendamento permanece disponível em pontos estratégicos sem interromper a leitura.",
        bullets: [
          "Preço e duração visíveis antes de começar",
          "Acesso ao agendamento junto aos principais argumentos",
          "Sinais de confiança distribuídos ao longo da página",
          "Conteúdo responsivo e hierarquia direta",
        ],
      },
      {
        title: "Fluxo de agendamento",
        text:
          "A reserva foi dividida em seis decisões curtas: serviço, profissional, data, horário, contato e revisão. Um resumo lateral acompanha o usuário durante todo o processo, preservando contexto e deixando claro o que já foi escolhido.",
        bullets: [
          "Opção de escolher um profissional ou aceitar o primeiro disponível",
          "Calendário com datas válidas e horários ocupados desabilitados",
          "Progresso visível em todas as etapas",
          "Revisão completa antes da confirmação",
          "Retorno entre etapas sem perder as escolhas anteriores",
        ],
      },
      {
        title: "Sistema visual",
        text:
          "A interface usa fundo escuro, tipografia editorial condensada e laranja como cor de ação. O conjunto traduz a atmosfera urbana da barbearia, enquanto contraste, espaçamento e estados de interação mantêm a leitura clara e os próximos passos reconhecíveis.",
      },
      {
        title: "Estados, confiança e continuidade",
        text:
          "A experiência não termina no clique de confirmação. O protótipo gera um número de reserva, salva o horário no navegador, permite consultar ou cancelar agendamentos e oferece atalhos para adicionar ao calendário ou iniciar uma conversa no WhatsApp.",
      },
      {
        title: "Resultado e próximos passos",
        text:
          "O conceito evoluiu para uma experiência responsiva e funcional que conecta descoberta, confiança e conversão dentro do mesmo produto. Como próximo passo, eu validaria o fluxo com clientes e profissionais da barbearia, acompanhando conclusão do agendamento, dúvidas por etapa e preferência por profissional.",
      },
    ],
  },
  {
    slug: "fluxo-financas-pessoais",
    index: "04",
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
    externalProject: "fluxo",
    shareImage: "/og/fluxo.png",
    gallery: [
      {
        src: "/images/fluxo/login.webp",
        alt: "Tela de login do aplicativo Fluxo",
        caption: "Login simples e direto",
      },
      {
        src: "/images/fluxo/criar-conta.webp",
        alt: "Tela de criação de conta do aplicativo Fluxo",
        caption: "Criação de conta",
      },
      {
        src: "/images/fluxo/home.webp",
        alt: "Tela inicial do aplicativo Fluxo com resumo financeiro",
        caption: "Resumo financeiro e transações",
      },
      {
        src: "/images/fluxo/nova-despesa.webp",
        alt: "Tela para registrar uma nova despesa no aplicativo Fluxo",
        caption: "Registro rápido de despesas",
      },
      {
        src: "/images/fluxo/relatorios.webp",
        alt: "Tela de relatórios do aplicativo Fluxo",
        caption: "Relatórios e categorias",
      },
      {
        src: "/images/fluxo/ranking-gastos.webp",
        alt: "Tela de ranking de gastos do aplicativo Fluxo",
        caption: "Ranking de gastos",
      },
      {
        src: "/images/fluxo/dicas-inteligentes.webp",
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
    slug: "clinica-viver-bem",
    index: "05",
    title: "Clínica Viver Bem — cuidado e agendamento",
    eyebrow: "Saúde • Site institucional • Serviço",
    summary:
      "Experiência web para apresentar uma clínica multiprofissional, orientar sobre atendimentos e transformar dúvidas em uma solicitação de contato clara pelo WhatsApp.",
    quick: {
      problem:
        "Reunir informações institucionais, possibilidades de cuidado e contato sem transformar o site em uma promessa médica ou em uma página difícil de navegar.",
      role:
        "Product Designer responsável pela estrutura da experiência, hierarquia do conteúdo, interface responsiva e fluxo de solicitação de contato.",
      process:
        "Organização da jornada entre apresentação, atendimentos, equipe, estrutura, dúvidas frequentes e agendamento, com avisos claros para informações ainda em validação.",
      result:
        "Um site público e responsivo que combina informação responsável, navegação direta e um fluxo de contato preparado para continuar no WhatsApp.",
    },
    tags: ["Product Design", "UX/UI", "Saúde", "Web responsiva"],
    visual: "clinica",
    externalProject: "clinica",
    shareImage: "/images/clinica/hero.jpg",
    facts: [
      { label: "Formato", value: "Site institucional responsivo" },
      { label: "Setor", value: "Saúde multiprofissional" },
      { label: "Foco", value: "Informação, confiança e contato" },
      { label: "Status", value: "Experiência pública" },
    ],
    gallery: [
      {
        src: "/images/clinica/hero.jpg",
        alt: "Página inicial da Clínica Viver Bem com proposta de cuidado e atalhos para agendamento",
        caption: "Proposta de valor, localização e ações principais logo no início",
      },
      {
        src: "/images/clinica/atendimentos.jpg",
        alt: "Seção de atendimentos da Clínica Viver Bem",
        caption: "Atendimentos apresentados com linguagem responsável e indicação de validação",
      },
      {
        src: "/images/clinica/estrutura.jpg",
        alt: "Galeria preparada para receber fotografias da estrutura da Clínica Viver Bem",
        caption: "Estrutura modular pronta para receber imagens reais e autorizadas",
      },
    ],
    contentGaps: [
      "Substituir os espaços reservados por fotografias reais e autorizadas da clínica e da equipe.",
      "Confirmar a lista de atendimentos e os dados dos profissionais antes da publicação definitiva.",
      "Adicionar evidências de uso ou resultados quando houver dados reais disponíveis.",
    ],
    sections: [
      {
        title: "Contexto",
        text:
          "A Clínica Viver Bem precisava de uma presença digital capaz de explicar sua proposta multiprofissional, apresentar as formas de cuidado e facilitar o primeiro contato para pessoas de Guaxupé e região.",
        takeaway: "A página precisava acolher e orientar antes de pedir qualquer ação ao visitante.",
      },
      {
        title: "O desafio",
        text:
          "Sites de saúde precisam equilibrar proximidade, precisão e responsabilidade. O conteúdo não poderia sugerir diagnóstico ou prometer resultados; ao mesmo tempo, deveria responder às dúvidas que antecedem uma consulta.",
        takeaway: "Clareza e limites explícitos também constroem confiança.",
      },
      {
        title: "Arquitetura da experiência",
        text:
          "A navegação acompanha as perguntas mais comuns do visitante: quem é a clínica, quais atendimentos existem, quem atende, como é o espaço, como funciona o agendamento e onde encontrar a equipe.",
        bullets: [
          "Atalho para WhatsApp disponível nos principais momentos da página",
          "Atendimentos descritos sem substituir a avaliação profissional",
          "FAQ para antecipar dúvidas operacionais",
          "Localização, telefone e Instagram agrupados no contato",
        ],
        takeaway: "A ordem do conteúdo reduz a distância entre entender o serviço e iniciar uma conversa.",
      },
      {
        title: "Conteúdo responsável",
        text:
          "Informações ainda não confirmadas aparecem como conteúdo em validação. Fotografias, perfis profissionais e detalhes de atendimento possuem espaços preparados, mas não são apresentados como definitivos sem autorização.",
        takeaway: "Sinalizar uma lacuna é mais confiável do que preenchê-la com uma informação não verificada.",
      },
      {
        title: "Solicitação de contato",
        text:
          "O formulário organiza nome, telefone, melhor período e atendimento de interesse para preparar uma mensagem no WhatsApp. O site explica que não salva os dados e orienta a não enviar diagnósticos, documentos ou informações médicas.",
        bullets: [
          "Continuidade no canal que a equipe já utiliza",
          "Consentimento explícito antes de abrir o WhatsApp",
          "Aviso de que o pedido não confirma automaticamente o agendamento",
          "Orientação específica para situações de urgência e emergência",
        ],
        takeaway: "O formulário estrutura a conversa sem se apresentar como prontuário ou sistema clínico.",
      },
      {
        title: "Sistema visual e responsividade",
        text:
          "A interface combina azul profundo, turquesa, verde e superfícies claras para comunicar acolhimento e organização. Tipografia ampla, cards modulares e chamadas de ação contrastantes sustentam a leitura em desktop e celular.",
        takeaway: "A identidade apoia a confiança, enquanto a hierarquia mantém o serviço compreensível.",
      },
      {
        title: "Resultado e próximos passos",
        text:
          "O resultado é uma experiência pública que conecta apresentação institucional, informação responsável e contato em uma única jornada. Os próximos passos são validar os conteúdos pendentes com a clínica, inserir fotografias autorizadas e acompanhar dúvidas recorrentes para evoluir a página.",
        takeaway: "O site já funciona como porta de entrada, mas deve evoluir junto com informações e evidências reais.",
      },
    ],
  },
  {
    slug: "malia-moda-zl",
    index: "06",
    title: "Malia — moda com identidade da Zona Leste",
    eyebrow: "Moda • E-commerce • Negócio local",
    summary:
      "Experiência editorial para uma loja de moda feminina de Cidade Tiradentes, conectando descoberta de produtos, catálogo e continuidade do pedido pelo WhatsApp.",
    quick: {
      problem:
        "Transformar a presença digital da loja em uma vitrine organizada, sem perder a personalidade da marca nem depender apenas das redes sociais.",
      role:
        "Product Designer responsável pela arquitetura da experiência, direção visual, interface responsiva e protótipo navegável.",
      process:
        "Organização da jornada entre novidades, categorias, coleção, página de produto, loja física e contato, com estados preparados para favoritos e sacola.",
      result:
        "Um site público e navegável que apresenta a marca, permite explorar peças e leva o pedido para o WhatsApp de forma direta.",
    },
    tags: ["Product Design", "E-commerce", "UX/UI", "Web responsiva"],
    visual: "malia",
    externalProject: "malia",
    shareImage: "/images/malia/malia-home.jpg",
    facts: [
      { label: "Formato", value: "Vitrine e catálogo responsivos" },
      { label: "Segmento", value: "Moda feminina" },
      { label: "Base", value: "Cidade Tiradentes — SP" },
      { label: "Status", value: "Protótipo público navegável" },
    ],
    gallery: [
      {
        src: "/images/malia/malia-home.jpg",
        alt: "Página inicial da Malia com campanha de moda feminina e acesso às novidades",
        caption: "Identidade editorial e proposta de valor logo na abertura",
      },
      {
        src: "/images/malia/malia-catalogo.jpg",
        alt: "Página de catálogo da Malia com título e controles de busca e filtros",
        caption: "Entrada do catálogo com busca, filtros e quantidade de peças",
      },
      {
        src: "/images/malia/malia-produto.jpg",
        alt: "Página de produto da Malia com imagens, preço, cores e tamanhos",
        caption: "Detalhes do produto organizados para apoiar a escolha",
      },
    ],
    contentGaps: [
      "Substituir imagens, produtos, preços e depoimentos demonstrativos por conteúdo real autorizado.",
      "Configurar os perfis oficiais, o endereço e o número de WhatsApp da loja.",
      "Integrar disponibilidade e estoque quando esses dados estiverem definidos.",
    ],
    sections: [
      {
        title: "Contexto",
        text:
          "A Malia é uma proposta de presença digital para uma loja de moda feminina de Cidade Tiradentes. O projeto leva para o site a atitude visual da marca e cria um espaço próprio para apresentar novidades, coleções e informações da loja.",
        takeaway: "A experiência precisava vender estilo e, ao mesmo tempo, facilitar decisões práticas.",
      },
      {
        title: "O desafio",
        text:
          "A navegação deveria funcionar como vitrine editorial e como caminho de compra. Isso exigiu equilibrar campanhas de impacto, descoberta por categoria e informações objetivas como preço, cor, tamanho, retirada e entrega.",
        takeaway: "Expressão de marca e clareza comercial foram tratadas como partes da mesma experiência.",
      },
      {
        title: "Arquitetura da experiência",
        text:
          "A estrutura conecta novidades, roupas, conjuntos, vestidos, mais vendidos, história da marca e loja física. Na home, blocos editoriais alternam lançamentos, categorias, coleção, favoritos, funcionamento da compra e contato.",
        bullets: [
          "Catálogo com busca, filtros e categorias",
          "Página de produto com preço, cores e tamanhos",
          "Favoritos e sacola preparados na navegação",
          "Loja física e WhatsApp integrados à jornada",
        ],
        takeaway: "Cada área responde a uma intenção diferente sem tirar o visitante do universo da marca.",
      },
      {
        title: "Do catálogo para a conversa",
        text:
          "O fluxo foi pensado para o contexto operacional de um pequeno negócio: o visitante descobre a peça no site, confere as informações essenciais e continua o pedido no WhatsApp, combinando entrega ou retirada com a equipe.",
        takeaway: "A solução digital se adapta ao atendimento que a loja já consegue sustentar.",
      },
      {
        title: "Direção visual",
        text:
          "A interface combina preto, branco e rosa com tipografia condensada, fotografias amplas e títulos editoriais. O contraste entre páginas de campanha e áreas comerciais mantém personalidade sem esconder os controles de compra.",
        takeaway: "A estética cria reconhecimento; a hierarquia mantém o produto utilizável.",
      },
      {
        title: "Resultado e próximos passos",
        text:
          "O resultado é um protótipo público e responsivo que apresenta a marca, o catálogo e a jornada de contato em um único sistema. A publicação definitiva depende da troca do conteúdo demonstrativo por produtos, imagens, contatos e informações reais da loja.",
        takeaway: "O site já valida a estrutura da experiência sem apresentar conteúdo demonstrativo como dado real.",
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
