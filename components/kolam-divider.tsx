import { KolamMark } from "./kolam-mark";

/** Small chapter separator using a quiet pulli-kolam-inspired knot. */
export function KolamDivider({ centered = false }: { centered?: boolean }) {
  return <div className={centered ? "kolam-divider centered" : "kolam-divider"} aria-hidden="true">
    <span />
    <KolamMark kind="earth" size={30} />
    <span />
  </div>;
}
