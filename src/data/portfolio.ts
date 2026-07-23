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
  visual: "bravus" | "fluxo" | "dimo" | "consignado" | "caf" | "data" | "dirige" | "clinica" | "malia";
  externalProject?: "bravus" | "fluxo" | "clinica" | "malia";
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
    facts: [
      { label: "Papel", value: "Product Designer" },
      { label: "Foco", value: "Fluxos, estados e UX Writing" },
      { label: "Colaboração", value: "Produto, segurança e fornecedor externo" },
      { label: "Restrições", value: "Jornada crítica e conteúdo adaptado por NDA" },
    ],
    contentGaps: [
      "Adicionar período e composição detalhada da equipe quando autorizados.",
      "Adicionar evidências e resultados qualitativos publicáveis.",
    ],
    sections: [
      {
        title: "Contexto e problema",
        text:
          "Falhas de biometria não podem ser tratadas como um único erro genérico. Algumas situações permitem nova tentativa; outras exigem interrupção imediata por segurança.",
        takeaway: "O mesmo sintoma visual podia representar níveis de risco e respostas completamente diferentes.",
      },
      {
        title: "Meu papel e restrições",
        text:
          "Atuei na definição do fluxo, dos estados, das mensagens e das contingências. Parte da experiência acontece em um fornecedor externo, o que limita o controle sobre a jornada e exige continuidade também fora do aplicativo.",
        takeaway: "A experiência precisava continuar coerente mesmo quando o produto deixava de controlar toda a interface.",
      },
      {
        title: "Processo e hipóteses",
        text:
          "A jornada foi organizada em sucesso, erro recuperável, reprovação crítica e falha técnica, criando respostas e mensagens coerentes para cada nível de risco.",
        bullets: [
          "Distinguir falhas recuperáveis de bloqueios preventivos",
          "Orientar o próximo passo sem revelar detalhes sensíveis",
          "Prever comunicação para quem perde o acesso ao aplicativo",
        ],
        takeaway: "Classificar cenários antes de escrever mensagens evitou respostas genéricas para riscos diferentes.",
      },
      {
        title: "Decisões e solução",
        text:
          "Como parte da experiência acontece dentro de um fornecedor externo, também foi necessário pensar em comunicação fora do app para cenários em que o usuário perde o acesso à conta.",
        takeaway: "A solução inclui interface, escrita e continuidade de serviço — não apenas uma tela de erro.",
      },
      {
        title: "Evidências, aprendizados e resultado",
        text:
          "O trabalho resultou em respostas diferentes para falhas recuperáveis, situações críticas e bloqueio preventivo. Em jornadas de segurança, clareza é parte da proteção. Evidências e resultados detalhados não são publicados sem autorização.",
        takeaway: "O usuário precisa saber o que pode fazer sem receber informação que enfraqueça o processo.",
      },
      {
        title: "Próximos passos",
        text:
          "A evolução específica do fluxo depende de dados e decisões internas. O case mantém essa lacuna explícita até que exista conteúdo autorizado para publicação.",
        takeaway: "Não publicar uma promessa é mais confiável do que transformar uma hipótese em resultado.",
      },
    ],
  },
  {
    slug: "dirige-brasil",
    index: "04",
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
