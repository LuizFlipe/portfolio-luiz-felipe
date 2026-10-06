import { useState } from "react";
import { ArrowUpRight, Monitor, Play, Smartphone, Image, ArrowLeft, ArrowRight } from "lucide-react";
import type { PortfolioCase } from "../data/portfolio";

export default function CaseExplorer({ project, url }: { project: PortfolioCase; url: string }) {
  const [step, setStep] = useState(0);
  const [live, setLive] = useState(false);
  const [mobile, setMobile] = useState(false);
  const stops = project.interactive ?? [];
  const current = stops[step];
  if (!current) return null;
  const destination = `${url}#${current.anchor}`;

  return (
    <section className="case-explorer section-space" id="explorar" aria-labelledby="explorer-title">
      <div className="page-shell">
        <div className="explorer-heading">
          <div><span className="section-label">EXPLORE / NÃO SÓ OBSERVE</span><h2 id="explorer-title">Entre na experiência.</h2></div>
          <p>Escolha um momento do projeto ou navegue pelo site de verdade, sem sair do case.</p>
        </div>
        <div className="explorer-stops" aria-label="Momentos do projeto">
          {stops.map((stop, i) => <button key={stop.anchor} type="button" aria-pressed={step === i} onClick={() => setStep(i)}><span>0{i + 1}</span>{stop.label}</button>)}
        </div>
        <div className="explorer-toolbar">
          <div className="explorer-modes" aria-label="Modo de exploração">
            <button type="button" aria-pressed={!live} onClick={() => setLive(false)}><Image size={16} />Tour visual</button>
            <button type="button" aria-pressed={live} onClick={() => setLive(true)}><Play size={16} />Site ao vivo</button>
          </div>
          {live && <div className="explorer-devices" aria-label="Largura da prévia">
            <button type="button" aria-label="Prévia ampla" aria-pressed={!mobile} onClick={() => setMobile(false)}><Monitor size={18} /></button>
            <button type="button" aria-label="Prévia de celular" aria-pressed={mobile} onClick={() => setMobile(true)}><Smartphone size={18} /></button>
          </div>}
          <a href={destination} target="_blank" rel="noreferrer">Abrir site <ArrowUpRight size={16} /></a>
        </div>
        <div className={`explorer-stage ${live ? "is-live" : ""} ${live && mobile ? "is-mobile" : ""}`}>
          {live ? <iframe key={destination} src={destination} title={`LUMÉA interativo — ${current.label}`} referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> :
            <img src={current.image} alt={`Interface LUMÉA: ${current.label}`} decoding="async" />}
        </div>
        <div className="explorer-caption">
          <div aria-live="polite"><span>0{step + 1} / 0{stops.length}</span><h3>{current.label}</h3><p>{current.description}</p></div>
          <div className="explorer-arrows">
            <button type="button" aria-label="Momento anterior" disabled={step === 0} onClick={() => setStep(step - 1)}><ArrowLeft size={20} /></button>
            <button type="button" aria-label="Próximo momento" disabled={step === stops.length - 1} onClick={() => setStep(step + 1)}><ArrowRight size={20} /></button>
          </div>
        </div>
        {live && <p className="explorer-hint">Role e interaja dentro da prévia. Se ela não abrir, use “Abrir site”.</p>}
        <p className="explorer-disclaimer">Projeto conceitual. Clínica, profissional, imagens de resultados e depoimentos são demonstrativos.</p>
      </div>
    </section>
  );
}
