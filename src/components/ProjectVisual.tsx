type VisualKind = "bravus" | "fluxo" | "dimo" | "consignado" | "caf" | "data" | "dirige" | "clinica" | "malia" | "lumea" | "ale";

export default function ProjectVisual({ kind, compact = false }: { kind: VisualKind; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${kind} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      {kind === "ale" && (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] bg-[#111016]">
          <div className="absolute inset-0 flex items-stretch justify-stretch">
            <iframe
              src="https://psicologoale.lovable.app/"
              title="Prévia do site de Emerson Alexandre"
              loading="lazy"
              tabIndex={-1}
              className="border-0"
              style={{
                width: "125%",
                height: "125%",
                transform: "scale(.8)",
                transformOrigin: "top left",
                pointerEvents: "none",
              }}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9,9,11,.08) 0%, transparent 20%, transparent 72%, rgba(9,9,11,.42) 100%)",
            }}
          />

          <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-3 py-2 backdrop-blur-md sm:left-7 sm:top-7">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-[10px]">
              Emerson Alexandre
            </span>
            <small className="mt-1 block text-[8px] uppercase tracking-[0.16em] text-white/45">
              Psicologia clínica · Sexologia
            </small>
          </div>

          <div className="pointer-events-none absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-md sm:bottom-7 sm:left-7 sm:text-[10px]">
            Site institucional · UX/UI
          </div>

          <span className="pointer-events-none absolute bottom-5 right-5 rounded-full border border-white/15 bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-black sm:bottom-7 sm:right-7 sm:text-[10px]">
            {compact ? "Case interativo ↗" : "Site publicado ↗"}
          </span>
        </div>
      )}

      {kind === "lumea" && (
        <div className="lumea-cover">
          <img src="/images/lumea/hero.jpg" alt="" loading="lazy" decoding="async" />
          <div className="lumea-cover-copy"><span>L U M É A</span><strong>Estética que<br />começa em você.</strong><small>ESTÉTICA AVANÇADA / EXPERIÊNCIA DIGITAL</small></div>
          {compact && <span className="lumea-cover-badge">Case interativo ↗</span>}
        </div>
      )}
      {kind === "bravus" && (
        <>
          <div className="bravus-browser">
            <div className="bravus-browser-nav">
              <strong><i>B</i> BRAVUS</strong>
              <span>Serviços · Profissionais · Avaliações</span>
              <b>Agendar horário</b>
            </div>
            <div className="bravus-browser-hero">
              <small>ATENDIMENTO EM SOROCABA — SP</small>
              <h4>SEU ESTILO<br />COMEÇA COM UM<br /><em>BOM CORTE.</em></h4>
              <span>Agendar agora →</span>
            </div>
          </div>
          <div className="bravus-schedule">
            <span>AGENDAMENTO</span>
            <strong>Escolha seu horário</strong>
            <div><i>09:00</i><i>10:30</i><i>14:00</i></div>
          </div>
          <div className="visual-word">BOOKING</div>
        </>
      )}

      {kind === "fluxo" && (
        <>
          <div className="fluxo-phone fluxo-phone-a">
            <img src="/images/fluxo/home.webp" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="fluxo-phone fluxo-phone-b">
            <img src="/images/fluxo/relatorios.webp" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="fluxo-phone fluxo-phone-c">
            <img src="/images/fluxo/dicas-inteligentes.webp" alt="" loading="lazy" decoding="async" />
          </div>
          <div className="fluxo-signature">
            <strong>Fluxo</strong>
            <span>Seu assistente financeiro pessoal</span>
          </div>
          <div className="visual-word">FINANCE</div>
        </>
      )}

      {kind === "dimo" && (
        <>
          <div className="phone phone-a">
            <div className="phone-notch" />
            <span className="mini-label">Saldo disponível</span>
            <strong>R$ 4.280,00</strong>
            <div className="mini-row"><i /><i /><i /></div>
            <div className="mini-card" />
            <div className="mini-card short" />
          </div>
          <div className="phone phone-b">
            <div className="phone-notch" />
            <span className="mini-label">Sua conta</span>
            <div className="wallet-orb" />
            <div className="mini-card" />
            <div className="mini-line" />
          </div>
          <div className="visual-word">MOBILE</div>
        </>
      )}

      {kind === "consignado" && (
        <>
          <div className="chart-panel">
            <span className="mini-label">Jornada de contratação</span>
            <div className="funnel">
              <span style={{ width: "94%" }} />
              <span style={{ width: "67%" }} />
              <span style={{ width: "39%" }} />
              <span style={{ width: "18%" }} />
            </div>
          </div>
          <div className="floating-note">Por que as pessoas param aqui?</div>
          <div className="visual-word">DISCOVERY</div>
        </>
      )}

      {kind === "caf" && (
        <>
          <div className="face-frame">
            <div className="face-oval" />
            <span>Validação facial</span>
          </div>
          <div className="status-stack">
            <div className="status ok"><b>01</b><span>Sucesso</span></div>
            <div className="status retry"><b>02</b><span>Tentar novamente</span></div>
            <div className="status critical"><b>03</b><span>Fluxo interrompido</span></div>
          </div>
          <div className="visual-word">TRUST</div>
        </>
      )}

      {kind === "data" && (
        <>
          <div className="dash-grid">
            <div className="metric-card"><span>Performance</span><strong>+24%</strong></div>
            <div className="metric-card wide">
              <span>Visão consolidada</span>
              <div className="bars"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="metric-card tall">
              <span>Distribuição</span>
              <div className="donut" />
            </div>
            <div className="metric-card"><span>Indicadores</span><strong>12</strong></div>
          </div>
          <div className="visual-word">DATA</div>
        </>
      )}

      {kind === "dirige" && (
        <>
          <div className="map-card">
            <div className="route-line" />
            <i className="pin pin-a" />
            <i className="pin pin-b" />
            <span>Próxima aula</span>
            <strong>14:30</strong>
          </div>
          <div className="lesson-card">
            <span className="mini-label">Instrutor confirmado</span>
            <div className="avatar" />
            <strong>Aula prática</strong>
            <small>Hoje • Barra Funda</small>
          </div>
          <div className="visual-word">0→1</div>
        </>
      )}

      {kind === "clinica" && (
        <>
          <div className="clinica-browser">
            <img
              src="/images/clinica/hero.jpg"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="clinica-contact-card">
            <span>CONTATO / WHATSAPP</span>
            <strong>Solicitar agendamento</strong>
            <small>Informação clara antes do atendimento</small>
          </div>
          <div className="clinica-mark" aria-hidden="true"><b>VB</b><span>Viver Bem</span></div>
          <div className="visual-word">CARE</div>
        </>
      )}

      {kind === "malia" && (
        <>
          <div className="malia-browser">
            <img
              src="/images/malia/malia-home.jpg"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="malia-product-card">
            <span>MODA FEMININA / ZONA LESTE</span>
            <strong>Seu look. Do seu jeito.</strong>
            <small>Catálogo, produto e pedido pelo WhatsApp</small>
          </div>
          <div className="malia-mark" aria-hidden="true"><b>♛</b><span>MALIA</span></div>
          <div className="visual-word">FASHION</div>
        </>
      )}
    </div>
  );
}
