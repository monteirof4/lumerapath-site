export const siteUrl = "https://www.lumerapath.com";

export function pageUrl(path = "/"): string {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  return normalized ? `${siteUrl}/${normalized}/` : `${siteUrl}/`;
}
