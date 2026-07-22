import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Headphones,
  Layers3,
  MapPin,
  ScanSearch,
  Trophy,
  Waypoints,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { emailUrl, spotifyTrackUrl } from "../config/site";

const currentTracks = [
  {
    title: "Us memo preto zica",
    artist: "Emicida, Amaro Freitas, Henrique Albino",
    id: "6zv9QgibOHQQUG9cGlqGaH",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0284f1175df9d3abb138372e5f",
  },
  {
    title: "Next To You",
    artist: "Bryson Tiller",
    id: "4t6kUc6KjUtb3rkgcv212X",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0245f9d84743d6498255d078f5",
  },
  {
    title: "De Lua",
    artist: "Ryan Fidelis",
    id: "2pnhhyzxoMArmMcsDUTIi8",
    cover: "https://image-cdn-fa.spotifycdn.com/image/ab67616d00001e02ca05b685bda04c2e6e50447a",
  },
];

function SpotifyMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.42a.62.62 0 0 1-.86.2c-2.36-1.44-5.33-1.77-8.83-.97a.62.62 0 1 1-.28-1.22c3.83-.87 7.12-.49 9.77 1.13.29.18.38.56.2.86Zm1.23-2.73a.78.78 0 0 1-1.07.26c-2.7-1.66-6.82-2.14-10.02-1.17a.78.78 0 1 1-.45-1.49c3.66-1.11 8.2-.57 11.28 1.32.37.23.48.71.26 1.08Zm.1-2.85C14.68 8.92 9.34 8.74 6.24 9.68a.94.94 0 0 1-.54-1.8c3.56-1.08 9.46-.87 13.18 1.34a.94.94 0 0 1-.96 1.62Z"
      />
    </svg>
  );
}

const principles = [
  {
    index: "01",
    title: "Repertório",
    text: "Referências não vêm apenas de telas. Elas vêm da rua, das conversas, dos jogos, do esporte e das histórias que escolho acompanhar.",
  },
  {
    index: "02",
    title: "Escuta",
    text: "Crescer em um lugar diverso me ensinou que pessoas vivem realidades muito diferentes. Antes de desenhar, eu tento entender.",
  },
  {
    index: "03",
    title: "Curiosidade",
    text: "Gosto de desmontar sistemas para descobrir como funcionam — seja um produto financeiro, uma narrativa ou uma mecânica de jogo.",
  },
  {
    index: "04",
    title: "Consistência",
    text: "Esporte me lembra que evolução raramente nasce de um único grande momento. Ela aparece na repetição, no ajuste e no trabalho coletivo.",
  },
];

const discoThoughts = [
  {
    index: "01",
    icon: ScanSearch,
    title: "Escolhas têm consequências",
    text: "Cada interação influencia o que o usuário entende e decide fazer depois.",
  },
  {
    index: "02",
    icon: Waypoints,
    title: "Sistemas também contam histórias",
    text: "Regras, feedbacks e restrições comunicam tanto quanto palavras e imagens.",
  },
  {
    index: "03",
    icon: Layers3,
    title: "Complexidade precisa continuar humana",
    text: "Mesmo em produtos cheios de regras, a experiência pertence a uma pessoa.",
  },
];

const discoChoices = [
  {
    id: "observar",
    action: "Observar",
    label: "Investigar antes de propor",
    response:
      "Passei a começar pelo contexto: observar sinais, tensões e comportamentos antes de desenhar uma resposta.",
  },
  {
    id: "questionar",
    action: "Questionar",
    label: "Não aceitar o primeiro problema",
    response:
      "O primeiro problema quase sempre é uma hipótese. Questioná-lo abre espaço para entender a necessidade real.",
  },
  {
    id: "conectar",
    action: "Conectar",
    label: "Entender como cada decisão afeta o todo",
    response:
      "Hoje penso no antes e no depois de cada interação. Uma tela isolada nunca explica toda a experiência.",
  },
];

