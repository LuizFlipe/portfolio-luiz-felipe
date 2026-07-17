import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProjectVisual from "../components/ProjectVisual";
import { cases } from "../data/portfolio";

export default function CaseStudy() {
  const { slug } = useParams();
  const projectIndex = cases.findIndex((item) => item.slug === slug);
  const project = cases[projectIndex];

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

            <div className="mt-16">
              <ProjectVisual kind={project.visual} />
            </div>
          </div>
        </header>

        <section className="section-space">
          <div className="page-shell">
            <div className="section-label">CASE HUD / PARA ENTENDER RÁPIDO</div>
            <div className="quick-grid">
              {[
                ["Problema", project.quick.problem],
                ["Meu papel", project.quick.role],
                ["Processo", project.quick.process],
                ["Resultado", project.quick.result],
              ].map(([title, text], index) => (
                <div key={title} className="quick-card">
                  <span>0{index + 1}</span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-28 sm:pb-36">
          <div className="page-shell">
            <div className="case-content">
              {project.sections.map((section, index) => (
                <section key={section.title} className="case-section">
                  <span className="case-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{section.title}</h2>
                    <p>{section.text}</p>
                    {section.bullets && (
                      <ul>
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
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
              <span>PRÓXIMA MISSÃO</span>
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
              <p className="text-sm uppercase tracking-[0.18em] text-white/35">NEW QUEST / VAMOS CONVERSAR</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Tem um problema interessante?</h2>
            </div>
            <a href="mailto:luiz.felipesantos11@gmail.com" className="contact-button primary">
              Falar comigo
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
