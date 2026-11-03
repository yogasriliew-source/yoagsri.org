/** A small manuscript-inspired botanical rule, intentionally not a religious icon. */
export function BotanicalDivider({ centered = false }: { centered?: boolean }) {
  return (
    <div className={centered ? "botanical-divider centered" : "botanical-divider"} aria-hidden="true">
      <span className="botanical-rule" />
      <svg viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 32C35 30 49 18 61 9C75 2 93 9 110 4" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round"/>
        <path d="M29 29C17 19 17 14 20 11C31 15 36 22 29 29Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth=".9"/>
        <path d="M46 23C42 12 45 7 50 4C56 12 55 20 46 23Z" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeWidth=".9"/>
        <path d="M65 8C70 20 78 22 86 19C83 10 75 6 65 8Z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth=".9"/>
        <path d="M91 7C95 16 102 18 108 15C105 8 99 5 91 7Z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth=".9"/>
        <circle cx="11" cy="32" r="1.6" fill="currentColor"/>
      </svg>
      <span className="botanical-rule" />
    </div>
  );
}
