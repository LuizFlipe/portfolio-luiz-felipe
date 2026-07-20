import { ArrowLeft, ArrowRight, ArrowUpRight, Headphones, MapPin, Play, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const currentTracks = [
  {
    title: "Us memo preto zica",
    artist: "Emicida, Amaro Freitas, Henrique Albino",
    code: "UMPZ",
    tone: "track-violet",
    href: "https://open.spotify.com/search/Us%20memo%20preto%20zica",
  },
  {
    title: "Next To You",
    artist: "Bryson Tiller",
    code: "NTY",
    tone: "track-blue",
    href: "https://open.spotify.com/search/Next%20To%20You%20Bryson%20Tiller",
  },
  {
    title: "De Lua",
    artist: "Ryan Fidelis",
    code: "DL",
    tone: "track-magenta",
    href: "https://open.spotify.com/search/De%20Lua%20Ryan%20Fidelis",
  },
];

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

export default function About() {
  return (
    <Layout>
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
                  src="/images/luiz-felipe.png"
                  alt="Retrato de Luiz Felipe, Product Designer"
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
                  src="/images/cidade-tiradentes.jpeg"
                  alt="Vista do bairro Cidade Tiradentes, na Zona Leste de São Paulo"
                />
                <MapPin size={24} />
                <strong>CIDADE<br />TIRADENTES</strong>
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

        <section className="disco-section section-space">
          <div className="page-shell">
            <div className="disco-heading about-feature">
              <span>Meu jogo favorito</span>
              <h2>DISCO<br /><em>ELYSIUM</em></h2>
            </div>
            <div className="disco-notes">
              <div className="disco-orb" aria-hidden="true">
                <span>DE</span>
              </div>
              <div className="about-feature">
                <p className="disco-lead">
                  O que mais me marca em Disco Elysium não é apenas a estética. É a coragem de
                  construir um mundo complexo, político, humano e cheio de consequências.
                </p>
                <p>
                  O jogo mostra que escolhas pequenas mudam a percepção de uma experiência e que
                  sistemas podem contar histórias. Essa é uma referência que carrego no meu
                  processo: entender as camadas de um problema sem perder de vista quem está
                  vivendo aquela jornada.
                </p>
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
                  leitura de jogo, disciplina e trabalho coletivo mudam resultados. Nenhuma partida
                  acontece exatamente como o plano.
                </p>
                <p>
                  No trabalho, isso vira flexibilidade para ajustar rotas, maturidade para receber
                  feedback e compromisso com o time — não apenas com a minha primeira ideia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="music-section section-space">
          <div className="page-shell">
            <div className="music-heading">
              <div>
                <span className="section-label">EM REPRODUÇÃO</span>
                <h2>Músicas do momento</h2>
              </div>
              <Headphones aria-hidden="true" size={28} />
            </div>

            <div className="music-grid">
              {currentTracks.map((track, index) => (
                <a
                  href={track.href}
                  target="_blank"
                  rel="noreferrer"
                  className="music-card"
                  key={track.title}
                  aria-label={`Ouvir ${track.title}, de ${track.artist}, no Spotify`}
                >
                  <div className={`music-cover ${track.tone}`}>
                    <span>{track.code}</span>
                    <small>0{index + 1}</small>
                  </div>
                  <div className="music-copy">
                    <strong>{track.title}</strong>
                    <span>{track.artist}</span>
                    <small>Spotify</small>
                  </div>
                  <i className="music-play"><Play size={18} fill="currentColor" /></i>
                </a>
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
            <a href="mailto:luiz.felipesantos11@gmail.com" className="contact-button">
              Falar comigo
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
}
