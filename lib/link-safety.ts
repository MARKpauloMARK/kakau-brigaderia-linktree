export type LinkIcon = "whatsapp" | "leaf" | "bunny" | "menu" | "calculator" | "external";

export type LinkItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LinkIcon;
  url: string;
  featured?: boolean;
};

export type PublicLinkItem = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LinkIcon;
  url: string;
  featured: boolean;
  isExternal: boolean;
};

const SAFE_PROTOCOLS = new Set(["http:", "https:"]);

function sanitizeText(value: string, maxLength: number) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, maxLength);
}

function sanitizeUrl(rawUrl: string) {
  const normalized = rawUrl.trim();

  if (normalized.startsWith("/")) {
    if (normalized.startsWith("//")) {
      return null;
    }

    return normalized;
  }

  try {
    const parsedUrl = new URL(normalized);

    if (!SAFE_PROTOCOLS.has(parsedUrl.protocol)) {
      return null;
    }

    return parsedUrl.toString();
  } catch {
    return null;
  }
}

export function buildPublicLinkItems(links: LinkItem[]) {
  const items: PublicLinkItem[] = [];
  const errors: string[] = [];

  for (const link of links) {
    const id = sanitizeText(link.id, 80);
    const title = sanitizeText(link.title, 120);
    const subtitle = link.subtitle ? sanitizeText(link.subtitle, 180) : undefined;
    const url = sanitizeUrl(link.url);

    if (!id || !title || !url) {
      errors.push(`Invalid link entry: ${link.id || "unknown-id"}`);
      continue;
    }

    items.push({
      id,
      title,
      subtitle,
      url,
      icon: link.icon,
      featured: Boolean(link.featured),
      isExternal: /^https?:\/\//.test(url),
    });
  }

  return { items, errors };
}

