type VisualKind = "bravus" | "fluxo" | "dimo" | "consignado" | "caf" | "data" | "dirige" | "clinica" | "malia" | "lumea" | "ale";

export default function ProjectVisual({ kind, compact = false }: { kind: VisualKind; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${kind} ${compact ? "is-compact" : ""}`} aria-hidden="true">
      {kind === "ale" && (
        <div className="absolute inset-0 overflow-hidden rounded-[inherit] bg-[#0f0d14] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(139,92,246,0.22),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(59,130,246,0.10),transparent_28%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

          <div className="absolute left-[6%] top-[8%] flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-xs font-semibold tracking-[0.12em] text-violet-200">
              EA
            </span>
            <div>
              <span className="block text-[10px] font-medium uppercase tracking-[0.24em] text-white/45 sm:text-xs">
                Psicologia clínica · Sexologia
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.18em] text-white/25">
                CRP 06/211058
              </span>
            </div>
          </div>

          <div className="absolute left-[6%] top-[28%] z-10 max-w-[52%]">
            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-violet-300 sm:text-xs">
              Presença digital com acolhimento
            </p>
            <strong className="block max-w-2xl text-[clamp(2rem,4.4vw,4.9rem)] font-medium leading-[0.98] tracking-[-0.045em]">
              Um espaço para falar sobre desejo, vínculos e relações.
            </strong>
            <p className="mt-5 max-w-xl text-xs leading-6 text-white/45 sm:text-sm">
              Informação clara, presença profissional e um caminho simples para o primeiro contato.
            </p>
          </div>

          <div className="absolute bottom-[8%] left-[6%] z-10 flex flex-wrap gap-2">
            {["Sexualidade", "Desejo", "Vínculos", "Relações"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-white/55 sm:px-4 sm:text-[10px]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="absolute right-[5%] top-[12%] hidden h-[76%] w-[32%] min-w-[230px] overflow-hidden rounded-[28px] border border-white/10 bg-[#17141d]/95 shadow-2xl lg:block">
            <div className="flex h-12 items-center gap-2 border-b border-white/10 px-4">
              <i className="h-2 w-2 rounded-full bg-white/20" />
              <i className="h-2 w-2 rounded-full bg-white/10" />
              <i className="h-2 w-2 rounded-full bg-white/10" />
              <span className="ml-auto text-[8px] uppercase tracking-[0.16em] text-white/25">psicologoale</span>
            </div>

            <div className="px-6 py-7">
              <span className="text-[9px] uppercase tracking-[0.22em] text-violet-300/80">
                Emerson Alexandre
              </span>
              <h4 className="mt-4 text-2xl font-medium leading-tight">
                Um lugar seguro para conversas que importam.
              </h4>
              <p className="mt-4 text-[11px] leading-5 text-white/40">
                Sexualidade, desejo, vínculos e relações com escuta profissional e informação clara.
              </p>

              <div className="mt-7 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">Atuação</span>
                  <strong className="mt-1 block text-sm font-medium">Psicologia clínica e sexologia</strong>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-white/30">Abordagem digital</span>
                  <strong className="mt-1 block text-sm font-medium">Clareza antes do primeiro contato</strong>
                </div>
              </div>

              <div className="mt-7 inline-flex rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-4 py-2 text-[9px] uppercase tracking-[0.14em] text-violet-200">
                Ver experiência
              </div>
            </div>
          </div>

          <div className="absolute right-[7%] top-[22%] hidden h-40 w-40 rounded-full border border-white/[0.05] md:block lg:hidden" />
          <div className="absolute right-[12%] top-[31%] hidden h-24 w-24 rounded-full border border-violet-300/10 md:block lg:hidden" />

          {compact && (
            <span className="absolute right-[5%] top-[7%] rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-white/45">
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
