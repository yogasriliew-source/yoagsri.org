import Head from "next/head";
import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, MessageCircle, X } from "lucide-react";

type Course = {
  title: string;
  desc: string;
  price: string;
  duration: string;
  suitable: string;
  overview: string;
  benefits: string[];
  preparation: string[];
};

// Keep the approved full course content from the original course catalogue.
// The funnel changes the order in which visitors discover it, not its substance.
const courses: Course[] = [
  {
    "title": "Yoga for Joints",
    "desc": "Gently mobilise joints and muscles, rediscovering ease after long periods of sitting.",
    "price": "From RM80",
    "duration": "About 60–90 minutes",
    "suitable": "Beginners, people who sit for long periods, and anyone seeking a gentle start",
    "overview": "Upa-Yoga is a series of simple, powerful practices focused on joints, muscles and mobility. Gentle movements help beginners and people with sedentary routines explore coordination and ease.",
    "benefits": [
      "Mobilise joints and surrounding muscles",
      "Ease feelings of stiffness and tiredness after prolonged sitting",
      "Build a foundation for classical Hatha Yoga"
    ],
    "preparation": [
      "Suitable for beginners. Some Upa-Yoga practices suit children; age requirements vary by module.",
      "Wear loose clothing and bring a yoga mat. Follow the meal intervals in your registration instructions.",
      "Tell the teacher about pregnancy, recent surgery or joint injuries so suitable movements can be confirmed."
    ]
  },
  {
    "title": "Hatha Yoga for Beginners",
    "desc": "Build body awareness and a steady foundation through basic postures and breathing practices.",
    "price": "From RM80",
    "duration": "According to the scheduled class",
    "suitable": "Beginners seeking a gradual introduction to classical Hatha Yoga",
    "overview": "An introduction to classical Hatha Yoga through accessible postures, body coordination and breath awareness. Learn the importance of posture, attention and consistent practice.",
    "benefits": [
      "Coordinate body, breath and attention",
      "Explore sitting posture and mobility of the lower body and spine",
      "Prepare for courses such as Surya Kriya and Yogasanas"
    ],
    "preparation": [
      "No yoga experience is required. Wear clothing that allows movement and bring a mat.",
      "Empty-stomach requirements vary by practice; follow the confirmed class instructions.",
      "Discuss pregnancy, hernia, cardiovascular conditions, recent surgery or injuries with the teacher before registering."
    ]
  },
  {
    "title": "Surya Shakti",
    "desc": "A dynamic classical practice that develops strength, endurance and physical vitality.",
    "price": "RM350",
    "duration": "According to the scheduled course",
    "suitable": "Anyone seeking fitness and a regular physical practice",
    "overview": "Surya Shakti means solar energy. This dynamic sequence of 18 postures develops strength, coordination and endurance, using the body itself as the basis for regular practice.",
    "benefits": [
      "Develop strength, fitness and endurance",
      "Support muscles, ligaments and physical coordination",
      "Cultivate attention and clarity in movement"
    ],
    "preparation": [
      "Standard adult classes are for ages 14 and above. Ages 7–13 require the dedicated children’s version, not the adult class.",
      "General meal intervals: at least 4 hours after a meal, 2.5 hours after a snack and 1.5 hours after a drink. Follow the specific course instructions.",
      "Confirm suitability before registering if pregnant or living with an active hernia, cardiovascular condition, recent surgery or injury."
    ]
  },
  {
    "title": "Surya Kriya",
    "desc": "A classical practice of 21 steps, bringing attention to the body, breath and inner steadiness.",
    "price": "RM450",
    "duration": "According to the scheduled course",
    "suitable": "Anyone seeking deeper classical Hatha Yoga and a lasting practice foundation",
    "overview": "Surya Kriya is a traditional yogic practice of 21 steps. Surya means sun; Kriya refers to an inner process. Learning emphasises precise steps, coordination of breath and movement, and a complete, steady practice.",
    "benefits": [
      "Cultivate mental clarity and focus",
      "Support stability, vitality and balance",
      "Lay a foundation for sitting and deeper inner practices"
    ],
    "preparation": [
      "Generally for ages 14 and above; exceptions must be individually confirmed by the teacher.",
      "General meal intervals: at least 4 hours after a meal, 2.5 hours after a snack and 1.5 hours after a drink. Follow the specific course instructions.",
      "Consult the teacher and a qualified physician about pregnancy, active hernia, recent surgery or other significant health conditions."
    ]
  },
  {
    "title": "Surya Shakti + Surya Kriya",
    "desc": "Combine dynamic strength with a refined classical practice to build a progressive foundation.",
    "price": "RM600",
    "duration": "According to the combined course schedule",
    "suitable": "Students wishing to learn the solar practices systematically",
    "overview": "Two complementary practices: Surya Shakti uses 18 dynamic postures to develop strength; Surya Kriya uses 21 steps to explore finer coordination and inner steadiness. Each has its own emphasis.",
    "benefits": [
      "Combine strength and endurance with refined body awareness",
      "Build a more complete practice foundation",
      "Develop a regular personal practice rhythm"
    ],
    "preparation": [
      "Attend all teaching sessions and posture checks for both practices.",
      "General meal intervals: at least 4 hours after a meal, 2.5 hours after a snack and 1.5 hours after a drink. Follow the specific course instructions.",
      "Adult classes are generally for ages 14 and above. Seek advice about pregnancy, hernia, recent surgery or injuries."
    ]
  },
  {
    "title": "Yogasanas",
    "desc": "Explore body and inner awareness through precise, steady classical postures.",
    "price": "RM850",
    "duration": "A complete series of sessions; schedule varies",
    "suitable": "Students willing to learn posture details patiently and practise independently",
    "overview": "In classical yoga, Yogasanas goes beyond exercise: specific postures cultivate steadiness and awareness. The course teaches 21 classical postures with attention to posture, breath, holding and coordination.",
    "benefits": [
      "Develop stability, balance and coordination",
      "Deepen posture, breath and body awareness",
      "Support systematic, long-term independent practice"
    ],
    "preparation": [
      "Introductory courses are generally for ages 14 and above. Advanced-course age requirements may differ; confirm with the teacher.",
      "General meal intervals: at least 4 hours after a meal, 2.5 hours after a snack and 1.5 hours after a drink. Follow the specific course instructions.",
      "Discuss pregnancy, recent surgery, hernia, neck, back or joint conditions with the teacher and physician. Attend every session."
    ]
  },
  {
    "title": "Angamardana",
    "desc": "Develop strength, flexibility and body control through dynamic practice without equipment.",
    "price": "Full course RM650 | Modules from RM180",
    "duration": "About 1.5 hours per module; full course varies",
    "suitable": "Beginners may start with a standing, squatting, sitting or lying module; choose the full series according to fitness",
    "overview": "A traditional yogic fitness system using the body itself to develop strength, flexibility, endurance and coordination. Learn the full system or individual standing, squatting, sitting and lying modules. Beginners can build gradually with a single module of about 1.5 hours.",
    "benefits": [
      "Strengthen the muscular and skeletal system around the spine",
      "Develop strength, fitness, flexibility and control",
      "Explore ease and coordination in movement"
    ],
    "preparation": [
      "Start with an individual standing, squatting, sitting or lying module of about 1.5 hours. The full series is more demanding; the teacher will advise according to fitness.",
      "General meal intervals: at least 4 hours after a meal, 2.5 hours after a snack and 1.5 hours after a drink. Follow the specific course instructions.",
      "Suitability must be assessed for pregnancy, active hernia, recent major surgery, cardiovascular conditions or musculoskeletal injuries."
    ]
  },
  {
    "title": "Bhuta Shuddhi",
    "desc": "A classical elemental practice using a simple daily ritual to deepen inner awareness.",
    "price": "RM850 (practice kit included)",
    "duration": "According to the scheduled course",
    "suitable": "Anyone interested in the classical view of the elements and ongoing practice",
    "overview": "Bhuta Shuddhi means purification of the elements. Classical yoga understands life and the body through earth, water, fire, air and space. This specific, simple traditional practice forms a basis for daily inner practice; the required kit is included.",
    "benefits": [
      "Explore the classical yogic view of the five elements",
      "Establish a steady, conscious daily inner practice",
      "Create regular space for continuing practice"
    ],
    "preparation": [
      "The original course materials specify a general minimum age of 14.",
      "Learn the correct use of the kit and follow preparation and empty-stomach instructions.",
      "Seek appropriate medical advice and inform the teacher about pregnancy, plans for pregnancy, recent surgery or other special health circumstances."
    ]
  },
  {
    "title": "Nada Yoga",
    "desc": "Explore relaxation and inner awareness through sound and attention.",
    "price": "Enquire for details",
    "duration": "According to the scheduled course",
    "suitable": "Anyone seeking a gentle introduction through sound",
    "overview": "Drawing on the classical yogic understanding of sound, Nada Yoga uses specific vocal sounds and attention to explore the relationship between the body, attention and inner quiet.",
    "benefits": [
      "Develop awareness of sound and breath",
      "Settle attention and encourage relaxation",
      "Explore sound as inner practice and preparation for meditation"
    ],
    "preparation": [
      "Original course materials specify ages 7 and above; confirm the requirements for your class.",
      "Participate in a quiet setting and follow the teacher’s vocal instructions.",
      "Inform the teacher about acute throat conditions, pregnancy, recovery from surgery or other health concerns."
    ]
  },
  {
    "title": "Shanmukhi Mudra",
    "desc": "A subtle mudra and attention practice that brings awareness to the senses and inner experience.",
    "price": "Enquire for details",
    "duration": "According to the scheduled course",
    "suitable": "Anyone exploring quiet, inward-focused yoga",
    "overview": "A simple, subtle traditional practice focused on turning the senses and attention inward. An introduction to quiet, awareness and meditative qualities.",
    "benefits": [
      "Cultivate sensory and inner awareness",
      "Support relaxation and a sense of mental balance",
      "Build a foundation for sitting and meditation"
    ],
    "preparation": [
      "Generally for ages 14 and above; follow the specific registration requirements.",
      "Follow the official class instructions for meals and empty-stomach preparation.",
      "Consult a qualified professional and the teacher about eye, ear or nose conditions, recent surgery, pregnancy or other special circumstances."
    ]
  },
  {
    "title": "7-Day Online | Five Elements & Ayurveda",
    "desc": "Seven evenings exploring the five elements, Dosha and everyday self-care.",
    "price": "RM350",
    "duration": "7 days online | About 90 minutes per session",
    "suitable": "Beginners, Bhuta Shuddhi students and anyone interested in Ayurveda",
    "overview": "Explore earth, water, fire, air and space alongside Ayurvedic constitution, Agni, Ama, Ojas, daily routines and self-observation.",
    "benefits": [
      "Build foundational knowledge of classical yoga and Ayurveda",
      "Observe diet, routines and bodily sensations",
      "Bring course reflections into daily life"
    ],
    "preparation": [
      "Join from a quiet environment with a stable internet connection.",
      "Sessions are not recorded and no replays are provided; attend on time.",
      "Prepare notes and complete observation exercises and homework. Course content does not replace medical diagnosis."
    ]
  },
  {
    "title": "Nadi Balance Scan",
    "desc": "Explore personal self-care through Ayurvedic constitution, a report and a physician’s explanation.",
    "price": "From RM180",
    "duration": "By appointment",
    "suitable": "Anyone seeking a structured introduction to Ayurvedic constitution",
    "overview": "A Nadi Scan report and an Ayurvedic physician’s explanation provide a traditional self-care reference, alongside yoga and lifestyle consultation. This is not a standard medical examination.",
    "benefits": [
      "Understand traditional concepts such as Prakruti and Vikruti",
      "Organise questions about routine, diet and body observations",
      "Prepare discussion points for physician consultation and practice planning"
    ],
    "preparation": [
      "Book ahead and provide the basic information requested.",
      "Tell the qualified physician about medical history, medication and ongoing symptoms.",
      "The report is not used to diagnose disease or replace conventional medical examination or treatment."
    ]
  },
  {
    "title": "Yoga × Ayurveda | Foundation & Deep Reset",
    "desc": "Combine yoga, Ayurvedic education and qualified physician guidance around personal goals.",
    "price": "Enquire for details",
    "duration": "According to the programme and physician’s schedule",
    "suitable": "Anyone seeking multi-day learning or a self-care programme",
    "overview": "One-day experiences, foundation programmes or deeper retreats may combine classical yoga, Ayurvedic diet and lifestyle education. Any treatments are assessed and arranged by qualified physicians.",
    "benefits": [
      "Build a fuller understanding of practice and daily habits",
      "Develop a sustainable routine through learning and guidance",
      "Understand suitable traditional care options under medical supervision"
    ],
    "preparation": [
      "Confirm programme inclusions, physicians, costs and the itinerary in advance.",
      "Any Ayurvedic treatments require an individual suitability assessment by a qualified physician.",
      "Consult your treating physician about pregnancy, chronic conditions, medication, postoperative recovery or other health concerns."
    ]
  },
  {
    "title": "Corporate Yoga",
    "desc": "Accessible movement and attention practices designed for the workplace.",
    "price": "Contact us for a quotation",
    "duration": "Tailored to your organisation",
    "suitable": "Businesses, schools and team events",
    "overview": "Workshops tailored to organisational goals and participant backgrounds. Options include Upa Yoga, spinal movement, stress management, breathing, focus and memory themes, and teamwork. Available as individual sessions or a series, with in-person group needs considered.",
    "benefits": [
      "Create meaningful movement and rest during busy workdays",
      "Develop awareness of attention, body condition and stress",
      "Build shared team experiences through practice"
    ],
    "preparation": [
      "Share the venue, group size, ages and goals so appropriate modules can be selected.",
      "Provide a suitable practice space and yoga mats where needed.",
      "Group courses are educational, not diagnosis or treatment. Please disclose special health circumstances in advance."
    ]
  },
  {
    "title": "Eye Practices",
    "desc": "Gentle eye practices exploring relaxation and daily awareness after extended screen use.",
    "price": "Enquire for details",
    "duration": "According to the workshop schedule",
    "suitable": "Frequent computer or phone users and anyone interested in eye relaxation",
    "overview": "A specialised area of classical Hatha Yoga exploring eye movement, attention and relaxation after sustained close-up work. It does not replace eye examinations or treatment.",
    "benefits": [
      "Build eye relaxation habits",
      "Develop awareness of fatigue from prolonged eye use",
      "Introduce short breaks and practice into daily life"
    ],
    "preparation": [
      "Disclose eye conditions, retinal problems or recent eye surgery in advance.",
      "Seek medical attention for pain or sudden vision changes instead of continuing practice.",
      "Follow the teacher’s guidance and do not increase intensity independently."
    ]
  },
  {
    "title": "Children's Yoga",
    "desc": "Age-appropriate practices help children develop movement and attention with gentle guidance.",
    "price": "Enquire for details",
    "duration": "According to the age-appropriate course",
    "suitable": "Children and families seeking age-appropriate movement and attention practices",
    "overview": "Courses may include gentle Upa-Yoga, breathing and sound practices according to age and ability. Some include the dedicated children’s version of Surya Shakti. Content and intensity vary with age; adult programmes cannot simply be applied to children.",
    "benefits": [
      "Develop coordination and movement habits",
      "Encourage attention, regularity and self-awareness",
      "Create enjoyable learning through age-appropriate activities"
    ],
    "preparation": [
      "Age requirements vary by module. Some gentle Upa-Yoga practices suit younger children; confirm the selected course requirements.",
      "Children’s Surya Shakti classes use dedicated materials and teaching arrangements for ages 7–13.",
      "Parents should provide health information and follow instructions for clothing, mats and meal intervals."
    ]
  }
];

