export type Lang = "zh" | "en";
type Text = Record<Lang, string>;

export type CourseCollection = "upcoming" | "hatha" | "ayurveda" | "services";

export type Course = {
  slug: string;
  title: Text;
  type: Text;
  summary: Text;
  date: Text;
  time: Text;
  place: Text;
  language: Text;
  price: string;
  status: Text;
  audience: Text[];
  highlights: Text[];
  collection: CourseCollection;
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: "surya-shakti-surya-kriya-sep-2026",
    title: { zh: "Surya Shakti + Surya Kriya｜太阳能量双课程", en: "Surya Shakti + Surya Kriya" },
    type: { zh: "经典哈他瑜伽 · 吉隆坡", en: "Classical Hatha Yoga · Kuala Lumpur" },
    summary: { zh: "两天系统学习 Surya Shakti 与 Surya Kriya，以清晰的中英双语指导建立可长期独立练习的基础。", en: "A two-day bilingual programme combining Surya Shakti and Surya Kriya for a sustainable personal practice." },
    date: { zh: "2026年9月26–27日", en: "26–27 September 2026" },
    time: { zh: "8:00–10:30 AM · 4:00–6:30 PM", en: "8:00–10:30 AM · 4:00–6:30 PM" },
    place: { zh: "Sphere Damansara", en: "Sphere Damansara" },
    language: { zh: "中文 / English", en: "Chinese / English" },
    price: "RM600",
    status: { zh: "近期课程", en: "Upcoming" },
    collection: "upcoming",
    featured: true,
    audience: [
      { zh: "想建立规律晨间或日常练习的人", en: "Those wanting a regular morning or daily practice" },
      { zh: "希望同时学习力量、稳定与太阳能量练习的人", en: "Those seeking strength, stability and a sun-based practice" }
    ],
    highlights: [
      { zh: "Surya Shakti 完整教学", en: "Complete Surya Shakti instruction" },
      { zh: "Surya Kriya 完整教学", en: "Complete Surya Kriya instruction" },
      { zh: "中英双语指导", en: "Chinese and English guidance" },
      { zh: "两门课程组合价 RM600", en: "Combined programme fee RM600" }
    ]
  },
  {
    slug: "yogasanas-oct-2026",
    title: { zh: "Yogasanas｜经典瑜伽体式", en: "Yogasanas" },
    type: { zh: "经典哈他瑜伽 · 吉隆坡", en: "Classical Hatha Yoga · Kuala Lumpur" },
    summary: { zh: "以传统方式学习一套精密的经典体式练习，建立身体稳定、专注与更细致的身体觉察。", en: "Learn a precise classical asana sequence designed to build stability, focus and refined body awareness." },
    date: { zh: "2026年10月3–4日", en: "3–4 October 2026" },
    time: { zh: "8:00–11:30 AM · 4:00–7:30 PM", en: "8:00–11:30 AM · 4:00–7:30 PM" },
    place: { zh: "Sphere Damansara", en: "Sphere Damansara" },
    language: { zh: "中文 / English", en: "Chinese / English" },
    price: "RM850",
    status: { zh: "近期课程", en: "Upcoming" },
    collection: "upcoming",
    featured: true,
    audience: [
      { zh: "想系统深入经典哈他瑜伽的人", en: "Those ready to deepen classical Hatha Yoga systematically" },
      { zh: "希望建立稳定独立练习的人", en: "Those wanting a stable independent practice" }
    ],
    highlights: [
      { zh: "完整 Yogasanas 教学", en: "Complete Yogasanas instruction" },
      { zh: "动作细节与练习条件说明", en: "Detailed practice conditions and alignment guidance" },
      { zh: "中英双语教学", en: "Chinese and English instruction" },
      { zh: "适合长期持续练习", en: "Designed for long-term personal practice" }
    ]
  },
  {
    slug: "bhuta-shuddhi-oct-2026",
    title: { zh: "Bhuta Shuddhi｜五大元素净化", en: "Bhuta Shuddhi" },
    type: { zh: "五大元素练习 · KLCC", en: "Five Elements Practice · KLCC" },
    summary: { zh: "学习传统 Bhuta Shuddhi 五大元素净化练习，课程包含完整练习器具，并提供中英双语指导。", en: "Learn the traditional Bhuta Shuddhi process with the complete practice kit and bilingual guidance." },
    date: { zh: "2026年10月10日", en: "10 October 2026" },
    time: { zh: "2:00–4:30 PM 或 6:00–8:30 PM", en: "2:00–4:30 PM or 6:00–8:30 PM" },
    place: { zh: "The Mews KLCC", en: "The Mews KLCC" },
    language: { zh: "中文 / English", en: "Chinese / English" },
    price: "RM850",
    status: { zh: "近期课程", en: "Upcoming" },
    collection: "upcoming",
    featured: true,
    audience: [
      { zh: "希望学习五大元素净化日常练习的人", en: "Those wanting a daily five-elements purification practice" },
      { zh: "对古典瑜伽与元素观感兴趣的人", en: "Those interested in classical yoga and the elemental approach" }
    ],
    highlights: [
      { zh: "Bhuta Shuddhi 完整教学", en: "Complete Bhuta Shuddhi instruction" },
      { zh: "费用包含练习器具", en: "Practice kit included" },
      { zh: "两个时段可选", en: "Two session times available" },
      { zh: "可独立持续练习", en: "Designed for continued personal practice" }
    ]
  },
  {
    slug: "five-elements-retreat-kl",
    title: { zh: "五大元素净化营", en: "Five Elements Purification Retreat" },
    type: { zh: "瑜伽 × 阿育吠陀 · 5天", en: "Yoga × Ayurveda · 5 days" },
    summary: { zh: "把 Bhuta Shuddhi、Jala Neti、医生咨询、阿育吠陀养护与五大元素学习整合在五天的生活体验中。", en: "A five-day immersion integrating Bhuta Shuddhi, Jala Neti, doctor consultation, Ayurvedic care and elemental learning." },
    date: { zh: "2026年10月12–16日", en: "12–16 October 2026" },
    time: { zh: "5天完整课程", en: "Five-day programme" },
    place: { zh: "Kuala Lumpur / Petaling Jaya", en: "Kuala Lumpur / Petaling Jaya" },
    language: { zh: "中文指导", en: "Chinese guidance" },
    price: "RM4,500 / RMB7,800",
    status: { zh: "少量名额", en: "Limited places" },
    collection: "upcoming",
    featured: true,
    audience: [
      { zh: "希望深化古典瑜伽练习与日常养护的人", en: "Practitioners ready to deepen yoga and daily self-care" },
      { zh: "希望在医生与老师支持下观察身体状态的人", en: "Those wanting structured support from doctors and teachers" }
    ],
    highlights: [
      { zh: "Bhuta Shuddhi 与练习器具", en: "Bhuta Shuddhi training and practice kit" },
      { zh: "Jala Neti 洗鼻术", en: "Jala Neti practice" },
      { zh: "Nadi Scan 与医生一对一咨询", en: "Nadi Scan and one-to-one doctor consultation" },
      { zh: "Nasya、Oil Pulling、Janu Vasti、Padabhyanga、Head Massage、Eye Wash 等养护项目", en: "Selected Ayurvedic care including Nasya, oil pulling, Janu Vasti, Padabhyanga, head massage and eye wash" },
      { zh: "Panchakarma、Dinacharya、阿育饮食与五大元素学习", en: "Panchakarma, Dinacharya, Ayurvedic food and five-elements learning" }
    ]
  },
  {
    slug: "beginner-experience",
    title: { zh: "初学者体验课", en: "Beginner Experience Class" },
    type: { zh: "入门课程", en: "Beginner programme" },
    summary: { zh: "适合第一次接触 Yoga Sri 的学员，以轻量方式认识经典哈他瑜伽、身体使用与练习节奏。", en: "A gentle first step into Yoga Sri’s approach to classical Hatha Yoga, body use and practice rhythm." },
    date: { zh: "2026年10月17日起固定开放", en: "Rolling enrolment from 17 October 2026" },
    time: { zh: "依当月排期", en: "Monthly schedule" },
    place: { zh: "Kuala Lumpur / Petaling Jaya", en: "Kuala Lumpur / Petaling Jaya" },
    language: { zh: "中文 / English / 粤语", en: "Chinese / English / Cantonese" },
    price: "RM80",
    status: { zh: "长期开放", en: "Rolling enrolment" },
    collection: "hatha",
    audience: [
      { zh: "没有瑜伽经验，想先体验的人", en: "Complete beginners who want to try a first class" },
      { zh: "希望先了解教学方式再选择长期课程的人", en: "Those wanting to experience the teaching style before a full programme" }
    ],
    highlights: [
      { zh: "适合零基础", en: "Beginner-friendly" },
      { zh: "认识身体与练习节奏", en: "Learn basic body awareness and practice rhythm" },
      { zh: "可衔接后续经典哈他课程", en: "A pathway into classical Hatha programmes" }
    ]
  },
  {
    slug: "surya-shakti",
    title: { zh: "Surya Shakti｜太阳力量", en: "Surya Shakti" },
    type: { zh: "经典哈他瑜伽", en: "Classical Hatha Yoga" },
    summary: { zh: "一套以身体力量、稳定与活力为重点的经典练习，适合希望建立规律身体训练的人。", en: "A classical practice focused on strength, stability and vitality for a regular physical routine." },
    date: { zh: "固定招生", en: "Rolling enrolment" },
    time: { zh: "依当月排期", en: "Monthly schedule" },
    place: { zh: "Kuala Lumpur / Petaling Jaya", en: "Kuala Lumpur / Petaling Jaya" },
    language: { zh: "中文 / English / 粤语", en: "Chinese / English / Cantonese" },
    price: "RM350",
    status: { zh: "长期开放", en: "Rolling enrolment" },
    collection: "hatha",
    audience: [
      { zh: "希望提升身体力量与稳定度的人", en: "Those wanting more physical strength and stability" },
      { zh: "适合建立规律练习的人", en: "Those building a regular personal practice" }
    ],
    highlights: [
      { zh: "完整练习教学", en: "Complete practice instruction" },
      { zh: "适合在家持续练习", en: "Suitable for continued home practice" }
    ]
  },
  {
    slug: "surya-kriya",
    title: { zh: "Surya Kriya｜太阳克里亚", en: "Surya Kriya" },
    type: { zh: "经典哈他瑜伽", en: "Classical Hatha Yoga" },
    summary: { zh: "一套传统太阳练习，以精确、稳定与规律为核心，适合希望长期建立经典个人练习的人。", en: "A traditional sun-based practice centred on precision, stability and consistent personal practice." },
    date: { zh: "固定招生", en: "Rolling enrolment" },
    time: { zh: "依当月排期", en: "Monthly schedule" },
    place: { zh: "Kuala Lumpur / Petaling Jaya", en: "Kuala Lumpur / Petaling Jaya" },
    language: { zh: "中文 / English / 粤语", en: "Chinese / English / Cantonese" },
    price: "RM450",
    status: { zh: "长期开放", en: "Rolling enrolment" },
    collection: "hatha",
    audience: [
      { zh: "希望学习传统太阳练习的人", en: "Those wanting to learn a traditional sun practice" },
      { zh: "重视精确与长期练习的人", en: "Those who value precision and long-term practice" }
    ],
    highlights: [
      { zh: "完整 Surya Kriya 教学", en: "Complete Surya Kriya instruction" },
      { zh: "个人练习条件与细节说明", en: "Personal practice conditions and detailed guidance" }
    ]
  },
  {
    slug: "angamardana",
    title: { zh: "Angamardana｜身体掌控练习", en: "Angamardana" },
    type: { zh: "经典哈他瑜伽", en: "Classical Hatha Yoga" },
    summary: { zh: "以身体重量进行的系统性练习，可按站、蹲、坐、躺分段学习，也可完整学习全套。", en: "A systematic body-weight practice available by standing, squatting, seated and lying modules, or as a complete programme." },
    date: { zh: "固定招生", en: "Rolling enrolment" },
    time: { zh: "依当月排期", en: "Monthly schedule" },
    place: { zh: "Kuala Lumpur / Petaling Jaya", en: "Kuala Lumpur / Petaling Jaya" },
    language: { zh: "中文 / English / 粤语", en: "Chinese / English / Cantonese" },
    price: "RM180 / 单段 · RM650 / 全套",
    status: { zh: "长期开放", en: "Rolling enrolment" },
    collection: "hatha",
    audience: [
      { zh: "想提升力量、灵活与身体控制的人", en: "Those wanting strength, mobility and body control" },
      { zh: "想以模块方式逐步学习的人", en: "Those preferring a modular learning pathway" }
    ],
    highlights: [
      { zh: "站 / 蹲 / 坐 / 躺四个模块", en: "Standing / squatting / seated / lying modules" },
      { zh: "可单段或完整学习", en: "Learn one module or the complete set" }
    ]
  },
  {
    slug: "elements-yoga-ayurveda-online",
    title: { zh: "元素净化：古典瑜伽与阿育吠陀概论", en: "Elements: Classical Yoga & Ayurveda" },
    type: { zh: "7天线上课程", en: "7-day online course" },
    summary: { zh: "从五大元素、Dosha、Agni、Ama、Ojas、Dinacharya 到 Panchakarma，建立古典瑜伽与阿育吠陀的基础地图。", en: "A seven-day foundation covering the five elements, Doshas, Agni, Ama, Ojas, Dinacharya and Panchakarma." },
    date: { zh: "固定开班 · 下一期公布中", en: "Recurring intake · next dates to be announced" },
    time: { zh: "线上晚间课程", en: "Evening online sessions" },
    place: { zh: "Online", en: "Online" },
    language: { zh: "中文", en: "Chinese" },
    price: "RM350",
    status: { zh: "长期开放", en: "Recurring" },
    collection: "hatha",
    audience: [
      { zh: "第一次系统接触瑜伽与阿育吠陀的人", en: "Those new to a structured yoga and Ayurveda foundation" },
      { zh: "希望理解五大元素与日常养护的人", en: "Those wanting to understand the five elements and daily care" }
    ],
    highlights: [
      { zh: "五大元素与 Dosha", en: "Five elements and Doshas" },
      { zh: "Agni、Ama 与 Ojas", en: "Agni, Ama and Ojas" },
      { zh: "Dinacharya 与 Ritucharya", en: "Dinacharya and Ritucharya" },
      { zh: "Panchakarma 概论", en: "Introduction to Panchakarma" }
    ]
  },
  {
    slug: "nadi-balance-scan",
    title: { zh: "Nadi Balance Scan｜脉象平衡扫描", en: "Nadi Balance Scan" },
    type: { zh: "阿育吠陀评估", en: "Ayurveda assessment" },
    summary: { zh: "以脉象评估为起点，结合生活节奏、饮食与练习需求，帮助你更有结构地理解当下状态。", en: "An Ayurveda-based pulse assessment used as a starting point to understand your present state, rhythm, food and practice needs." },
    date: { zh: "预约制", en: "By appointment" },
    time: { zh: "依预约安排", en: "By appointment" },
    place: { zh: "Petaling Jaya", en: "Petaling Jaya" },
    language: { zh: "中文协助 / English", en: "English with Chinese support" },
    price: "RM180 起",
    status: { zh: "预约开放", en: "Appointments open" },
    collection: "ayurveda",
    audience: [
      { zh: "想从阿育吠陀角度了解个人状态的人", en: "Those wanting an Ayurvedic view of their current state" },
      { zh: "想为后续养护或练习建立方向的人", en: "Those planning a more structured care or practice pathway" }
    ],
    highlights: [
      { zh: "脉象与体质状态观察", en: "Pulse and constitution-based observation" },
      { zh: "结合日常作息、饮食与练习讨论", en: "Discussion of routine, food and practice" }
    ]
  },
  {
    slug: "one-day-reset",
    title: { zh: "一日重启｜One-Day Reset", en: "One-Day Reset" },
    type: { zh: "瑜伽 × 阿育吠陀", en: "Yoga × Ayurveda" },
    summary: { zh: "用一天时间重新整理身体与生活节奏，结合适合当下状态的瑜伽、阿育吠陀养护与日常建议。", en: "A one-day reset combining appropriate yoga, Ayurvedic care and practical daily-rhythm guidance." },
    date: { zh: "预约制", en: "By appointment" },
    time: { zh: "一日方案", en: "One-day programme" },
    place: { zh: "Petaling Jaya / Kuala Lumpur", en: "Petaling Jaya / Kuala Lumpur" },
    language: { zh: "中文协助 / English", en: "English with Chinese support" },
    price: "预约咨询",
    status: { zh: "预约开放", en: "Appointments open" },
    collection: "ayurveda",
    audience: [
      { zh: "想先用一天体验整合式养护的人", en: "Those wanting a one-day introduction to integrated care" },
      { zh: "生活节奏忙碌、需要重新整理日常的人", en: "Busy people who want to reset their daily rhythm" }
    ],
    highlights: [
      { zh: "以个人状态为基础安排", en: "Structured around your current state" },
      { zh: "瑜伽与阿育吠陀整合", en: "Integrated yoga and Ayurveda" }
    ]
  },
  {
    slug: "foundation-reset",
    title: { zh: "基础重启｜Foundation Reset", en: "Foundation Reset" },
    type: { zh: "瑜伽 × 阿育吠陀", en: "Yoga × Ayurveda" },
    summary: { zh: "比一日方案更完整地梳理饮食、作息、练习与养护节奏，为后续稳定生活方式建立基础。", en: "A deeper reset covering food, routine, practice and care to build a more sustainable foundation." },
    date: { zh: "预约制", en: "By appointment" },
    time: { zh: "依个人方案", en: "Personalised schedule" },
    place: { zh: "Petaling Jaya / Kuala Lumpur", en: "Petaling Jaya / Kuala Lumpur" },
    language: { zh: "中文协助 / English", en: "English with Chinese support" },
    price: "预约咨询",
    status: { zh: "预约开放", en: "Appointments open" },
    collection: "ayurveda",
    audience: [
      { zh: "希望建立更规律生活方式的人", en: "Those wanting a more consistent daily rhythm" },
      { zh: "想把瑜伽练习与日常养护连接起来的人", en: "Those wanting to connect yoga practice with daily care" }
    ],
    highlights: [
      { zh: "生活方式与练习结构整理", en: "Lifestyle and practice structure" },
      { zh: "按个人状态安排养护方向", en: "Care direction based on individual assessment" }
    ]
  },
  {
    slug: "deep-reset",
    title: { zh: "深度重启｜Deep Reset", en: "Deep Reset" },
    type: { zh: "瑜伽 × 阿育吠陀深度方案", en: "Yoga × Ayurveda immersion" },
    summary: { zh: "适合希望投入更完整时间，以连续支持重新建立练习、作息与阿育吠陀养护节奏的人。", en: "For those ready to invest more time in rebuilding practice, routine and Ayurvedic care with ongoing support." },
    date: { zh: "预约制", en: "By appointment" },
    time: { zh: "依个人方案", en: "Personalised schedule" },
    place: { zh: "Petaling Jaya / Kuala Lumpur", en: "Petaling Jaya / Kuala Lumpur" },
    language: { zh: "中文协助 / English", en: "English with Chinese support" },
    price: "预约咨询",
    status: { zh: "预约开放", en: "Appointments open" },
    collection: "ayurveda",
    audience: [
      { zh: "希望进行较完整生活方式重整的人", en: "Those seeking a more comprehensive lifestyle reset" },
      { zh: "希望在一段时间内获得连续支持的人", en: "Those wanting continuity of support over a defined period" }
    ],
    highlights: [
      { zh: "结合评估、日常节奏与练习", en: "Assessment, daily rhythm and practice integration" },
      { zh: "按个人需要组合阿育吠陀养护", en: "Ayurvedic care selected around individual needs" }
    ]
  },
  {
    slug: "private-yoga",
    title: { zh: "私人教学", en: "Private Yoga" },
    type: { zh: "一对一 / 小组", en: "One-to-one / small group" },
    summary: { zh: "依你的时间、练习经验与学习目标安排一对一或小组教学。", en: "One-to-one or small-group teaching based on your schedule, experience and learning goals." },
    date: { zh: "预约制", en: "By appointment" },
    time: { zh: "60或90分钟", en: "60 or 90 minutes" },
    place: { zh: "Kuala Lumpur / Petaling Jaya", en: "Kuala Lumpur / Petaling Jaya" },
    language: { zh: "中文 / English / 粤语", en: "Chinese / English / Cantonese" },
    price: "RM180 / 60min · RM250 / 90min",
    status: { zh: "预约开放", en: "Appointments open" },
    collection: "services",
    audience: [
      { zh: "需要更弹性时间与个人指导的人", en: "Those needing flexible scheduling and individual guidance" },
      { zh: "希望复训、调整细节或小组学习的人", en: "Those seeking review, detail refinement or small-group learning" }
    ],
    highlights: [
      { zh: "一对一或小组安排", en: "One-to-one or small-group options" },
      { zh: "依学习目标安排内容", en: "Content shaped around learning goals" }
    ]
  },
  {
    slug: "corporate-yoga",
    title: { zh: "企业瑜伽与团队课程", en: "Corporate Yoga & Team Programmes" },
    type: { zh: "企业合作", en: "Corporate programmes" },
    summary: { zh: "为企业、团队与组织设计体验课、半日、全日或静修型课程，内容可结合经典哈他瑜伽与生活方式主题。", en: "Custom experiences for companies and teams, from introductory sessions to half-day, full-day and retreat formats." },
    date: { zh: "按项目安排", en: "Project-based" },
    time: { zh: "弹性安排", en: "Flexible" },
    place: { zh: "马来西亚 / 线上", en: "Malaysia / Online" },
    language: { zh: "中文 / English / 粤语", en: "Chinese / English / Cantonese" },
    price: "洽谈",
    status: { zh: "合作开放", en: "Enquiries open" },
    collection: "services",
    audience: [
      { zh: "企业 HR、团队负责人及活动主办方", en: "HR teams, team leads and event organisers" },
      { zh: "希望安排身心健康或团队体验的组织", en: "Organisations planning wellbeing or team experiences" }
    ],
    highlights: [
      { zh: "可设计 1N2D 或客制化形式", en: "1N2D and custom formats available" },
      { zh: "可依团队人数与目标调整", en: "Adaptable to team size and objectives" }
    ]
  }
];

export const getCourse = (slug: string) => courses.find((course) => course.slug === slug);
export const featuredCourses = courses.filter((course) => course.featured);
export const coursesByCollection = (collection: CourseCollection) =>
  courses.filter((course) => course.collection === collection);
