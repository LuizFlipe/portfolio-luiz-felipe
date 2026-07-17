import { ArrowUpRight, Menu, X } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MotionEffects from "./MotionEffects";

const nav = [
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Experiência", href: "/#experiencia" },
  { label: "Contato", href: "/#contato" },
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" aria-label="Página inicial">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-black transition group-hover:border-violet-400/70 group-hover:text-violet-300">
              LF
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Luiz Felipe</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {nav.map((item) => (
              item.href.startsWith("/#") ? (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <a
            href="mailto:luiz.felipesantos11@gmail.com"
            className="hidden items-center gap-2 rounded-full border border-violet-400/50 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-500 hover:text-white md:flex"
          >
            Falar comigo
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
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} to={item.href} className="text-2xl font-semibold">
                    {item.label}
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

      <footer className="border-t border-white/10 py-10">
        <div className="page-shell flex flex-col justify-between gap-5 text-sm text-white/50 sm:flex-row">
          <span>© 2026 Luiz Felipe.</span>
          <span>Product Designer • São Paulo</span>
        </div>
      </footer>
    </div>
  );
}
