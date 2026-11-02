import { SiteIcon } from "./site-icon";

/** Small chapter separator using a quiet pulli-kolam-inspired knot. */
export function KolamDivider({ centered = false }: { centered?: boolean }) {
  return <div className={centered ? "kolam-divider centered" : "kolam-divider"} aria-hidden="true">
    <span />
    <SiteIcon name="divider" size={42} />
    <span />
  </div>;
}
