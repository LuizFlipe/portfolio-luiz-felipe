import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="page-shell flex min-h-screen flex-col items-start justify-center pt-24">
        <span className="text-sm uppercase tracking-[0.2em] text-violet-300">404</span>
        <h1 className="mt-4 max-w-4xl font-display text-[clamp(4rem,12vw,10rem)] leading-[.85] tracking-[-0.07em]">
          ESSA PÁGINA<br />NÃO EXISTE.
        </h1>
        <Link to="/" className="mt-10 inline-flex items-center gap-2 text-white/60 hover:text-white">
          <ArrowLeft size={18} />
          Voltar para a home
        </Link>
      </div>
    </Layout>
  );
}
