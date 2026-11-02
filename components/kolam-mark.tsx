/**
 * Original, minimal Tamil kolam-inspired line marks.
 * Inspired by pulli (dots), symmetry and continuous looping strokes.
 * These are contemporary visual interpretations, NOT reproductions of specific ritual kolam.
 */
export type ElementKind = "earth" | "water" | "fire" | "air" | "space";
export type MarkKind =
  | ElementKind | "beginner" | "sun-strength" | "sun-kriya" | "sun-duo"
  | "posture" | "movement" | "five-elements" | "retreat" | "nadi"
  | "one-day" | "foundation" | "deep" | "private" | "corporate";

export function markForCourse(slug: string): MarkKind {
  if (slug.includes("surya-shakti-surya-kriya")) return "sun-duo";
  if (slug.includes("yogasanas")) return "posture";
  if (slug.includes("bhuta-shuddhi")) return "five-elements";
  if (slug.includes("five-elements-retreat")) return "retreat";
  if (slug.includes("beginner")) return "beginner";
  if (slug.includes("surya-shakti")) return "sun-strength";
  if (slug.includes("surya-kriya")) return "sun-kriya";
  if (slug.includes("angamardana")) return "movement";
  if (slug.includes("elements-yoga-ayurveda")) return "five-elements";
  if (slug.includes("nadi-balance")) return "nadi";
  if (slug.includes("one-day")) return "one-day";
  if (slug.includes("foundation")) return "foundation";
  if (slug.includes("deep")) return "deep";
  if (slug.includes("private")) return "private";
  if (slug.includes("corporate")) return "corporate";
  return "beginner";
}

