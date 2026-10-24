export type PortfolioEventType = "contact_click" | "cta_click" | "project_open";

type PortfolioEvent = {
  eventType: PortfolioEventType;
  target: string;
  location: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

function getReferrerHost() {
  if (typeof document === "undefined" || !document.referrer) return null;

  try {
    return new URL(document.referrer).hostname;
  } catch {
    return null;
  }
}

export function trackPortfolioEvent({ eventType, target, location }: PortfolioEvent) {
  if (typeof window === "undefined" || !supabaseUrl || !supabaseAnonKey) return;

  const payload = {
    event_type: eventType,
    target,
    location,
    path: `${window.location.pathname}${window.location.hash}`,
    referrer_host: getReferrerHost(),
  };

  void fetch(`${supabaseUrl}/rest/v1/portfolio_events`, {
    method: "POST",
    keepalive: true,
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  }).catch(() => undefined);
}
