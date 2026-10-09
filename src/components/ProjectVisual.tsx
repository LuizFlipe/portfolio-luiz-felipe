type VisualKind = "bravus" | "fluxo" | "dimo" | "consignado" | "caf" | "data" | "dirige" | "clinica" | "malia" | "lumea" | "ale";

export default function ProjectVisual({ kind, compact = false }: { kind: VisualKind; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${kind} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      {kind === "ale" && (
        <div
          className="absolute inset-0 overflow-hidden rounded-[inherit] text-white"
          style={{
            background:
              "radial-gradient(circle at 78% 18%, rgba(139,92,246,.28), transparent 28%), radial-gradient(circle at 18% 82%, rgba(96,165,250,.10), transparent 30%), linear-gradient(135deg, #17131e 0%, #0e0d12 58%, #121019 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />

          <div className="absolute left-[6%] top-[8%] z-10 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/25 bg-white/[0.04] text-xs font-semibold tracking-[0.14em] text-violet-200">
              EA
            </span>
            <div>
              <span className="block text-[10px] font-medium uppercase tracking-[0.28em] text-white/55 sm:text-xs">
                Emerson Alexandre
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/30">
                Psicologia clínica · Sexologia · CRP 06/211058
              </span>
            </div>
          </div>

          <div className="absolute left-[6%] top-[29%] z-10 max-w-[62%]">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-violet-300 sm:text-xs">
              PRESENÇA DIGITAL / UX PARA SAÚDE
            </p>
            <strong className="block max-w-4xl text-[clamp(2.5rem,5vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Informação clara para conversas que importam.
            </strong>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
              Uma experiência digital pensada para comunicar temas sensíveis com clareza,
              acolhimento e confiança antes do primeiro contato.
            </p>
          </div>

          <div className="absolute bottom-[8%] left-[6%] z-10 flex flex-wrap gap-2">
            {["UX Strategy", "Content Design", "Information Architecture", "UI Design"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-white/58 sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="absolute right-[4%] top-[13%] hidden h-[74%] w-[30%] min-w-[250px] lg:block">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.025]" />
            <div className="absolute left-7 top-7 text-[9px] uppercase tracking-[0.22em] text-white/28">
              DIGITAL EXPERIENCE
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="select-none text-[clamp(8rem,16vw,15rem)] font-black leading-none tracking-[-0.09em] text-transparent"
                style={{ WebkitTextStroke: "1px rgba(196,181,253,.24)" }}
              >
                EA
              </span>
            </div>
            <div className="absolute bottom-7 left-7 right-7">
              <div className="mb-3 h-px bg-white/10" />
              <div className="flex items-end justify-between gap-4">
                <div>
                  <span className="block text-[8px] uppercase tracking-[0.18em] text-white/25">FOCO</span>
                  <strong className="mt-1 block text-sm font-medium text-white/72">
                    Clareza · confiança · acolhimento
                  </strong>
                </div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-violet-200/70">2026</span>
              </div>
            </div>
          </div>

          <div className="absolute right-[6%] top-[23%] hidden h-40 w-40 rounded-full border border-violet-300/10 md:block lg:hidden" />
          <div className="absolute right-[12%] top-[36%] hidden h-20 w-20 rounded-full border border-white/10 md:block lg:hidden" />

          {compact && (
            <span className="absolute right-[5%] top-[7%] z-20 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-white/45">
              Case web
            </span>
          )}
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
