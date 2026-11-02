/** Exact approved visual assets from ChatGPT Library > YogaSri-Website-Icons.
 * Do not redraw or substitute these glyphs when editing the website.
 */
export type SiteIconName =
  | "earth" | "water" | "fire" | "air" | "space"
  | "earth-mini" | "water-mini" | "fire-mini" | "air-mini" | "space-mini"
  | "classical-hatha-yoga" | "retreat" | "online" | "nadi" | "one"
  | "foundation" | "deep" | "private" | "corp"
  | "corner" | "finial" | "divider" | "register" | "next"
  | "location" | "price" | "calendar" | "time" | "language"
  | "menu" | "chat" | "close" | "back" | "expand";

export function SiteIcon({
  name, size = 88, className = "",
}: {name: SiteIconName; size?: number; className?: string}) {
  return <img
    className={`site-icon ${className}`}
    src={`/icons/${name}.svg`}
    width={size}
    height={size}
    alt=""
    aria-hidden="true"
    loading="lazy"
    draggable={false}
  />;
}

/** Temporary category fallback until individual Hatha programme symbols are approved.
 * Never invent a new symbol merely to fill a course card.
 */
export function iconForCourse(slug: string): SiteIconName {
  if (slug.includes("nadi-balance")) return "nadi";
  if (slug.includes("one-day")) return "one";
  if (slug.includes("foundation")) return "foundation";
  if (slug.includes("deep-reset")) return "deep";
  if (slug.includes("private")) return "private";
  if (slug.includes("corporate")) return "corp";
  if (slug.includes("retreat")) return "retreat";
  if (slug.includes("elements-yoga-ayurveda")) return "online";
  return "classical-hatha-yoga";
}
