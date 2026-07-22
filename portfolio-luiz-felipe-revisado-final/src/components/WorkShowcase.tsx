import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "../data/portfolio";
import ProjectVisual from "./ProjectVisual";

const reelProjects = [...cases, ...cases];

const volumeItems = [
  { title: "Bravus", label: "Web · Agendamento", visual: "bravus", size: "wide" },
  { title: "Fluxo", label: "Mobile · Fintech", visual: "fluxo", size: "tall" },
  { title: "Dimo Wallet", label: "Mobile · Fintech", visual: "dimo", size: "wide" },
  { title: "Contratação CLT", label: "Discovery · Jornada", visual: "consignado", size: "standard" },
  { title: "Active BI", label: "Dashboard · Dados", visual: "data", size: "tall" },
  { title: "Validação CAF", label: "Onboarding · Trust", visual: "caf", size: "standard" },
  { title: "Dirige Brasil", label: "Produto 0→1 · Mobile", visual: "dirige", size: "wide" },
  { title: "Fluxos financeiros", label: "UX Writing · Produto", visual: "consignado", size: "standard" },
  { title: "Indicadores executivos", label: "B2B · Data Experience", visual: "data", size: "standard" },
  { title: "Conta digital", label: "Interface · Design System", visual: "dimo", size: "tall" },
  { title: "Segurança sem atrito", label: "Pesquisa · Onboarding", visual: "caf", size: "wide" },
  { title: "Mobilidade e serviço", label: "MVP · Service Design", visual: "dirige", size: "standard" },
] as const;

export function ScreenReel() {
  return (
    <section className="screen-showcase section-space border-y border-white/10">
      <div className="page-shell">
        <div className="section-label">INTERFACE REEL / TELAS EM MOVIMENTO</div>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="section-heading max-w-4xl">
            Um recorte vivo do <span className="text-violet-400">meu trabalho.</span>
          </h2>
          <p className="max-w-sm text-sm leading-7 text-white/45">
            Produtos mobile, fluxos, dashboards e experiências que continuam evoluindo depois do lançamento.
          </p>
        </div>
      </div>

      <div className="showcase-device">
        <div className="showcase-camera" />
        <div className="showcase-screen">
          <div className="screen-reel-track">
            {reelProjects.map((project, index) => (
              <Link
                to={`/case/${project.slug}`}
                className="screen-reel-card"
                key={`${project.slug}-${index}`}
                aria-hidden={index >= cases.length}
                tabIndex={index >= cases.length ? -1 : 0}
              >
                <ProjectVisual kind={project.visual} compact />
                <div className="screen-reel-caption">
                  <div>
                    <span>{project.eyebrow}</span>
                    <strong>{project.title}</strong>
                  </div>
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="showcase-home-indicator" />
      </div>
    </section>
  );
}

export function VolumeGallery() {
  return (
    <section className="volume-gallery section-space">
      <div className="page-shell">
        <div className="volume-intro">
          <span>ARQUIVO VISUAL / EXPLORAÇÕES E ENTREGAS</span>
          <h2>
            Um portfólio, <em>dezenas de projetos.</em>
          </h2>
          <p>
            Nem todo trabalho precisa virar um estudo de caso longo. Esta é uma amostra de telas,
            direções visuais e problemas que já passaram pela minha mesa.
          </p>
        </div>

        <div className="volume-grid">
          {volumeItems.map((item, index) => (
            <article className={`volume-card volume-${item.size} volume-card-${index + 1}`} key={`${item.title}-${index}`}>
              <div className="volume-visual">
                <ProjectVisual kind={item.visual} compact />
              </div>
              <div className="volume-caption">
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                </div>
                <small>{item.label}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