type PathId = "beginner" | "classical" | "reset";

const paths: { id: PathId; index: string; title: string; english: string; description: string; note: string; picks: string[] }[] = [
  { id: "beginner", index: "01", title: "Beginner Series", english: "Begin", description: "Start with online learning, gentle introductions and gradually build physical capability.", note: "Online learning · Hatha Yoga for Beginners · Angamardana modules (90 minutes)", picks: ["7-Day Online", "Hatha Yoga for Beginners", "Angamardana"] },
  { id: "classical", index: "02", title: "Classical Courses", english: "Deepen", description: "Learn complete classical Hatha Yoga practices with precise guidance.", note: "Surya Kriya · Surya Shakti · Yogasanas", picks: ["Surya Kriya", "Surya Shakti", "Yogasanas"] },
  { id: "reset", index: "03", title: "Health Reset", english: "Restore", description: "Bring together classical yoga, the five elements and Ayurvedic lifestyle wisdom.", note: "Retreats · Ayurvedic Reset", picks: ["Yoga × Ayurveda"] }
];

const images: Record<string, string> = {
  "Yoga for Joints": "/images/upa-yoga.jpg",
  "Angamardana": "/images/angamardana-standing.jpg",
  "Surya Kriya": "/images/surya-kriya.jpg",
  "Yogasanas": "/images/yogasanas.jpg",
  "Surya Shakti": "/images/surya-shakti.jpg",
  "Surya Shakti + Surya Kriya": "/images/surya-shakti.jpg"
};
const visibleNames = ["Yoga for Joints", "Surya Shakti", "Surya Kriya", "Yogasanas", "Angamardana", "Bhuta Shuddhi"];
const whatsapp = (subject?: string) => {
  const text = subject
    ? "Namaskaram Yoga Sri, I saw " + subject + " on your website and would like to know about suitable classes, fees and registration. Thank you!"
    : "Namaskaram Yoga Sri, I found your website and would like to ask about suitable yoga courses and upcoming classes. Thank you!";
  return "https://wa.me/60126725549?text=" + encodeURIComponent(text);
};
const findCourse = (name: string) => courses.find(c => c.title.startsWith(name));
const getImage = (name: string) => {
  if (images[name]) return images[name];
  if (name.startsWith("Surya Shakti")) return images["Surya Shakti"];
  return "";
};

