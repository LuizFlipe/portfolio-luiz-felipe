import { ArrowDown, ArrowRight, ArrowUpRight, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectVisual from "../components/ProjectVisual";
import { brands, cases, experience, skills } from "../data/portfolio";

export default function Home() {
  return (
    <Layout>
      <section className="hero-section">
        <div className="page-shell relative z-10 pt-36 sm:pt-44">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 text-xs uppercase tracking-[0.18em] text-white/45">
            <span>Product Designer • São Paulo</span>
            <span className="inline-flex items-center gap-2 text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              Aberto a projetos selecionados
            </span>
          </div>

          <h1 className="hero-title">
            <span>LUIZ</span>
            <span className="outline-text">FELIPE</span>
            <span>PRODUCT</span>
            <span className="text-violet-400">DESIGNER</span>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-white/10 pt-7 md:grid-cols-[1.1fr_.9fr]">
            <p className="max-w-2xl text-xl leading-relaxed text-white/75 sm:text-2xl">
              Criando produtos digitais que transformam problemas complexos em experiências simples.
            </p>
            <div className="flex flex-col justify-between gap-8 md:items-end">
              <p className="max-w-md text-sm leading-7 text-white/50 md:text-right">
                Product Designer Pleno com 5 anos de experiência em produto, pesquisa, estratégia e interface. Atualmente na Dimo, carteira digital da Motorola.
              </p>
              <a href="#projetos" className="inline-flex items-center gap-3 text-sm font-semibold text-violet-300">
                Ver projetos
                <span className="grid h-9 w-9 place-items-center rounded-full border border-violet-400/40">
                  <ArrowDown size={16} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
      </section>

      <section className="overflow-hidden border-y border-white/10 py-5">
        <div className="marquee-track">
          {[...brands, ...brands].map((brand, index) => (
            <span key={`${brand}-${index}`} className="flex items-center gap-6 whitespace-nowrap text-lg font-semibold text-white/40">
              {brand}
              <Circle size={5} className="fill-violet-400 text-violet-400" />
            </span>
          ))}
        </div>
      </section>

      <section id="sobre" className="section-space">
        <div className="page-shell">
          <div className="section-label">01 / Sobre</div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="sticky-copy">Produto, pesquisa, estratégia e interface.</p>
            </div>
            <div>
              <h2 className="section-heading">
                Eu gosto de entrar onde a experiência está <span className="text-violet-400">confusa</span> e sair com um caminho mais claro.
              </h2>

              <div className="mt-10 grid gap-8 text-base leading-8 text-white/55 md:grid-cols-2">
                <p>
                  Sou Luiz Felipe, Product Designer baseado em São Paulo. Trabalho com produtos digitais, aplicativos mobile, jornadas financeiras e interfaces orientadas por dados.
                </p>
                <p>
                  Minha base mistura UX, UI e entendimento de negócio. Hoje, meu foco está em produtos financeiros mobile — onde clareza, confiança e decisão precisam coexistir.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-white/[0.025]">
        <div className="page-shell">
          <div className="section-label">02 / Onde eu atuo</div>
          <div className="mt-10 grid">
            {[
              ["Fintech & serviços financeiros", "Jornadas onde confiança e clareza fazem parte do produto."],
              ["Produtos mobile", "Fluxos pensados para uso recorrente, contexto e continuidade."],
              ["Dashboards & Data Experience", "Informação organizada para apoiar decisões reais."],
              ["Produtos B2B", "Complexidade operacional transformada em interfaces utilizáveis."],
              ["UX Research & Discovery", "Perguntas melhores antes de soluções definitivas."],
            ].map(([title, text], index) => (
              <div key={title} className="expertise-row">
                <span className="text-xs text-white/35">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="expertise-arrow" size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="section-space">
        <div className="page-shell">
          <div className="section-label">03 / Cases selecionados</div>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="section-heading max-w-4xl">
              Problemas reais. <span className="text-violet-400">Decisões explicadas.</span>
            </h2>
            <p className="max-w-sm text-sm leading-7 text-white/45">
              Uma seleção de trabalhos em produto, pesquisa, segurança, dados e construção 0→1.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {cases.map((project) => (
              <Link key={project.slug} to={`/case/${project.slug}`} className="project-card group">
                <div className="project-meta">
                  <span>{project.index}</span>
                  <span>{project.eyebrow}</span>
                  {project.nda && <span>NDA / detalhes adaptados</span>}
                </div>

                <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-stretch">
                  <div className="flex flex-col justify-between gap-10 py-3">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>
                    </div>

                    <div>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="mini-tag">{tag}</span>
                        ))}
                      </div>
                      <span className="project-link">
                        Abrir case
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>

                  <ProjectVisual kind={project.visual} compact />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/10 bg-violet-500 text-white">
        <div className="page-shell">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/70">Um portfólio, várias linguagens</div>
              <h2 className="mt-5 max-w-5xl font-display text-[clamp(3.6rem,10vw,9rem)] leading-[.82] tracking-[-0.07em]">
                MOBILE.<br />DADOS.<br />PRODUTO.
              </h2>
            </div>
            <p className="max-w-md text-base leading-8 text-white/75">
              Minha experiência passa por fintech, dashboards, pesquisa, UX writing, serviços e produtos que começam do zero.
            </p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section-space">
        <div className="page-shell">
          <div className="section-label">04 / Experiência</div>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {experience.map((item) => (
              <div key={item.company} className="experience-row">
                <span>{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section-space pt-10">
        <div className="page-shell">
          <div className="contact-panel">
            <div className="relative z-10">
              <span className="section-label border-white/20 text-white/60">05 / Contato</span>
              <h2>
                TEM UM PROBLEMA<br />
                INTERESSANTE PARA<br />
                <span>RESOLVER?</span>
              </h2>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:luiz.felipesantos11@gmail.com" className="contact-button primary">
                  Vamos conversar
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/luiz-felipe-me/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button"
                >
                  LinkedIn
                  <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://www.instagram.com/luiz.felipedesign"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-button"
                >
                  Instagram
                  <ArrowUpRight size={18} />
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