function Drawing({ kind }: { kind: MarkKind }) {
  switch (kind) {
    case "earth":
    case "foundation":
      return <>
        <path d="M60 20C50 35 35 50 20 60C35 70 50 85 60 100C70 85 85 70 100 60C85 50 70 35 60 20Z"/>
        <path d="M60 37L83 60L60 83L37 60Z"/>
        <path d="M60 20C69 25 69 35 60 39C51 35 51 25 60 20ZM100 60C95 69 85 69 81 60C85 51 95 51 100 60ZM60 100C51 95 51 85 60 81C69 85 69 95 60 100ZM20 60C25 51 35 51 39 60C35 69 25 69 20 60Z"/>
      </>;
    case "water":
      return <>
        <path d="M17 42C29 21 43 21 60 42C77 63 91 63 103 42"/>
        <path d="M17 60C29 39 43 39 60 60C77 81 91 81 103 60"/>
        <path d="M17 78C29 57 43 57 60 78C77 99 91 99 103 78"/>
      </>;
    case "fire":
      return <>
        <path d="M60 14C48 28 39 40 39 53C24 70 37 95 60 104C83 95 96 70 81 53C81 40 72 28 60 14Z"/>
        <path d="M60 38L82 75H38Z"/>
        <path d="M60 62C53 70 50 76 50 84C50 91 55 96 60 98C65 96 70 91 70 84C70 76 67 70 60 62Z"/>
      </>;
    case "air":
      return <>
        <path d="M60 18C82 18 88 45 72 51C58 57 50 42 62 39"/>
        <path d="M102 60C102 82 75 88 69 72C63 58 78 50 81 62"/>
        <path d="M60 102C38 102 32 75 48 69C62 63 70 78 58 81"/>
        <path d="M18 60C18 38 45 32 51 48C57 62 42 70 39 58"/>
      </>;
    case "space":
      return <>
        <circle cx="60" cy="60" r="31"/>
        <path d="M60 14C48 25 48 32 60 40C72 32 72 25 60 14ZM106 60C95 48 88 48 80 60C88 72 95 72 106 60ZM60 106C72 95 72 88 60 80C48 88 48 95 60 106ZM14 60C25 72 32 72 40 60C32 48 25 48 14 60Z"/>
        <circle cx="60" cy="60" r="5"/>
      </>;
    case "beginner":
      return <>
        <path d="M60 20C50 35 50 43 60 50C70 43 70 35 60 20Z"/>
        <path d="M60 50C40 30 27 41 30 55C33 68 48 66 60 60C72 66 87 68 90 55C93 41 80 30 60 50Z"/>
        <path d="M60 60C48 72 47 89 60 100C73 89 72 72 60 60Z"/>
      </>;
    case "sun-strength":
      return <>
        <circle cx="60" cy="60" r="24"/>
        <circle cx="60" cy="60" r="6"/>
        {Array.from({length:8},(_,i)=><path key={i} d="M60 13C52 25 52 31 60 39C68 31 68 25 60 13Z" transform={`rotate(${i*45} 60 60)`}/>)}
      </>;
    case "sun-kriya":
      return <>
        <circle cx="60" cy="60" r="10"/>
        <path d="M60 17C35 32 35 50 60 60C85 70 85 88 60 103C35 88 35 70 60 60C85 50 85 32 60 17Z"/>
        <path d="M17 60C32 35 50 35 60 60C70 85 88 85 103 60C88 35 70 35 60 60C50 85 32 85 17 60Z"/>
      </>;
    case "sun-duo":
      return <>
        <circle cx="44" cy="60" r="20"/>
        <circle cx="76" cy="60" r="20"/>
        <path d="M60 16C43 29 42 40 60 60C78 80 77 91 60 104C43 91 42 80 60 60C78 40 77 29 60 16Z"/>
        <path d="M60 49L71 60L60 71L49 60Z"/>
      </>;
    case "posture":
      return <>
        <path d="M60 15L85 40L60 65L35 40Z"/>
        <path d="M60 65L80 85L60 105L40 85Z"/>
        <path d="M18 60C31 46 41 46 60 60C79 74 89 74 102 60"/>
        <path d="M18 60C31 74 41 74 60 60C79 46 89 46 102 60"/>
      </>;
    case "movement":
      return <>
        <path d="M60 18C44 28 43 42 60 60C77 78 76 92 60 102"/>
        <path d="M60 18C76 28 77 42 60 60C43 78 44 92 60 102"/>
        <path d="M18 60C29 44 43 43 60 60C77 77 91 76 102 60"/>
        <path d="M18 60C29 76 43 77 60 60C77 43 91 44 102 60"/>
      </>;
    case "five-elements":
    case "retreat":
      return <>
        <path d="M60 17C50 28 50 38 60 44C70 38 70 28 60 17Z"/>
        <path d="M103 53C90 48 81 54 80 66C91 72 100 65 103 53Z"/>
        <path d="M87 101C88 87 78 81 67 86C63 98 74 104 87 101Z"/>
        <path d="M33 101C46 104 57 98 53 86C42 81 32 87 33 101Z"/>
        <path d="M17 53C20 65 29 72 40 66C39 54 30 48 17 53Z"/>
        <circle cx="60" cy="65" r="13"/>
        <path d="M60 44V52M72 61L80 66M67 76L71 86M53 76L49 86M48 61L40 66"/>
      </>;
    case "nadi":
      return <>
        <path d="M15 60C26 42 37 42 48 60S70 78 81 60S98 42 105 54"/>
        <path d="M15 76C26 58 37 58 48 76S70 94 81 76S98 58 105 70"/>
        <circle cx="60" cy="29" r="11"/><path d="M60 40V52"/>
      </>;
    case "one-day":
      return <>
        <path d="M21 82A39 39 0 0 1 99 82"/>
        <path d="M21 82H99"/>
        <path d="M60 37C46 48 46 63 60 71C74 63 74 48 60 37Z"/>
        <path d="M60 14V25M22 28L32 38M98 28L88 38"/>
      </>;
    case "deep":
      return <>
        <circle cx="60" cy="60" r="37"/>
        <path d="M60 23C85 23 97 45 90 65C82 90 48 96 35 74C21 50 46 33 65 43C83 53 71 78 56 72C45 68 50 53 61 56"/>
      </>;
    case "private":
      return <>
        <path d="M60 60C49 38 29 29 23 44C18 59 36 72 60 60Z"/>
        <path d="M60 60C71 38 91 29 97 44C102 59 84 72 60 60Z"/>
        <path d="M60 60C49 82 29 91 23 76C18 61 36 48 60 60Z"/>
        <path d="M60 60C71 82 91 91 97 76C102 61 84 48 60 60Z"/>
      </>;
    case "corporate":
      return <>
        <path d="M60 16C50 27 50 34 60 42C70 34 70 27 60 16Z"/>
        <path d="M104 60C93 50 86 50 78 60C86 70 93 70 104 60Z"/>
        <path d="M60 104C70 93 70 86 60 78C50 86 50 93 60 104Z"/>
        <path d="M16 60C27 70 34 70 42 60C34 50 27 50 16 60Z"/>
        <path d="M60 42L78 60L60 78L42 60Z"/>
      </>;
  }
}

export function KolamMark({
  kind,
  size = 78,
  className = "",
}: {
  kind: MarkKind;
  size?: number;
  className?: string;
}) {
  return (
    <svg className={`kolam-mark ${className}`} width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g className="kolam-strokes" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <Drawing kind={kind} />
      </g>
      <g className="kolam-dots" fill="currentColor">
        <circle cx="60" cy="7" r="2.1"/><circle cx="60" cy="113" r="2.1"/>
        <circle cx="7" cy="60" r="2.1"/><circle cx="113" cy="60" r="2.1"/>
        <circle cx="20" cy="20" r="1.6"/><circle cx="100" cy="20" r="1.6"/>
        <circle cx="20" cy="100" r="1.6"/><circle cx="100" cy="100" r="1.6"/>
      </g>
    </svg>
  );
}
