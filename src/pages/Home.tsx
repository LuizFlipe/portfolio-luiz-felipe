import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Circle,
  LayoutDashboard,
  PanelsTopLeft,
  Smartphone,
  Store,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectVisual from "../components/ProjectVisual";
import Seo from "../components/Seo";
import { emailUrl, siteConfig, whatsappUrl } from "../config/site";
import { brands, cases, experience } from "../data/portfolio";

const selectedSlugs = [
  "bravus-agendamento",
  "fluxo-financas-pessoais",
  "clinica-viver-bem",
  "malia-moda-zl",
];

const selectedCases = selectedSlugs
  .map((slug) => cases.find((project) => project.slug === slug))
  .filter((project): project is (typeof cases)[number] => Boolean(project));

const otherCases = cases.filter((project) => !selectedSlugs.includes(project.slug));

const services = [
  {
    icon: Store,
    title: "Sites institucionais",
    text: "Apresente seu negócio com clareza e transforme visitas em conversas e pedidos.",
  },
  {
    icon: PanelsTopLeft,
    title: "Landing pages",
    text: "Divulgue uma oferta específica com uma página direta, rápida e preparada para converter.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento online",
    text: "Permita que seus clientes consultem e reservem horários pelo celular.",
  },
  {
    icon: Utensils,
    title: "Cardápio e delivery",
    text: "Receba mais pedidos sem depender apenas das redes sociais.",
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas internos simples",
    text: "Organize serviços, preços e informações em um único lugar.",
  },
  {
    icon: Smartphone,
    title: "Protótipos funcionais",
    text: "Teste uma ideia na prática antes de investir no desenvolvimento completo.",
  },
];

