export const CONTACT_EMAIL = "luiz.felipesantos11@gmail.com";
export const WHATSAPP_NUMBER = "5511968585096";
export const BOOKING_URL = "https://calendar.app.google/UwSDAo5NfowhqSDG7";

export const siteConfig = {
  name: "Luiz Felipe",
  role: "Product Designer",
  email: CONTACT_EMAIL,
  booking: BOOKING_URL,
  social: {
    linkedin: "https://www.linkedin.com/in/luiz-felipe-me/",
    instagram: "https://www.instagram.com/luiz.felipedesign",
  },
  externalProjects: {
    lumea: "https://lumeaa-advanced-beauty.lovable.app/",
    bravus: "",
    fluxo: "https://luizfelipeport.lovable.app/projetos/fluxo",
    clinica: "https://clinica-viver-bem-gxp.luiz-felipesantos11.chatgpt.site",
    malia: "https://brubs-moda-zl.luiz-felipesantos11.chatgpt.site/",
    lavisFuture: "https://lavis-bar-011-cidade-tiradentes.luiz-felipesantos11.chatgpt.site/",
  },
  canonicalBaseUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "",
} as const;

export const emailUrl = (subject?: string) =>
  `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const bookingUrl = () => BOOKING_URL;

export const spotifyTrackUrl = (trackId: string) =>
  `https://open.spotify.com/track/${trackId}`;