export default function About() {
  const [activeDiscoChoice, setActiveDiscoChoice] = useState<string | null>(null);
  const selectedDiscoChoice = discoChoices.find((choice) => choice.id === activeDiscoChoice);

  return (
    <Layout>
      <Seo
        title="Sobre mim — Luiz Felipe, Product Designer"
        description="Conheça a origem, o repertório e os princípios que influenciam o trabalho de Product Design de Luiz Felipe."
        path="/sobre"
        image="/og/sobre.png"
      />
      <article className="about-page">
        <header className="about-hero">
          <div className="page-shell pt-36 sm:pt-44">
            <Link to="/#sobre" className="mb-12 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white">
              <ArrowLeft size={16} />
              Voltar ao portfólio
            </Link>

            <div className="about-kicker">
              <span>Sobre mim</span>
              <span>São Paulo · Zona Leste</span>
            </div>

            <div className="about-hero-composition">
              <div>
                <h1>
                  EU CRIO A PARTIR<br />
                  DO LUGAR DE ONDE<br />
                  <em>EU VIM.</em>
                </h1>

                <div className="about-intro">
                  <p>
                    Sou Luiz Felipe, Product Designer, filho da Zona Leste de São Paulo e alguém que
                    sempre encontrou criatividade no encontro entre pessoas, histórias e sistemas.
                  </p>
                  <p>
                    Meu trabalho carrega esse repertório: a atenção ao cotidiano, a vontade de tornar
                    o complexo mais acessível e a certeza de que um bom produto precisa conversar com
                    a vida real.
                  </p>
                </div>
              </div>

              <figure className="about-portrait">
                <img
                  src="/images/luiz-felipe.webp"
                  alt="Retrato de Luiz Felipe, Product Designer"
                  width="800"
                  height="800"
                  decoding="async"
                  fetchPriority="high"
                />
                <figcaption>
                  <span>LF / PRODUCT DESIGNER</span>
                  <small>SÃO PAULO · BRASIL</small>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="about-hero-grid" aria-hidden="true" />
          <span className="about-hero-mark" aria-hidden="true">ZL</span>
        </header>

        <section className="about-origin section-space">
          <div className="page-shell">
            <div className="about-story">
              <figure className="origin-stamp origin-photo">
                <img
                  src="/images/cidade-tiradentes.webp"
                  alt="Vista do bairro Cidade Tiradentes, na Zona Leste de São Paulo"
                  width="596"
                  height="335"
                  loading="lazy"
                  decoding="async"
                />
                <MapPin size={24} />
                <strong>
                  <span>CIDADE</span>
                  <span>TIRADENTES</span>
                </strong>
                <span>23°33′S · 46°32′W</span>
              </figure>
              <div className="about-copy">
                <span className="section-label">01 / ZONA LESTE</span>
                <h2>Minha origem não é só endereço. É uma forma de observar.</h2>
                <div className="about-copy-columns">
                  <p>
                    Vir da Zona Leste significa crescer cercado por contrastes, deslocamentos e
                    diferentes maneiras de fazer as coisas acontecerem. Isso me deu senso de
                    contexto e uma atenção especial para aquilo que costuma ser ignorado.
                  </p>
                  <p>
                    Profissionalmente, essa experiência aparece no cuidado com acessibilidade,
                    clareza e realidade de uso. Eu não desenho para uma pessoa abstrata: penso em
                    quem está com pressa, com dúvida, com pouca internet ou tomando uma decisão
                    importante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="culture-section section-space">
          <div className="page-shell">
            <div className="culture-grid">
              <div className="culture-copy about-feature">
                <span className="section-label">02 / GAMES & CULTURA POP</span>
                <h2>Imaginação também é ferramenta de trabalho.</h2>
                <p>
                  Games, cinema, música, quadrinhos e cultura pop sempre ampliaram meu repertório.
                  Eles me ensinaram sobre ritmo, atmosfera, personagens, escolhas e sobre como uma
                  interface pode desaparecer quando a experiência realmente envolve alguém.
                </p>
                <p>
                  Levo isso para o design sem transformar produto em espetáculo: uso narrativa para
                  dar contexto, hierarquia para criar ritmo e detalhes visuais para construir
                  personalidade.
                </p>
              </div>

              <div className="culture-index about-feature" aria-label="Repertório criativo">
                <div className="culture-index-head">
                  <span>REPERTÓRIO EM CAMADAS</span>
                  <small>LF / 04</small>
                </div>
                <blockquote>“E se o problema pudesse ser visto por outro ângulo?”</blockquote>
                <div className="culture-index-list">
                  <div><span>01</span><strong>Narrativa</strong><small>contexto e escolhas</small></div>
                  <div><span>02</span><strong>Atmosfera</strong><small>emoção e memória</small></div>
                  <div><span>03</span><strong>Sistemas</strong><small>regras e relações</small></div>
                  <div><span>04</span><strong>Ritmo</strong><small>hierarquia e fluxo</small></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="disco-elysium" className="disco-section section-space" aria-labelledby="disco-title">
          <div className="page-shell disco-editorial-grid">
            <figure className="disco-artwork about-feature">
              <div className="disco-artwork-media">
                <img
                  src="/images/about/disco-elysium-game.webp"
                  alt="Arte do jogo Disco Elysium enviada por Luiz Felipe"
                  width="512"
                  height="512"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="disco-artwork-overlay">
                <span>Referência pessoal / 01</span>
                <div>
                  <strong>Disco Elysium</strong>
                  <small>2019</small>
                </div>
              </div>
            </figure>

            <div className="disco-editorial-content">
              <header className="disco-copy about-feature">
                <span className="section-label">FORA DO EXPEDIENTE</span>
                <h2 id="disco-title">
                  Disco Elysium me ensinou a projetar escolhas, não apenas telas.
                </h2>
                <p>
                  Um mundo complexo não é construído apenas pela estética. Ele nasce de sistemas,
                  conflitos e pequenas decisões que mudam a forma como cada pessoa vive a experiência.
                </p>
              </header>

              <div className="disco-thoughts" aria-label="Pensamentos que influenciam meu processo">
                {discoThoughts.map((thought) => {
                  const ThoughtIcon = thought.icon;
                  return (
                    <article className="disco-thought" key={thought.index}>
                      <div className="disco-thought-meta">
                        <span>{thought.index}</span>
                        <ThoughtIcon size={19} strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <h3>{thought.title}</h3>
                        <p>{thought.text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="disco-dialogue about-feature">
                <div className="disco-dialogue-heading">
                  <span>DIÁLOGO INTERNO / PROCESSO</span>
                  <small>Escolha uma resposta</small>
                </div>
                <h3>O que esse jogo mudou no meu processo?</h3>

                <div className="disco-dialogue-options">
                  {discoChoices.map((choice, index) => (
                    <button
                      type="button"
                      key={choice.id}
                      className={activeDiscoChoice === choice.id ? "is-selected" : ""}
                      aria-pressed={activeDiscoChoice === choice.id}
                      onClick={() => setActiveDiscoChoice(choice.id)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>[{choice.action}]</strong>
                      <em>{choice.label}</em>
                    </button>
                  ))}
                </div>

                <div
                  className={`disco-dialogue-response ${selectedDiscoChoice ? "is-visible" : ""}`}
                  aria-live="polite"
                >
                  <span>{selectedDiscoChoice ? "RESPOSTA REGISTRADA" : "AGUARDANDO ESCOLHA"}</span>
                  <p key={selectedDiscoChoice?.id ?? "empty"}>
                    {selectedDiscoChoice
                      ? selectedDiscoChoice.response
                      : "Selecione uma linha de investigação para revelar como essa referência aparece no meu trabalho."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sports-section section-space border-y border-white/10">
          <div className="page-shell">
            <div className="sports-grid">
              <div className="score-card about-feature" aria-hidden="true">
                <div className="score-top">
                  <span>JOGO EM ANDAMENTO</span>
                  <Trophy size={18} />
                </div>
                <div className="score-main">
                  <div><strong>01</strong><span>IDEIA</span></div>
                  <small>:</small>
                  <div><strong>01</strong><span>EXECUÇÃO</span></div>
                </div>
                <div className="score-progress"><i /></div>
                <p>O resultado muda. O processo continua.</p>
              </div>

              <div className="about-copy about-feature">
                <span className="section-label">03 / ESPORTES</span>
                <h2>Competir, colaborar, ajustar e tentar de novo.</h2>
                <p>
                  Amo esportes porque eles deixam uma coisa muito clara: talento importa, mas
                  leitura de jogo, disciplina e trabalho coletivo mudam resultados. No trabalho,
                  isso vira flexibilidade para ajustar rotas, receber feedback e construir com o time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="musicas" className="music-section section-space">
          <div className="page-shell">
            <div className="music-heading">
              <div>
                <span className="section-label">REPERTÓRIO MUSICAL</span>
                <h2>No meu fone agora</h2>
                <p>Três faixas que estão acompanhando meus dias.</p>
              </div>
              <div className="music-service" aria-label="Conteúdo do Spotify">
                <SpotifyMark />
                <span>Spotify</span>
                <Headphones aria-hidden="true" size={20} />
              </div>
            </div>

            <div className="music-grid">
              {currentTracks.map((track) => (
                <article
                  className="spotify-card"
                  key={track.title}
                >
                  <img
                    className="spotify-cover"
                    src={track.cover}
                    alt={`Capa de ${track.title}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="spotify-card-content">
                    <div>
                      <h3>{track.title}</h3>
                      <p>{track.artist}</p>
                    </div>
                    <a
                      href={spotifyTrackUrl(track.id)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ouvir ${track.title}, de ${track.artist}, no Spotify`}
                    >
                      <SpotifyMark />
                      Ouvir no Spotify
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="principles-section section-space">
          <div className="page-shell">
            <div className="section-label">04 / COMO ISSO CHEGA AO MEU TRABALHO</div>
            <h2 className="section-heading mt-8 max-w-5xl">
              Vida pessoal e prática profissional <span className="text-violet-400">não vivem separadas.</span>
            </h2>
            <div className="principles-grid">
              {principles.map((principle) => (
                <article className="influence-card" key={principle.index}>
                  <span>{principle.index}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="page-shell">
            <div>
              <span>Agora que você conhece a pessoa</span>
              <h2>Conheça as decisões<br />por trás do trabalho.</h2>
            </div>
            <Link to="/#projetos" className="contact-button primary">
              Ver projetos
              <ArrowRight size={18} />
            </Link>
            <a href={emailUrl("Contato pelo portfólio")} className="contact-button">
              Falar comigo
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