const homeDescription =
  "Portfólio de Luiz Felipe, Product Designer com experiência em produtos financeiros, mobile, pesquisa, estratégia e interfaces orientadas por dados.";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: siteConfig.email,
    url: siteConfig.canonicalBaseUrl || undefined,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  };

  return (
    <Layout>
      <Seo
        title="Luiz Felipe — Product Designer"
        description={homeDescription}
        path="/"
        image="/og/home.png"
        jsonLd={personSchema}
      />

      <section className="hero-section">
        <div className="page-shell relative z-10 pt-36 sm:pt-44">
          <div className="hero-statusbar mb-8 flex flex-wrap items-center justify-between gap-4 pb-5">
            <span>LUIZ FELIPE / PRODUCT DESIGNER / ZL-SP</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              DISPONÍVEL PARA NOVOS PROJETOS
            </span>
          </div>

          <div className="hero-signal hero-signal-wide">
            <div className="hero-primary">
              <p className="hero-eyebrow">DESIGN DE PRODUTO · PESQUISA · ESTRATÉGIA · INTERFACE</p>
              <h1 className="hero-title">
                <span>PRODUTOS</span>
                <span className="outline-text">CLAROS.</span>
                <span>EXPERIÊNCIAS</span>
                <span className="text-violet-400">MEMORÁVEIS.</span>
              </h1>

              <div className="hero-intro hero-intro-refined">
                <div>
                  <p className="hero-specialty">
                    Product Designer com experiência em produtos financeiros, mobile, pesquisa,
                    estratégia e interfaces orientadas por dados.
                  </p>
                  <p>Transformo problemas complexos em experiências digitais simples, humanas e confiáveis.</p>
                </div>
                <div>
                  <a href="#projetos" className="signal-button signal-button-primary">
                    Ver cases
                    <ArrowDown size={16} />
                  </a>
                  <a href="#servicos" className="signal-button">
                    Tenho um projeto
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-capabilities" aria-label="Áreas de atuação">
            <span>01 / Research</span>
            <span>02 / Product Strategy</span>
            <span>03 / UX & UI</span>
            <span>04 / Design Systems</span>
          </div>
        </div>

        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
      </section>

      <section className="proof-section border-y border-white/10" aria-labelledby="proof-title">
        <div className="page-shell proof-layout">
          <div>
            <span className="section-label">EXPERIÊNCIA / CONTEXTO</span>
            <h2 id="proof-title">Experiência em projetos para</h2>
            <p>
              Produtos financeiros, dados e experiências B2B construídos em contextos e equipes diferentes.
            </p>
          </div>
          <div className="brand-proof-list" aria-label="Marcas relacionadas a projetos">
            {brands.map((brand) => (
              <span key={brand}>
                {brand}
                <Circle size={5} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="section-space">
        <div className="page-shell">
          <div className="section-label">01 / CASES SELECIONADOS</div>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-heading max-w-4xl">
              Problemas diversos. <span className="text-violet-400">Decisões explicadas.</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              Uma seleção curta de trabalhos profissionais e conceituais, com contexto, processo e limites claramente sinalizados.
            </p>
          </div>

          <div className="project-grid mt-16">
            {selectedCases.map((project) => (
              <Link key={project.slug} to={`/case/${project.slug}`} className="project-card group">
                <div className="project-meta">
                  <span>{project.index}</span>
                  <span>CASE STUDY</span>
                  <span>{project.eyebrow}</span>
                  {project.nda && <span>NDA / detalhes adaptados</span>}
                </div>
                <div className="project-card-body">
                  <div className="project-card-copy flex flex-col justify-between gap-10 py-3">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>
                    <div>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => <span key={tag} className="mini-tag">{tag}</span>)}
                      </div>
                      <span className="project-link">Explorar o processo <ArrowRight size={18} /></span>
                    </div>
                  </div>
                  <ProjectVisual kind={project.visual} compact />
                </div>
              </Link>
            ))}
          </div>

          <div className="other-projects">
            <div>
              <span className="section-label">OUTROS PROJETOS</span>
              <p>Outros recortes do meu trabalho, sem repetir a galeria principal.</p>
            </div>
            <div>
              {otherCases.map((project) => (
                <Link to={`/case/${project.slug}`} key={project.slug}>
                  <span>{project.index}</span>
                  <strong>{project.title}</strong>
                  <small>{project.eyebrow}</small>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="local-services section-space border-y border-white/10">
        <div className="page-shell">
          <div className="section-label">02 / PARA PEQUENOS NEGÓCIOS</div>
          <div className="services-heading">
            <h2>Soluções para <span>negócios locais</span></h2>
            <p>
              Além de produtos digitais, desenvolvo soluções práticas para pequenos negócios
              venderem, atenderem e organizarem melhor seus serviços.
            </p>
          </div>

          <div className="services-grid">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article className="service-card" key={title}>
                <div><span>{String(index + 1).padStart(2, "0")}</span><Icon size={22} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="services-cta">
            <div>
              <strong>Quer organizar uma ideia ou melhorar um serviço?</strong>
              <span>Podemos começar por uma conversa curta e sem linguagem técnica.</span>
            </div>
            <div>
              <a
                href={whatsappUrl("Olá, Luiz! Vi seu portfólio e gostaria de conversar sobre meu negócio.")}
                target="_blank"
                rel="noreferrer"
                className="contact-button primary"
                aria-label="Conversar sobre meu negócio pelo WhatsApp"
              >
                Conversar sobre meu negócio
                <ArrowUpRight size={18} />
              </a>
              <a href={emailUrl("Projeto para negócio local")} className="contact-button">
                Prefiro e-mail
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section-space">
        <div className="page-shell">
          <div className="section-label">03 / EXPERIÊNCIA PROFISSIONAL</div>
          <div className="experience-summary">
            <h2>Experiência acumulada em Product Design e UX/UI desde 2022</h2>
            <p>Atuação em produto financeiro mobile e produtos orientados por dados.</p>
          </div>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {experience.map((item) => (
              <div key={item.company} className="experience-row">
                <span>{item.period}</span>
                <div><h3>{item.role}</h3><p>{item.company}</p></div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about section-space border-y border-white/10">
        <div className="page-shell home-about-grid">
          <div>
            <span className="section-label">04 / SOBRE</span>
            <h2>Produto, repertório e realidade de uso.</h2>
          </div>
          <div>
            <p>
              Sou Luiz Felipe, Product Designer da Zona Leste de São Paulo. Minha origem,
              os jogos, a cultura pop e o esporte influenciam a forma como observo sistemas,
              escuto pessoas e desenho experiências mais humanas.
            </p>
            <Link to="/sobre" className="about-more-link">
              Conhecer minha história <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section id="contato" className="section-space pt-10">
        <div className="page-shell">
          <div className="contact-panel">
            <div className="relative z-10">
              <span className="section-label border-white/20 text-white/60">05 / CONTATO</span>
              <h2>TEM UM PROBLEMA<br />INTERESSANTE PARA<br /><span>RESOLVER?</span></h2>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href={emailUrl("Contato pelo portfólio")} className="contact-button primary">
                  Vamos conversar <ArrowUpRight size={18} />
                </a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="contact-button">
                  LinkedIn <ArrowUpRight size={18} />
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="contact-button">
                  Instagram <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="contact-orbit" aria-hidden="true">
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="orbit-dot" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
