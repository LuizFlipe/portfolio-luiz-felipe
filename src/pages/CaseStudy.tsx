import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Maximize2,
  X,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectVisual from "../components/ProjectVisual";
import Seo from "../components/Seo";
import { emailUrl, siteConfig } from "../config/site";
import { cases } from "../data/portfolio";

export default function CaseStudy() {
  const { slug } = useParams();
  const projectIndex = cases.findIndex((item) => item.slug === slug);
  const project = cases[projectIndex];
  const [activeSection, setActiveSection] = useState(0);
  const [activeScreen, setActiveScreen] = useState<number | null>(null);
  const [galleryPosition, setGalleryPosition] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const lightboxTouchStartRef = useRef({ x: 0, y: 0 });

  const externalUrl = project?.externalProject
    ? siteConfig.externalProjects[project.externalProject]
    : "";

  const caseSchema = useMemo(() => project ? ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: { "@type": "Person", name: siteConfig.name },
    keywords: project.tags.join(", "),
  }) : undefined, [project]);

  const galleryCount = project?.gallery?.length ?? 0;

  const goToGalleryScreen = (target: number) => {
    const gallery = galleryRef.current;
    if (!gallery || galleryCount === 0) return;

    const nextPosition = Math.max(0, Math.min(target, galleryCount - 1));
    const card = gallery.children.item(nextPosition) as HTMLElement | null;
    if (!card) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gallery.scrollTo({
      left: card.offsetLeft - gallery.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setGalleryPosition(nextPosition);
  };

  const syncGalleryPosition = () => {
    const gallery = galleryRef.current;
    if (!gallery || gallery.children.length === 0) return;

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(gallery.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const cardStart = card.offsetLeft - gallery.offsetLeft;
      const distance = Math.abs(gallery.scrollLeft - cardStart);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setGalleryPosition(closestIndex);
  };

  const showPreviousScreen = () => {
    if (!project?.gallery || activeScreen === null) return;
    setActiveScreen((activeScreen - 1 + project.gallery.length) % project.gallery.length);
  };

  const showNextScreen = () => {
    if (!project?.gallery || activeScreen === null) return;
    setActiveScreen((activeScreen + 1) % project.gallery.length);
  };

  useEffect(() => {
    if (!project) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-case-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(Number((visible.target as HTMLElement).dataset.caseSection ?? 0));
        }
      },
      { rootMargin: "-24% 0px -52%", threshold: [0.08, 0.35, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [project]);

  useEffect(() => {
    if (activeScreen === null) return;
    window.setTimeout(() => lightboxCloseRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveScreen(null);
      if (!project?.gallery) return;
      if (event.key === "ArrowRight") {
        setActiveScreen((current) => current === null ? 0 : (current + 1) % project.gallery!.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveScreen((current) => current === null
          ? 0
          : (current - 1 + project.gallery!.length) % project.gallery!.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      returnFocusRef.current?.focus();
    };
  }, [activeScreen, project]);

  useEffect(() => {
    setGalleryPosition(0);
    galleryRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [project?.slug]);

  if (!project) {
    return (
      <Layout>
        <div className="page-shell flex min-h-screen items-center justify-center pt-28">
          <div className="text-center">
            <p className="text-white/40">Case não encontrado.</p>
            <Link to="/" className="mt-5 inline-flex text-violet-300">Voltar para a home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const nextProject = cases[(projectIndex + 1) % cases.length];

  return (
    <Layout>
      <article>
        <Seo
          title={`${project.title} | Luiz Felipe`}
          description={project.summary}
          path={`/case/${project.slug}`}
          image={project.shareImage ?? "/og/home.png"}
          jsonLd={caseSchema}
        />
        <header className="case-hero">
          <div className="page-shell pt-36 sm:pt-44">
            <Link to="/#projetos" className="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
              <ArrowLeft size={16} />
              Voltar aos projetos
            </Link>

            <div className="case-meta-line">
              <span>{project.index}</span>
              <span>{project.eyebrow}</span>
              {project.nda && <span>Conteúdo adaptado por NDA</span>}
            </div>

            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="skill-pill">{tag}</span>
              ))}
            </div>

            {project.facts && (
              <dl className="case-facts" aria-label="Informações do case">
                {project.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noreferrer"
                className="case-live-link"
              >
                Abrir experiência pública
                <ArrowUpRight size={17} />
              </a>
            )}

            <div className="mt-16">
              <ProjectVisual kind={project.visual} />
            </div>

            <a className="case-scroll-cue" href="#visao-geral">
              Explorar o processo
              <ArrowDown size={16} />
            </a>
          </div>
        </header>

        <section className="section-space case-overview" id="visao-geral">
          <div className="page-shell">
            <div className="case-overview-head">
              <div>
                <span className="case-chapter-index">01</span>
                <h2>Para entender rápido</h2>
              </div>
              <p>O essencial para quem quer compreender o problema, minha atuação e a entrega em poucos minutos.</p>
            </div>

            <div className="case-overview-grid">
              {[
                ["Ponto de dor", project.quick.problem],
                ["Meu papel", project.quick.role],
                ["Processo", project.quick.process],
                ["Resultado", project.quick.result],
              ].map(([title, text], index) => (
                <article key={title} className="case-overview-card">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {project.gallery && (
          <section className={`case-gallery-section case-gallery-${project.visual} section-space`}>
            <div className="page-shell">
              <div className="case-gallery-heading">
                <div>
                  <span className="case-chapter-index">02</span>
                  <h2>O produto em ação</h2>
                </div>
                <p>Explore as telas. Clique em qualquer interface para ampliar e navegar pelos detalhes.</p>
              </div>

              <div className="case-gallery-toolbar">
                <p>Arraste para o lado ou use as setas.</p>
                <div className="case-gallery-controls" aria-label="Controles do carrossel de telas">
                  <span aria-live="polite">
                    {String(galleryPosition + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    onClick={() => goToGalleryScreen(galleryPosition - 1)}
                    disabled={galleryPosition === 0}
                    aria-label="Ver tela anterior"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToGalleryScreen(galleryPosition + 1)}
                    disabled={galleryPosition === project.gallery.length - 1}
                    aria-label="Ver próxima tela"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div
                ref={galleryRef}
                className="case-screen-grid"
                onScroll={syncGalleryPosition}
                role="region"
                aria-label={`Carrossel com ${project.gallery.length} telas do projeto`}
              >
                {project.gallery.map((screen, index) => (
                  <button
                    type="button"
                    className="case-screen-card"
                    key={screen.src}
                    onClick={(event) => {
                      returnFocusRef.current = event.currentTarget;
                      setActiveScreen(index);
                    }}
                    aria-label={`Ampliar ${screen.caption}`}
                  >
                    <div className="case-screen-topline">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <small>INTERFACE / PRODUTO</small>
                      <Maximize2 size={14} />
                    </div>
                    <img src={screen.src} alt={screen.alt} loading="lazy" decoding="async" />
                    <span className="case-screen-caption">{screen.caption}</span>
                  </button>
                ))}
              </div>

              <div className="case-gallery-pagination" aria-label="Escolher tela do carrossel">
                {project.gallery.map((screen, index) => (
                  <button
                    type="button"
                    key={screen.src}
                    className={galleryPosition === index ? "is-active" : ""}
                    onClick={() => goToGalleryScreen(index)}
                    aria-label={`Ir para a tela ${index + 1}: ${screen.caption}`}
                    aria-current={galleryPosition === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="case-narrative">
          <div className="page-shell case-narrative-layout">
            <aside className="case-chapter-nav" aria-label="Navegação pelos capítulos do case">
              <span>PROCESSO / {project.index}</span>
              <nav>
                {project.sections.map((section, index) => (
                  <a
                    key={section.title}
                    href={`#capitulo-${index + 1}`}
                    className={activeSection === index ? "is-active" : ""}
                  >
                    <i>{String(index + 1).padStart(2, "0")}</i>
                    <b>{section.title}</b>
                  </a>
                ))}
              </nav>
            </aside>

            <div className="case-content">
              {project.sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`capitulo-${index + 1}`}
                  className="case-section"
                  data-case-section={index}
                >
                  <div className="case-section-heading">
                    <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
                    <small>{index === project.sections.length - 1 ? "FECHAMENTO" : "DECISÃO DE DESIGN"}</small>
                  </div>
                  <div className="case-section-body">
                    <h2>{section.title}</h2>
                    <p className="case-section-lead">{section.text}</p>
                    {section.bullets && (
                      <ul className="case-decision-list">
                        {section.bullets.map((item) => (
                          <li key={item}><Check size={16} />{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.takeaway && (
                      <div className="case-section-note">
                        <span>{String(index + 1).padStart(2, "0")} / {String(project.sections.length).padStart(2, "0")}</span>
                        <p>{section.takeaway}</p>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-14">
          <div className="page-shell">
            <Link to={`/case/${nextProject.slug}`} className="next-case group">
              <span>PRÓXIMO CASE</span>
              <div>
                <h2>{nextProject.title}</h2>
                <ArrowRight className="transition group-hover:translate-x-2" size={34} />
              </div>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="page-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-white/35">CONTATO / VAMOS CONVERSAR</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Tem um problema interessante?</h2>
            </div>
            <a href={emailUrl(`Contato sobre o case ${project.title}`)} className="contact-button primary">
              Falar comigo
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </article>

      {activeScreen !== null && project.gallery && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da interface"
          onTouchStart={(event) => {
            const touch = event.touches[0];
            lightboxTouchStartRef.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={(event) => {
            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - lightboxTouchStartRef.current.x;
            const deltaY = touch.clientY - lightboxTouchStartRef.current.y;
            if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
            if (deltaX > 0) showPreviousScreen();
            else showNextScreen();
          }}
        >
          <button
            ref={lightboxCloseRef}
            className="case-lightbox-close"
            type="button"
            onClick={() => setActiveScreen(null)}
          >
            Fechar
            <X size={18} />
          </button>
          <button
            className="case-lightbox-arrow case-lightbox-prev"
            type="button"
            onClick={showPreviousScreen}
            aria-label="Tela anterior"
          >
            <ArrowLeft />
          </button>
          <figure>
            <img
              src={project.gallery[activeScreen].src}
              alt={project.gallery[activeScreen].alt}
            />
            <figcaption>
              <span>{String(activeScreen + 1).padStart(2, "0")} / {String(project.gallery.length).padStart(2, "0")}</span>
              <strong>{project.gallery[activeScreen].caption}</strong>
            </figcaption>
          </figure>
          <button
            className="case-lightbox-arrow case-lightbox-next"
            type="button"
            onClick={showNextScreen}
            aria-label="Próxima tela"
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </Layout>
  );
}
