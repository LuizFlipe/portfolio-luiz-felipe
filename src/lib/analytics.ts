export type PortfolioEventType = "contact_click" | "cta_click" | "project_open";

type PortfolioEvent = {
  eventType: PortfolioEventType;
  target: string;
  location: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const recentEvents = new Map<string, number>();
const DEDUPE_WINDOW_MS = 500;

function getReferrerHost() {
  if (typeof document === "undefined" || !document.referrer) return null;

  try {
    return new URL(document.referrer).hostname;
  } catch {
    return null;
  }
}

export function trackPortfolioEvent({ eventType, target, location }: PortfolioEvent) {
  if (typeof window === "undefined" || !supabaseUrl || !supabasePublishableKey) return;

  const path = `${window.location.pathname}${window.location.hash}`;
  const eventKey = `${eventType}:${target}:${path}`;
  const now = Date.now();
  const lastTrackedAt = recentEvents.get(eventKey) ?? 0;

  if (now - lastTrackedAt < DEDUPE_WINDOW_MS) return;
  recentEvents.set(eventKey, now);

  const payload = {
    event_type: eventType,
    target,
    location,
    path,
    referrer_host: getReferrerHost(),
  };

  void fetch(`${supabaseUrl}/rest/v1/portfolio_events`, {
    method: "POST",
    keepalive: true,
    headers: {
      apikey: supabasePublishableKey,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  }).catch(() => undefined);
}
