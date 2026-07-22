export const CONTACT_EMAIL = "luiz.felipesantos11@gmail.com";

// TODO(Luiz): informe apenas os dígitos com DDI e DDD para abrir uma conversa direta.
// Enquanto estiver vazio, o CTA abre o WhatsApp com a mensagem pronta para escolher um contato.
export const WHATSAPP_NUMBER = "";

export const siteConfig = {
  name: "Luiz Felipe",
  role: "Product Designer",
  email: CONTACT_EMAIL,
  social: {
    linkedin: "https://www.linkedin.com/in/luiz-felipe-me/",
    instagram: "https://www.instagram.com/luiz.felipedesign",
  },
  externalProjects: {
    bravus: "",
    fluxo: "https://luizfelipeport.lovable.app/projetos/fluxo",
    clinica: "https://clinica-viver-bem-gxp.luiz-felipesantos11.chatgpt.site",
    lavisFuture: "https://lavis-bar-011-cidade-tiradentes.luiz-felipesantos11.chatgpt.site/",
  },
  canonicalBaseUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "",
} as const;

export const emailUrl = (subject?: string) =>
  `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const whatsappUrl = (message: string) => {
  const destination = WHATSAPP_NUMBER ? `${WHATSAPP_NUMBER}` : "";
  return `https://wa.me/${destination}?text=${encodeURIComponent(message)}`;
};

export const spotifyTrackUrl = (trackId: string) =>
  `https://open.spotify.com/track/${trackId}`;