function Kolam({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="110" height="110" viewBox="0 0 110 110" fill="none" aria-hidden="true">
      <circle cx="55" cy="55" r="38" stroke="currentColor" strokeWidth="1.1" />
      <path d="M55 18C70 41 70 69 55 92C40 69 40 41 55 18Z" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M18 55C41 40 69 40 92 55C69 70 41 70 18 55Z" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M29 29C56 35 75 54 81 81C54 75 35 56 29 29Z" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M81 29C75 56 56 75 29 81C35 54 54 35 81 29Z" stroke="currentColor" strokeWidth="1.1"/>
      <circle cx="55" cy="55" r="5" fill="currentColor" opacity=".6"/>
      <circle cx="55" cy="9" r="2" fill="currentColor"/>
      <circle cx="101" cy="55" r="2" fill="currentColor"/>
      <circle cx="55" cy="101" r="2" fill="currentColor"/>
      <circle cx="9" cy="55" r="2" fill="currentColor"/>
    </svg>
  );
}

function CourseCard({ course, badge = "", photo = true }: { course: Course; badge?: string; photo?: boolean }) {
  const image = getImage(course.title.split("｜")[0].trim());
  return (
    <article className="course-card">
      <div className="course-image"><span aria-hidden="true" className={"program-symbol " + (/Online/.test(course.title) ? "online" : /Nadi/.test(course.title) ? "nadi" : /Ayurveda|Reset/.test(course.title) ? "reset" : /Corporate/.test(course.title) ? "corporate" : /Private/.test(course.title) ? "private" : "hatha")} />{badge && <span className="photo-badge">{badge}</span>}</div>
      <div className="course-content">
        <div className="course-meta"><span>{course.duration}</span><span className="course-price">{course.price}</span></div>
        <h3>{course.title}</h3>
        <p className="course-desc">{course.desc}</p>
        <p className="course-fit"><span>Suitable for</span>{course.suitable}</p>
        <details className="course-details">
          <summary>Course details & preparation <ChevronDown size={16} aria-hidden="true" /></summary>
          <div className="detail-body">
            <p>{course.overview}</p>
            <strong>What you will learn / experience</strong>
            <ul>{course.benefits.map(x => <li key={x}>{x}</li>)}</ul>
            <strong>Before your class</strong>
            <ul>{course.preparation.map(x => <li key={x}>{x}</li>)}</ul>
            <small>Course content does not constitute medical diagnosis or a promise of treatment results. Discuss special health circumstances with a qualified physician and your teacher.</small>
          </div>
        </details>
        <a href={whatsapp(course.title)} target="_blank" rel="noreferrer" className="course-action" aria-label={"Ask about " + course.title + "  classes"}>
          Ask About This Course <ArrowUpRight size={18} aria-hidden="true"/>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<PathId>("beginner");
  const [menuOpen, setMenuOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryFilter, setLibraryFilter] = useState("All");

  const selectedPath = paths.find(p => p.id === selected) || paths[0];
  const recommended = selectedPath.picks.map(findCourse).filter((c): c is Course => Boolean(c));
  const filterItems = [
    { label: "All", ok: (_: Course) => true },
    { label: "Classical Hatha", ok: (c: Course) => !/Online|Nadi|Ayurveda|Corporate|Children/.test(c.title) },
    { label: "Online & Special Topics", ok: (c: Course) => /Online|Eye|Children|Nada|Shanmukhi/.test(c.title) },
    { label: "Ayurveda & Groups", ok: (c: Course) => /Nadi|Ayurveda|Corporate/.test(c.title) }
  ];
  const filtered = courses.filter(c => (filterItems.find(x => x.label === libraryFilter) || filterItems[0]).ok(c));
  const choose = (id: PathId) => { setSelected(id); if (typeof document !== "undefined") setTimeout(() => document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80); };

  return (
    <>
      <Head>
        <title>Yoga Sri | Classical Hatha Yoga · Courses & Booking</title>
        <meta name="description" content="Classical Hatha Yoga in Kuala Lumpur, Petaling Jaya and online, taught in English, Chinese and Cantonese. Explore courses and contact Yoga Sri on WhatsApp." />
        <link rel="canonical" href="https://www.yogasri.org/en" />
        <link rel="alternate" hrefLang="zh-Hans" href="https://www.yogasri.org/" />
        <link rel="alternate" hrefLang="en" href="https://www.yogasri.org/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.yogasri.org/" />
        <meta property="og:locale" content="en_MY" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Yoga Sri home" onClick={() => setMenuOpen(false)}><span className="brand-symbol">✳︎</span>Yoga Sri<span className="brand-tail">CLASSICAL PRACTICE</span></a>
          <nav className={"main-nav" + (menuOpen ? " open" : "")} aria-label="Main navigation">
            <a href="#find" onClick={() => setMenuOpen(false)}>Three Pathways</a>
            <a href="#philosophy" onClick={() => setMenuOpen(false)}>Yoga × Ayurveda</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Meet Yoga Sri</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href={whatsapp()} className="nav-mobile-cta" target="_blank" rel="noreferrer">WhatsApp Enquiry</a>
          </nav>
          <div className="language-switch" role="group" aria-label="Website language"><a href="/" lang="zh-Hans" hrefLang="zh-Hans">中文</a><span aria-hidden="true">/</span><a href="/en" lang="en" hrefLang="en" aria-current="page">EN</a></div>
          <a className="header-cta" href={whatsapp()} target="_blank" rel="noreferrer">Enquire <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> FIVE ELEMENTS · CLASSICAL HATHA YOGA · AYURVEDA</div>
            <h1>Begin with the body.<br/><em>Discover more of yourself.</em></h1>
            <p className="hero-lead">Classical Hatha Yoga · Ayurvedic Living</p>
            <p className="hero-description">Rooted in the traditional wisdom of the five elements, classical Hatha Yoga and Ayurveda come together as a path of exploration. From your first class to deeper practice and daily self-care, reconnect with your natural vitality.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#find">Explore the Three Pathways <ArrowRight size={18}/></a>
              <a className="text-link" href="#featured">Explore Courses <ArrowUpRight size={17}/></a>
            </div>
            <div className="hero-proof"><span>Teacher training in 2017</span><i/><span>1,750+ hours of training</span><i/><span>Chinese · English · Cantonese</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><img src="/images/yoga-sri-portrait.jpeg" alt="Portrait of Yoga Sri" fetchPriority="high" /></div>
            <div className="hero-stamp"><Kolam /><small>ROOTED IN PRACTICE<br/>OPEN TO LIFE</small></div>
            <div className="hero-caption">YOGA SRI <span>·</span> CLASSICAL HATHA YOGA</div>
          </div>
        </section>
        <div className="ribbon"><div className="shell ribbon-inner"><span>EARTH</span><span>WATER</span><span>FIRE</span><span>AIR</span><span>SPACE</span></div></div>
        <section className="philosophy-section shell" id="philosophy">
          <div className="philosophy-emblem"><Kolam/><span>ONE CONTINUOUS PATH</span></div>
          <div className="philosophy-content">
            <div className="eyebrow">01 / THE PHILOSOPHY</div>
            <h2>Ancient wisdom.<em>Return to the roots of wellbeing.</em></h2>
            <p className="philosophy-lead">Explore the connection between your body, daily living and life through classical Hatha Yoga and Ayurveda.</p>
            <p>Two longstanding traditions approach life from different perspectives. Yoga works with the body, breath and inner practice; Ayurveda considers constitution, food, routine and natural rhythms. Together, they offer ways to cultivate more conscious, sustainable living.</p>
            <p>In the classical yogic understanding, life encompasses the physical body, mind, emotions and subtler dimensions of energy. Exploring their relationship offers a way to understand ourselves more deeply.</p>
            <div className="wisdom-pair">
              <div><span>YOGA</span><h3>Classical Hatha Yoga</h3><p>Explore coordination and steadiness through the body, breath, attention and inner experience.</p></div>
              <div><span>AYURVEDA</span><h3>Ayurveda</h3><p>Explore a way of living suited to you through the five elements, personal constitution, food, routine and seasonal changes.</p></div>
            </div>
            <p className="philosophy-closing">With Yoga Sri, discover practical ways to bring ancient wisdom into modern life and reconnect with your natural vitality.</p>
            <a className="text-link" href="#find">Find Your Starting Point <ArrowRight size={17}/></a>
          </div>
        </section>
        <section className="section-pad shell" id="find">
          <div className="section-heading split-heading">
            <div><div className="eyebrow">02 / THREE PATHWAYS</div><h2>One philosophy.<em>Three ways to begin.</em></h2></div>
            <p>You do not need to understand every course first. Choose your current stage, then explore the practices and arrangements that fit.</p>
          </div>
          <div className="path-grid">
            {paths.map(path => (
              <button key={path.id} type="button" className={"path-tile" + (selected === path.id ? " is-selected" : "")} onClick={() => choose(path.id)} aria-pressed={selected === path.id}>
                <div className="path-top"><span>{path.index} / {path.english}</span><ArrowUpRight size={18}/></div>
                <h3>{path.title}</h3><p>{path.description}</p>
                <span className="path-bottom">{path.note} <ArrowRight size={16}/></span>
              </button>
            ))}
          </div>
          <div className="recommend-panel" id="recommendations">
            <div className="recommend-heading">
              <div><div className="eyebrow">YOUR LEARNING PATH</div><h3>{selectedPath.title} · {selectedPath.english}</h3><p>{selectedPath.description} Your teacher will confirm class arrangements and personal suitability.</p></div>
              <a className="text-link" href={whatsapp(selectedPath.title)} target="_blank" rel="noreferrer">Unsure? Ask Your Teacher <ArrowUpRight size={17}/></a>
            </div>
            <div className={"course-grid recommend-grid" + (selected === "reset" ? " reset-grid" : "")}>
              {selected === "reset" && <article className="course-card retreat-product">
                <div className="retreat-graphic"><span className="program-symbol retreat" aria-hidden="true" /></div>
                <div className="course-content">
                  <div className="course-meta"><span>Immersive retreat & learning</span><span className="course-price">Enquire for details</span></div>
                  <h3>Yoga × Ayurveda Retreat</h3>
                  <p className="course-desc">Experience a more conscious daily rhythm through classical yoga, the five elements and traditional Ayurvedic lifestyle education.</p>
                  <p className="course-fit"><span>Suitable for</span>Anyone wishing to explore their way of living through an immersive retreat</p>
                  <details className="course-details"><summary>Registration & arrangements <ChevronDown size={16}/></summary><div className="detail-body"><p>Dates, teaching, accommodation, physicians, fees and programme inclusions depend on the specific retreat announcement. Any treatments require a suitability assessment by a qualified physician.</p></div></details>
                  <a className="course-action" href={whatsapp("Yoga × Ayurveda Retreat")} target="_blank" rel="noreferrer">Enquire About Retreats <ArrowUpRight size={18}/></a>
                </div>
              </article>}
              {recommended.map((course, i) => <CourseCard course={course} key={course.title} badge={selected === "reset" ? "One Day / Foundation / Deep" : i === 0 ? "Start Here" : ""} />)}
            </div>
          </div>
        </section>
        <section className="section-pad featured-section" id="featured">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><div className="eyebrow">03 / THE PRACTICES</div><h2>Discover the<em>classical practices</em></h2></div>
              <p>The goal is a complete, precise practice that suits your stage and can become a lasting part of your life.</p>
            </div>
            <div className="featured-layout">
              <div className="feature-image"><img src="/images/surya-shakti.jpg" alt="Surya Shakti classical Hatha Yoga practice" loading="lazy" /><div className="feature-image-label">THE ART OF PRACTICE</div></div>
              <div className="feature-copy"><Kolam className="feature-kolam"/><div className="eyebrow">CLASSICAL HATHA YOGA</div><h3>Let practice become<br/>a foundation for life.</h3><p>From gentle Upa Yoga to the solar practices, Yogasanas, Angamardana and Bhuta Shuddhi, each practice has its own learning purpose and preparation.</p><a href="#catalog" className="btn btn-secondary" onClick={() => setLibraryOpen(true)}>Explore the Full Course Library <ArrowRight size={17}/></a></div>
            </div>
            <div className="practice-gallery" role="region" aria-label="Practice photo gallery; scroll horizontally" tabIndex={0}>
              {[["upa-yoga.jpg", "Upa Yoga"], ["surya-shakti.jpg", "Surya Shakti"], ["surya-kriya.jpg", "Surya Kriya"], ["yogasanas.jpg", "Yogasanas"], ["angamardana-standing.jpg", "Angamardana"]].map(([src, name]) => <figure key={src}><img src={"/images/" + src} alt={name + " practice photo"} loading="lazy"/><figcaption>{name}</figcaption></figure>)}
            </div>
            <div className="signature-row"><div><span className="signature-num">01</span><strong>Precise teaching</strong><span>Preserving the complete traditional practice</span></div><div><span className="signature-num">02</span><strong>Multilingual guidance</strong><span>Chinese · English · Cantonese</span></div><div><span className="signature-num">03</span><strong>Ongoing practice</strong><span>From the classroom to daily life</span></div></div>
            <div id="catalog" className="catalog-box">
              <button className="catalog-toggle" type="button" onClick={() => setLibraryOpen(!libraryOpen)} aria-expanded={libraryOpen}>
                <span><small>COURSE LIBRARY</small><strong>Full Course Library <span className="count">{courses.length} courses & programmes</span></strong></span><span className="catalog-plus">{libraryOpen ? "−" : "+"}</span>
              </button>
              {libraryOpen && <div className="catalog-body">
                <p className="catalog-help">Explore full descriptions, benefits, suitability and preparation. Filter by topic to find your starting point.</p>
                <div className="filter-row" role="group" aria-label="Filter courses by category">{filterItems.map(f => <button type="button" key={f.label} className={libraryFilter === f.label ? "filter active" : "filter"} onClick={() => setLibraryFilter(f.label)} aria-pressed={libraryFilter === f.label}>{f.label}</button>)}</div>
                <div className="course-grid catalog-grid">{filtered.map(c => <CourseCard key={c.title} course={c} photo={visibleNames.some(name => c.title.startsWith(name))} />)}</div>
              </div>}
            </div>
          </div>
        </section>
        <section className="section-pad about-section shell yoga-story" id="about" aria-labelledby="story-title">
          <div className="about-copy">
            <div className="eyebrow">04 / THE YOGA SRI STORY</div>
            <h2 id="story-title">From seeking freedom<em>to learning to care for life.</em></h2>
            <p>I am Yoga Sri, from Malaysia.</p>
            <p>Before becoming a yoga teacher, I studied psychology and worked as a Carnegie trainer and performance consultant. My work was about helping people develop their abilities and move beyond limitations. In my own life, I kept exploring a question: <strong>How can we live our potential while remaining at ease within ourselves?</strong></p>
            <p>That question led me to yoga.</p>
            <p>In 2017, I completed over 1,750 hours of Isha Hatha Yoga teacher training and received the name Yoga Sri. Since 2018, I have taught full-time, meeting students from different backgrounds in Malaysia, Taiwan, China, Japan and India.</p>
            <details className="story-details">
              <summary>Read the Full Story <ChevronDown size={18} aria-hidden="true" /></summary>
              <div className="story-body">
                <p>Every class brought me back to one concern: how can a practice truly become part of someone’s life? When work is busy, the body tired and the mind full of concerns, can we still find a way to care for ourselves?</p>
                <h3>Bringing ancient wisdom into daily life</h3>
                <p>Hatha Yoga offered me a path that begins with the body and opens into deeper self-observation. Through studying and personally experiencing Ayurveda, I also began to understand more closely the relationship between food, routine, environment and our individual condition.</p>
                <p>These explorations gradually shaped my teaching: rooted in classical Hatha Yoga, informed by Ayurvedic perspectives on daily living, and supported by qualified physicians when needed. My aim is to help students find a rhythm of practice and self-care that suits them.</p>
                <p>You can begin with one introductory class, or set aside time to get to know your body more deeply. Depth grows through repeated, sincere engagement.</p>
                <h3>Freedom includes caring for yourself</h3>
                <p>The freedom I once longed for was to travel, do what I loved and explore the possibilities of life.</p>
                <p>After years of teaching and exploration, I also value another kind of freedom: listening to my needs, respecting the rhythm of my body, making clear choices and taking responsibility for my own life.</p>
                <p>I am still learning along this path. As a teacher, I share tools I have practised myself while respecting each person’s starting point and pace.</p>
                <p>This is the companionship I hope to offer through Yoga Sri.</p>
              </div>
            </details>
            <p className="story-closing"><strong>Begin where you are. Make a little space for health and ease.</strong></p>
            <a className="text-link" href="#find">Explore Courses for You <ArrowRight size={17} aria-hidden="true" /></a>
            <div className="about-tags"><span>Malaysia based</span><span>Classical Hatha Yoga</span><span>Chinese · English · Cantonese</span></div>
          </div>
          <div className="story-portrait">
            <div className="about-image"><img src="/images/yoga-sri-portrait.jpeg" loading="lazy" alt="Yoga Sri, classical Hatha Yoga teacher"/></div>
            <p className="story-caption">YOGA SRI · ROOTED IN PRACTICE, OPEN TO LIFE</p>
          </div>
        </section>
        <section className="booking-section section-pad" id="booking">
          <div className="shell booking-inner"><div><div className="eyebrow">05 / TAKE THE NEXT STEP</div><h2>Ready to begin<br/><em>your own practice?</em></h2><p>Tell us which course interests you. We will reply on WhatsApp with available classes, locations and registration steps.</p></div><div className="booking-card"><div className="booking-label">HOW IT WORKS</div><ol><li><span>01</span>Choose a course or pathway</li><li><span>02</span>Confirm classes and suitability on WhatsApp</li><li><span>03</span>Confirm your place and register</li></ol><a className="btn btn-cream" href={whatsapp(selectedPath.title)} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Ask About My Course <ArrowUpRight size={18}/></a><small>Your selected pathway will be included in the message. You will not be asked to share health information publicly on the website.</small></div></div>
        </section>
        <section className="section-pad faq-section shell" id="faq">
          <div className="section-heading split-heading"><div><div className="eyebrow">06 / BEFORE YOU BEGIN</div><h2>You may also be wondering</h2></div><p>From your first class to private lessons, here are answers to common questions.</p></div>
          <div className="faq-list">
            {[
              ["Can I join without any yoga experience?","Yes. Start with Yoga for Joints or Hatha Yoga for Beginners. You do not need to be flexible already; the teacher will confirm suitability for the practice and your circumstances."],
              ["Can I take classes in Chinese?","Yes. Yoga Sri teaches in Chinese, English and Cantonese. Please confirm the language of your chosen class."],
              ["Can I register for every course immediately?","Not every programme has fixed dates. Enquire about available classes, locations and places. Unconfirmed dates are not listed on the website."],
              ["What if I am injured, pregnant or have a health condition?","Tell the teacher privately when registering and consult a qualified physician as needed. Practice does not replace medical diagnosis, examinations or treatment."],
              ["Can I book private, corporate or online sessions?","Yes. Contact us on WhatsApp to discuss private lessons, corporate and group workshops, online learning or Ayurveda-related programmes."]
            ].map(([q,a]) => <details key={q} className="faq-item"><summary>{q}<ChevronDown size={20} aria-hidden="true"/></summary><p>{a}</p></details>)}
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="shell footer-grid"><div><div className="footer-logo"><Kolam/> <span>Yoga Sri</span></div><p>Classical practice for a more conscious life.</p></div><div><strong>Explore</strong><a href="#find">Three Pathways</a><a href="#featured">Courses</a><a href="#about">About Yoga Sri</a></div><div><strong>Connect</strong><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp: +60 12-672 5549</a><span>Kuala Lumpur · Petaling Jaya · Online</span></div></div><div className="shell footer-bottom"><span>© 2026 Yoga Sri. All rights reserved.</span><span>Yoga and Ayurveda education does not replace medical advice.</span></div></footer>
      <style jsx global>{`
        .about-section.yoga-story{grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:clamp(28px,6vw,80px);align-items:start}
        .yoga-story .about-copy{min-width:0}
        .yoga-story .about-copy p{font-size:18px;line-height:1.9}
        .yoga-story .about-copy h2{font-size:clamp(30px,3.2vw,44px);text-wrap:balance}
        .yoga-story .about-copy strong{font-weight:600;color:var(--green)}
        .yoga-story .story-portrait{min-width:0}
        .yoga-story .about-image{min-height:0;max-height:none;aspect-ratio:4/5}
        .yoga-story .about-image img{height:100%;object-fit:cover}
        .yoga-story .story-caption{font-size:12px;line-height:1.7;letter-spacing:.08em;color:var(--muted);margin:16px 0}
        .yoga-story .story-details{border-top:1px solid var(--line);border-bottom:1px solid var(--line);margin:26px 0}
        .yoga-story .story-details summary{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 0;cursor:pointer;list-style:none;font-size:18px;color:var(--green)}
        .yoga-story .story-details summary::-webkit-details-marker{display:none}
        .yoga-story .story-details summary:focus-visible{outline:2px solid var(--green);outline-offset:5px}
        .yoga-story .story-details[open] summary svg{transform:rotate(180deg)}
        .yoga-story .story-body{padding:8px 0}
        .yoga-story .story-body h3{font-size:25px;line-height:1.5;margin:30px 0 16px;color:var(--green)}
        .yoga-story .story-closing{margin-top:28px}
        .yoga-story .text-link{font-size:17px}
        .yoga-story .about-tags span{font-size:12px}
        @media(max-width:650px){.about-section.yoga-story{grid-template-columns:1fr}.yoga-story .story-portrait{grid-row:1}.yoga-story .about-image{aspect-ratio:4/3}.yoga-story .about-image img{object-position:center 35%}}
      `}</style>
      <div className="mobile-action-bar"><a href="#find">Find Your Course <ArrowRight size={16}/></a><a href={whatsapp(selectedPath.title)} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Enquire Now</a></div>
    </>
  );
}
