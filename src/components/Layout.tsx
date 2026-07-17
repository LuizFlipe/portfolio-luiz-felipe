import { ArrowUpRight, Menu, X } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MotionEffects from "./MotionEffects";

const nav = [
  { code: "01", label: "Projetos", href: "/#projetos" },
  { code: "02", label: "Sobre", href: "/sobre" },
  { code: "03", label: "Experiência", href: "/#experiencia" },
  { code: "04", label: "Contato", href: "/#contato" },
];

export default function Layout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ink text-paper">
      <MotionEffects />
      <div className="world-grid" aria-hidden="true" />
      <aside className="identity-rail" aria-hidden="true">
        <span>LF·01</span>
        <i />
        <span>ZL / SP</span>
        <small>SYSTEM ONLINE</small>
      </aside>

      <header className="site-header fixed inset-x-0 top-0 z-50">
        <div className="page-shell flex h-20 items-center justify-between">
          <Link to="/" className="brand-lockup group flex items-center gap-3" aria-label="Página inicial">
            <span className="brand-mark grid h-9 w-9 place-items-center text-sm font-black">
              LF
            </span>
            <span className="hidden sm:block">
              <strong>Luiz Felipe</strong>
              <small>Product Designer · Player 01</small>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {nav.map((item) => (
              item.href.startsWith("/#") ? (
                <a key={item.label} href={item.href} className="nav-link">
                  <small>{item.code}</small>{item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="nav-link">
                  <small>{item.code}</small>{item.label}
                </Link>
              )
            ))}
          </nav>

          <a
            href="mailto:luiz.felipesantos11@gmail.com"
            className="hud-contact hidden items-center gap-2 px-4 py-2 text-sm font-semibold md:flex"
          >
            <span>Iniciar conversa</span>
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-ink px-5 py-6 md:hidden">
            <nav className="page-shell flex flex-col gap-4">
              {nav.map((item) => (
                item.href.startsWith("/#") ? (
                  <a key={item.label} href={item.href} className="text-2xl font-semibold">
                    <small className="mr-3 text-xs text-violet-300">{item.code}</small>{item.label}
                  </a>
                ) : (
                  <Link key={item.label} to={item.href} className="text-2xl font-semibold">
                    <small className="mr-3 text-xs text-violet-300">{item.code}</small>{item.label}
                  </Link>
                )
              ))}
              <a
                href="mailto:luiz.felipesantos11@gmail.com"
                className="mt-2 inline-flex items-center gap-2 text-violet-300"
              >
                luiz.felipesantos11@gmail.com
                <ArrowUpRight size={17} />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="system-footer border-t border-white/10 py-10">
        <div className="page-shell flex flex-col justify-between gap-5 sm:flex-row">
          <span><i /> LF_OS · PORTFOLIO BUILD 2026</span>
          <span>PRODUCT DESIGNER · ZONA LESTE / SÃO PAULO</span>
        </div>
      </footer>
    </div>
  );
}
