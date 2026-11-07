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
        "title": "Yoga for Joints｜关节舒展瑜伽",
        "desc": "温和启动关节与肌肉，让身体从久坐与紧绷中重新找到轻盈感。",
        "price": "RM80 起",
        "duration": "约 60–90 分钟",
        "suitable": "零基础、久坐或想温和开始的人",
        "overview": "Upa-Yoga（乌帕瑜伽）由一系列简单而有力的练习组成，关注关节、肌肉与身体活动能力。透过关节舒展和温和的动作练习，帮助长期久坐或初学者重新认识身体的协调与轻盈。",
        "benefits": [
            "活动关节与周边肌群",
            "帮助缓解久坐后的身体僵硬及疲倦感",
            "为进一步学习古典哈他瑜伽建立基础"
        ],
        "preparation": [
            "适合初学者；部分 Upa-Yoga 练习适合儿童，但年龄要求随具体模块不同。",
            "请穿宽松衣物，携带瑜伽垫；课程开始前依报名通知安排饮食间隔。",
            "孕期、近期手术、关节伤病等情况，请在报名时告知老师，以确认适合的动作。"
        ]
    },
    {
        "title": "Hatha Yoga for Beginners｜哈他瑜伽入门",
        "desc": "从基础体式与呼吸练习，建立更稳定的身体觉察及练习基础。",
        "price": "RM80 起",
        "duration": "依当期班次安排",
        "suitable": "希望循序渐进学习古典哈他瑜伽的初学者",
        "overview": "为第一次接触古典哈他瑜伽的学员建立基础。结合适合入门的体式、身体协调与呼吸觉察，循序认识姿势、专注及稳定练习的重要性。",
        "benefits": [
            "培养身体、呼吸和注意力的协调",
            "帮助调整坐姿并认识下肢与脊柱活动",
            "为 Surya Kriya、Yogasanas 等进阶课程做好准备"
        ],
        "preparation": [
            "无需已有瑜伽经验；请穿便于伸展的服装并自备瑜伽垫。",
            "不同组合练习的空腹时间不完全一样，请以确认的班次通知为准。",
            "孕期、疝气、心血管疾病及近期手术或伤病者，报名前先与老师确认适用练习。"
        ]
    },


    {
        "title": "Surya Shakti｜太阳能量练习",
        "desc": "动态的古典哈他练习，重点培养力量、耐力与身体活力。",
        "price": "RM350",
        "duration": "依当期课程安排",
        "suitable": "希望提升体能、学习规律身体练习的人",
        "overview": "Surya Shakti（苏利亚夏克提）意为太阳能量，是由18个体式组成的动态练习序列。它着重身体的力量、协调及耐力，运用身体自身作为持续训练的基础。",
        "benefits": [
            "培养身体力量、体能与耐力",
            "支持肌肉、韧带与身体协调能力",
            "促进注意力及动作中的清晰感"
        ],
        "preparation": [
            "常规成人教学为14岁及以上；7至13岁儿童须使用专门的儿童版本，不能直接参加成人班。",
            "常规空腹参考：正餐后至少4小时、点心后至少2.5小时、饮料后至少1.5小时；具体以课程通知和老师指导为准。",
            "孕期、活动性疝气、心血管疾病、近期手术或身体伤病者，报名前须先确认适用性。"
        ]
    },
    {
        "title": "Surya Kriya｜太阳克里亚",
        "desc": "21 个步骤组成的古典练习，注重身体、呼吸与内在稳定。",
        "price": "RM450",
        "duration": "依当期课程安排",
        "suitable": "希望深入经典哈他瑜伽并建立长期练习基础的人",
        "overview": "Surya Kriya（苏利亚克里亚）是一套由21个步骤构成的传统瑜伽练习。“Surya”意为太阳，“Kriya”意为内在过程。学习强调步骤准确、呼吸与动作协调，以及稳定而完整的练习方式。",
        "benefits": [
            "培养头脑清晰度与专注力",
            "支持身体稳定、活力与平衡感",
            "为静坐及更深入的内在练习打下基础"
        ],
        "preparation": [
            "一般教学年龄为14岁及以上；年龄例外须由老师按学员情况个别确认。",
            "常规空腹参考：正餐后至少4小时、点心后至少2.5小时、饮料后至少1.5小时；具体以课程通知和老师指导为准。",
            "孕期或有活动性疝气、近期手术及其他重大健康问题者，请先与老师及医师确认。"
        ]
    },
    {
        "title": "Surya Shakti + Surya Kriya｜太阳系列组合",
        "desc": "将动态力量练习与精细的古典练习结合，循序建立身体基础。",
        "price": "RM600",
        "duration": "依当期组合课程安排",
        "suitable": "希望系统学习太阳系列的学员",
        "overview": "这组课程结合两种互补的太阳系列练习：Surya Shakti 是由18个姿势组成的动态力量练习；Surya Kriya 则以21个步骤关注更细致的协调与内在稳定。两套练习各有侧重，适合想系统学习的学员。",
        "benefits": [
            "结合力量耐力和精细的身体觉察",
            "建立更完整的练习基础",
            "帮助培养规律的个人练习节奏"
        ],
        "preparation": [
            "课程包含两种不同练习，请完整参加教学及体式确认。",
            "常规空腹参考：正餐后至少4小时、点心后至少2.5小时、饮料后至少1.5小时；具体以课程通知和老师指导为准。",
            "成人课程一般为14岁及以上；孕期、疝气、近期手术或伤病者须先咨询。"
        ]
    },
    {
        "title": "Yogasanas｜经典瑜伽体式",
        "desc": "以精准而稳定的体式学习，深化身体与内在觉察。",
        "price": "RM850",
        "duration": "多节完整课程；依当期安排",
        "suitable": "愿意耐心学习体式细节并持续自主练习的人",
        "overview": "Yogasanas（瑜伽体式）在古典瑜伽中不仅是身体锻炼，也是一种以特定姿势培养稳定与觉察的精微练习。课程教授21个古典体式，强调姿势、呼吸、维持与身体协调的细节。",
        "benefits": [
            "培养身体稳定、平衡与协调",
            "深化姿势、呼吸与身体觉察",
            "支持长期而有系统的自主练习"
        ],
        "preparation": [
            "初级课程通常为14岁及以上；进阶课程年龄要求可能不同，由老师按实际课程确认。",
            "常规空腹参考：正餐后至少4小时、点心后至少2.5小时、饮料后至少1.5小时；具体以课程通知和老师指导为准。",
            "孕期、近期手术、疝气、颈背部或关节问题者须事先与老师及医师确认；请完整参加所有课次。"
        ]
    },
    {
        "title": "Angamardana｜安伽玛达那",
        "desc": "不依赖器械的动态练习，培养力量、灵活性与身体掌控。",
        "price": "全套 RM650｜单模块 RM180 起",
        "duration": "单模块约 1.5 小时｜全套依班次安排",
        "suitable": "初学者可从站、蹲、坐、躺的单模块开始；完整系列依个人体能选择",
        "overview": "Angamardana（安伽玛达那）是由多种动态练习组成的传统瑜伽健身体系，强调无需器械，通过身体本身发展力量、灵活度、耐力与协调。课程可按完整体系或站、蹲、坐、躺等模块安排。初学者也可选择其中一个模块单独学习，每个模块约 1.5 小时，循序建立身体能力。",
        "benefits": [
            "帮助强健脊柱周边、骨骼与肌肉系统",
            "培养力量、体能、柔韧与身体控制",
            "改善身体活动中的轻盈感与协调感"
        ],
        "preparation": [
            "入门可选择站、蹲、坐、躺单一模块，每模块约 1.5 小时；全套练习强度较高，老师会依学员体能建议适合的学习方式。",
            "常规空腹参考：正餐后至少4小时、点心后至少2.5小时、饮料后至少1.5小时；具体以课程通知和老师指导为准。",
            "孕期、活动性疝气、近期大型手术、心血管疾病或肌肉骨骼伤病者须先评估是否适合。"
        ]
    },
    {
        "title": "Bhuta Shuddhi｜五大元素净化",
        "desc": "源于古典瑜伽的元素练习，以简洁的日常仪式深化内在觉察。",
        "price": "RM850（含练习器具）",
        "duration": "依当期课程安排",
        "suitable": "对古典瑜伽的元素观与持续练习有兴趣的人",
        "overview": "Bhuta Shuddhi 意为元素净化。古典瑜伽以土、水、火、风、空五大元素理解生命与身体，Bhuta Shuddhi 以特定而简洁的传统练习作为日常内在修习的基础；课程包含所需练习器具。",
        "benefits": [
            "探索古典瑜伽的五元素观",
            "建立稳定且有意识的日常内在练习",
            "为个人持续修习创造规律的空间"
        ],
        "preparation": [
            "原始课程资料列明一般为14岁及以上。",
            "学习时需依指导掌握器具使用、课前准备和空腹要求。",
            "孕期、准备怀孕、近期手术或其他特殊健康情况，请在报名前取得适当医疗建议并告知老师。"
        ]
    },
    {
        "title": "Nada Yoga｜声音瑜伽",
        "desc": "以声音与专注作为练习媒介，体验放松与内在觉察。",
        "price": "预约咨询",
        "duration": "依当期课程安排",
        "suitable": "希望从较温和的声音练习开始的人",
        "overview": "Nada Yoga（声音瑜伽）从古典瑜伽的声音观出发，运用特定发声与专注作为练习媒介，邀请学员透过声音感受身体、注意力和内在沉静的关系。",
        "benefits": [
            "培养声音与呼吸的觉察",
            "帮助安定注意力与放松身心",
            "探索声音作为内在练习与冥想准备的方法"
        ],
        "preparation": [
            "原始课程资料列明7岁及以上可学习声音瑜伽；具体需按班次确认。",
            "请在安静环境参与，并遵照老师指引进行发声练习。",
            "如有急性咽喉疾病、孕期、术后恢复或其他健康问题，请事先告知老师。"
        ]
    },
    {
        "title": "Shanmukhi Mudra｜夏慕奇手印",
        "desc": "以精微的手印与注意力练习，带回对感官与内在的觉察。",
        "price": "预约咨询",
        "duration": "依当期课程安排",
        "suitable": "希望探索安静、内向的瑜伽练习的人",
        "overview": "Shanmukhi Mudra（夏慕奇手印）是一种简单而精微的传统练习，注重感官与注意力向内的转化，可作为探索安静、觉察与冥想品质的入门。",
        "benefits": [
            "培养感官与内在觉察",
            "支持放松及头脑的平衡感",
            "为静坐与冥想练习建立基础"
        ],
        "preparation": [
            "一般适合14岁及以上学员；实际以课程报名条件为准。",
            "课前饮食及空腹安排须遵循正式上课通知。",
            "有眼、耳、鼻相关疾病或近期手术、孕期等特殊情况，请先咨询专业人士和授课老师。"
        ]
    },
    {
        "title": "7-Day Online｜元素净化与阿育吠陀概论",
        "desc": "七晚线上学习五大元素、Dosha 与日常生活养护的关系。",
        "price": "RM350",
        "duration": "7 天线上课程｜每堂约 90 分钟",
        "suitable": "初学者、Bhuta Shuddhi 学员与对阿育吠陀有兴趣的人",
        "overview": "以土、水、火、风、空五大元素为主线，介绍阿育吠陀的体质观、Agni、Ama、Ojas，以及每日作息与自我观察。",
        "benefits": [
            "建立古典瑜伽及阿育吠陀的基础知识",
            "学习观察饮食、作息与身体感受",
            "将课程反思融入日常生活"
        ],
        "preparation": [
            "请在稳定网络及安静环境中参加。",
            "课程不提供录制或回放，需按时参与。",
            "请准备学习笔记并完成课后观察与作业；课程内容不代替医疗诊断。"
        ]
    },
    {
        "title": "Nadi Balance Scan｜脉诊平衡检测",
        "desc": "结合阿育吠陀体质观点、报告与医生讲解，认识个人养护方向。",
        "price": "RM180 起",
        "duration": "依预约安排",
        "suitable": "希望更系统了解阿育吠陀体质概念的人",
        "overview": "以 Nadi Scan 报告和阿育吠陀医生讲解作为传统养护参考，搭配瑜伽与生活习惯咨询。此服务不属于标准医学检查。",
        "benefits": [
            "认识 Prakruti 与 Vikruti 等传统体质概念",
            "整理日常作息、饮食与身体观察问题",
            "为后续医生咨询及练习规划提供讨论方向"
        ],
        "preparation": [
            "请提前预约，并告知工作人员需要的基础资料。",
            "如有既往病史、正在服药或持续症状，请主动告知合格医生。",
            "报告不用于诊断疾病，也不能替代常规医疗检查或治疗。"
        ]
    },
    {
        "title": "Yoga × Ayurveda｜基础与深度重启",
        "desc": "依个人目标结合瑜伽、阿育吠陀教育及专业医生指导。",
        "price": "预约咨询",
        "duration": "依方案与医生安排",
        "suitable": "希望进行多日综合学习或身心养护规划的人",
        "overview": "可按需要设计一日体验、基础课程或深入静修方案，结合古典瑜伽学习、阿育吠陀饮食及生活方式教育；涉及疗程时由专业医师评估安排。",
        "benefits": [
            "建立较完整的练习与生活习惯认识",
            "透过课程学习和指导制定可持续的日常方案",
            "在医生监督下理解适合自身的传统养护选项"
        ],
        "preparation": [
            "须事先确认课程包含内容、医师、费用及实际行程。",
            "涉及阿育吠陀疗程时，须由合格医师评估个人适用性。",
            "怀孕、慢性病、用药、术后状态或其他健康问题，请先向主治医生确认。"
        ]
    },
    {
        "title": "Corporate Yoga｜企业与团体课程",
        "desc": "为工作场景设计温和、可参与的身体与专注练习。",
        "price": "企业报价洽谈",
        "duration": "依企业需求安排",
        "suitable": "企业、学校与团队活动",
        "overview": "依企业目标与参与者背景设计的工作坊，可从 Upa Yoga、脊柱活动、压力管理、呼吸练习、专注力与记忆力主题、团体合作等方向安排。可提供单次体验或系列课程，并考虑线下团队活动需要。",
        "benefits": [
            "为繁忙工作日建立有质量的活动与休息时间",
            "培养团队成员对专注、身体状态和压力的觉察",
            "透过共同练习创造团队互动体验"
        ],
        "preparation": [
            "请先说明活动地点、人数、年龄层和预期目标，再安排合适模块。",
            "需要提供适合活动的场地，必要时准备瑜伽垫。",
            "企业课程为团体教育体验，不作为治疗或诊断；特殊健康情况应提前申报。"
        ]
    },
    {
        "title": "Eye Practices｜眼部保养瑜伽",
        "desc": "以温和的眼部练习，关注长期使用屏幕后眼睛的放松与日常觉察。",
        "price": "预约咨询",
        "duration": "依专题工作坊安排",
        "suitable": "长时间使用电脑、手机或想学习眼部放松的人",
        "overview": "眼部练习是古典哈他瑜伽的一类专题练习，以适当的练习过程关注眼部活动、注意力及长时间近距离用眼后的放松。它不代替视力检查或眼部疾病治疗。",
        "benefits": [
            "帮助建立眼部放松习惯",
            "培养对长时间用眼疲劳的觉察",
            "为日常生活加入短暂的休息与练习"
        ],
        "preparation": [
            "请事先告知是否有眼部疾病、视网膜问题或近期眼科手术。",
            "有疼痛、突然视力变化等症状时应先就医，而非继续练习。",
            "请依老师安排学习动作，不自行增加强度。"
        ]
    },

    {
        "title": "Children's Yoga｜儿童瑜伽",
        "desc": "按年龄使用专门的瑜伽练习组合，让孩子在轻松的引导中发展身体与专注。",
        "price": "预约咨询",
        "duration": "依适龄课程安排",
        "suitable": "希望从适龄活动和专注练习开始的儿童及家庭",
        "overview": "儿童课程可依年龄和活动能力安排温和的 Upa-Yoga、呼吸与声音练习，部分班次也可包含专门的儿童版 Surya Shakti。练习内容和强度因年龄而不同，不能直接套用成人课程。",
        "benefits": [
            "培养身体协调与活动习惯",
            "鼓励注意力、规律与自我觉察",
            "透过适龄活动建立愉快的学习体验"
        ],
        "preparation": [
            "不同模块有不同年龄条件，例如部分温和 Upa-Yoga 适合较小儿童；具体适龄要求以所选课程为准。",
            "Surya Shakti 儿童班须使用7至13岁专门教材与指定教学安排。",
            "请由家长提供学童健康状况并按课程通知准备衣物、瑜伽垫和饮食间隔。"
        ]
    }
];

type PathId = "beginner" | "classical" | "reset";

const paths: { id: PathId; index: string; title: string; english: string; description: string; note: string; picks: string[] }[] = [
  { id: "beginner", index: "01", title: "初学者系列", english: "Begin", description: "从线上知识、温和入门到循序建立身体能力。", note: "线上课 · 哈他瑜伽入门 · Angamardana 单模块（90 分钟）", picks: ["7-Day Online", "Hatha Yoga for Beginners", "Angamardana"] },
  { id: "classical", index: "02", title: "经典课程", english: "Deepen", description: "以精确的指导学习完整的经典哈他瑜伽。", note: "Surya Kriya · Surya Shakti · Yogasanas", picks: ["Surya Kriya", "Surya Shakti", "Yogasanas"] },
  { id: "reset", index: "03", title: "健康重启", english: "Restore", description: "结合古典瑜伽、五大元素与阿育吠陀的传统生活智慧。", note: "静修营 · 阿育吠陀重启", picks: ["Yoga × Ayurveda"] }
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
    ? "Namaskaram Yoga Sri，我在网站看了「" + subject + "」，想了解适合我的班次、费用和报名方式。谢谢！"
    : "Namaskaram Yoga Sri，我从官网来，想咨询适合自己的瑜伽课程和最新班次。谢谢！";
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
        <p className="course-fit"><span>适合</span>{course.suitable}</p>
        <details className="course-details">
          <summary>课程介绍与课前准备 <ChevronDown size={16} aria-hidden="true" /></summary>
          <div className="detail-body">
            <p>{course.overview}</p>
            <strong>你将学习 / 体验</strong>
            <ul>{course.benefits.map(x => <li key={x}>{x}</li>)}</ul>
            <strong>课前须知</strong>
            <ul>{course.preparation.map(x => <li key={x}>{x}</li>)}</ul>
            <small>课程内容不代表医疗诊断或治疗效果；特殊健康情况请先向专业医师及老师确认。</small>
          </div>
        </details>
        <a href={whatsapp(course.title)} target="_blank" rel="noreferrer" className="course-action" aria-label={"询问 " + course.title + " 的班次"}>
          询问此课程的班次 <ArrowUpRight size={18} aria-hidden="true"/>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<PathId>("beginner");
  const [menuOpen, setMenuOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [libraryFilter, setLibraryFilter] = useState("全部");

  const selectedPath = paths.find(p => p.id === selected) || paths[0];
  const recommended = selectedPath.picks.map(findCourse).filter((c): c is Course => Boolean(c));
  const filterItems = [
    { label: "全部", ok: (_: Course) => true },
    { label: "经典哈他", ok: (c: Course) => !/Online|Nadi|Ayurveda|Corporate|Children/.test(c.title) },
    { label: "线上与专题", ok: (c: Course) => /Online|Eye|Children|Nada|Shanmukhi/.test(c.title) },
    { label: "阿育吠陀与团体", ok: (c: Course) => /Nadi|Ayurveda|Corporate/.test(c.title) }
  ];
  const filtered = courses.filter(c => (filterItems.find(x => x.label === libraryFilter) || filterItems[0]).ok(c));
  const choose = (id: PathId) => { setSelected(id); if (typeof document !== "undefined") setTimeout(() => document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80); };

  return (
    <>
      <Head>
        <title>Yoga Sri | 古典哈他瑜伽 · 课程与预约</title>
        <meta name="description" content="Yoga Sri 在吉隆坡、八打灵再也及线上提供中文、英文、粤语古典哈他瑜伽课程。选择适合自己的练习方向，了解课程并通过 WhatsApp 咨询报名。" />
        <link rel="canonical" href="https://www.yogasri.org/" />
        <link rel="alternate" hrefLang="zh-Hans" href="https://www.yogasri.org/" />
        <link rel="alternate" hrefLang="en" href="https://www.yogasri.org/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.yogasri.org/" />
        <meta property="og:locale" content="zh_CN" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <header className="site-header">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Yoga Sri 首页" onClick={() => setMenuOpen(false)}><span className="brand-symbol">✳︎</span>Yoga Sri<span className="brand-tail">CLASSICAL PRACTICE</span></a>
          <nav className={"main-nav" + (menuOpen ? " open" : "")} aria-label="主导航">
            <a href="#find" onClick={() => setMenuOpen(false)}>三大学习路径</a>
            <a href="#philosophy" onClick={() => setMenuOpen(false)}>瑜伽 × 阿育吠陀</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>认识 Yoga Sri</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>常见问题</a>
            <a href={whatsapp()} className="nav-mobile-cta" target="_blank" rel="noreferrer">WhatsApp 咨询</a>
          </nav>
          <div className="language-switch" role="group" aria-label="網站語言"><a href="/" lang="zh-Hans" hrefLang="zh-Hans" aria-current="page">中文</a><span aria-hidden="true">/</span><a href="/en" lang="en" hrefLang="en">EN</a></div>
          <a className="header-cta" href={whatsapp()} target="_blank" rel="noreferrer">咨询课程 <ArrowUpRight size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "关闭菜单" : "打开菜单"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> FIVE ELEMENTS · CLASSICAL HATHA YOGA · AYURVEDA</div>
            <h1>从身体开始，<br/><em>探索更完整的自己。</em></h1>
            <p className="hero-lead">古典哈他瑜伽 · 阿育吠陀生活智慧</p>
            <p className="hero-description">以五大元素的传统智慧为理念，将古典哈他瑜伽与阿育吠陀的实践融为一条探索之路。从初学、深入修习到生活养护，与你一起唤醒生命原有的活力。</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#find">探索三大学习路径 <ArrowRight size={18}/></a>
              <a className="text-link" href="#featured">浏览课程 <ArrowUpRight size={17}/></a>
            </div>
            <div className="hero-proof"><span>2017 教师训练</span><i/><span>1750+ 小时系统学习</span><i/><span>中文 · English · 粤语</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><img src="/images/yoga-sri-portrait.jpeg" alt="Yoga Sri 的个人照片" fetchPriority="high" /></div>
            <div className="hero-stamp"><Kolam /><small>ROOTED IN PRACTICE<br/>OPEN TO LIFE</small></div>
            <div className="hero-caption">YOGA SRI <span>·</span> CLASSICAL HATHA YOGA</div>
          </div>
        </section>
        <div className="ribbon"><div className="shell ribbon-inner"><span>土 EARTH</span><span>水 WATER</span><span>火 FIRE</span><span>风 AIR</span><span>空 SPACE</span></div></div>
        <section className="philosophy-section shell" id="philosophy">
          <div className="philosophy-emblem"><Kolam/><span>ONE CONTINUOUS PATH</span></div>
          <div className="philosophy-content">
            <div className="eyebrow">01 / THE PHILOSOPHY</div>
            <h2>古老的智慧，<em>回到生命健康的根源。</em></h2>
            <p className="philosophy-lead">从古典哈他瑜伽与阿育吠陀出发，重新认识身体、生活与生命之间的联系。</p>
            <p>两门源远流长的传统智慧，从不同角度关注生命：瑜伽透过身体、呼吸与内在练习，阿育吠陀则从体质、饮食、作息与自然节律理解日常养护。它们相互补充，指向更有觉察、可持续的生活方式。</p>
            <p>在古典瑜伽的理解中，生命不仅是物质身体，也包含头脑、情绪与更细微的能量层面。当我们开始关注这些层面之间的关系，便有机会更深入地认识自己。</p>
            <div className="wisdom-pair">
              <div><span>YOGA</span><h3>古典哈他瑜伽</h3><p>从身体、呼吸、专注与内在体验出发，探索身心的协调与稳定。</p></div>
              <div><span>AYURVEDA</span><h3>阿育吠陀</h3><p>从五大元素、个人体质、饮食、作息与季节变化出发，探索符合自身需要的生活方式。</p></div>
            </div>
            <p className="philosophy-closing">与 Yoga Sri 一起，从古老智慧中寻找适合现代生活的实践方式，重新唤醒生命原有的活力。</p>
            <a className="text-link" href="#find">选择你的学习起点 <ArrowRight size={17}/></a>
          </div>
        </section>
        <section className="section-pad shell" id="find">
          <div className="section-heading split-heading">
            <div><div className="eyebrow">02 / THREE PATHWAYS</div><h2>一条理念，<em>三种开始。</em></h2></div>
            <p>不需要先读懂十多门课程。先选择你现在的学习阶段，再认识对应的练习与安排。</p>
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
              <div><div className="eyebrow">YOUR LEARNING PATH</div><h3>{selectedPath.title} · {selectedPath.english}</h3><p>{selectedPath.description} 实际开课安排与个人适合度由老师确认。</p></div>
              <a className="text-link" href={whatsapp(selectedPath.title)} target="_blank" rel="noreferrer">不确定？直接问老师 <ArrowUpRight size={17}/></a>
            </div>
            <div className={"course-grid recommend-grid" + (selected === "reset" ? " reset-grid" : "")}>
              {selected === "reset" && <article className="course-card retreat-product">
                <div className="retreat-graphic"><span className="program-symbol retreat" aria-hidden="true" /></div>
                <div className="course-content">
                  <div className="course-meta"><span>沉浸式静修与学习</span><span className="course-price">当期咨询</span></div>
                  <h3>瑜伽 × 阿育吠陀静修营</h3>
                  <p className="course-desc">结合古典瑜伽教学、五大元素理念与阿育吠陀传统生活方式教育，体验更有意识的日常节奏。</p>
                  <p className="course-fit"><span>适合</span>希望通过完整静修体验探索自身生活方式的人</p>
                  <details className="course-details"><summary>报名与安排说明 <ChevronDown size={16}/></summary><div className="detail-body"><p>具体营期、教学内容、住宿、医生、费用及可能包含的项目以当期公告为准。涉及疗程时须由合格医生评估适合度。</p></div></details>
                  <a className="course-action" href={whatsapp("瑜伽 × 阿育吠陀静修营")} target="_blank" rel="noreferrer">咨询静修营安排 <ArrowUpRight size={18}/></a>
                </div>
              </article>}
              {recommended.map((course, i) => <CourseCard course={course} key={course.title} badge={selected === "reset" ? "一日 / 基础 / 深度" : i === 0 ? "从这个方向开始" : ""} />)}
            </div>
          </div>
        </section>
        <section className="section-pad featured-section" id="featured">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><div className="eyebrow">03 / THE PRACTICES</div><h2>值得认识的<em>经典练习</em></h2></div>
              <p>不是越难越好，而是在合适的阶段，学习完整、准确、能够长期坚持的练习。</p>
            </div>
            <div className="featured-layout">
              <div className="feature-image"><img src="/images/surya-shakti.jpg" alt="Surya Shakti 古典哈他瑜伽动作" loading="lazy" /><div className="feature-image-label">THE ART OF PRACTICE</div></div>
              <div className="feature-copy"><Kolam className="feature-kolam"/><div className="eyebrow">CLASSICAL HATHA YOGA</div><h3>让练习成为<br/>可以陪伴一生的基础。</h3><p>从温和的 Upa Yoga，到太阳系列、Yogasanas、Angamardana 与 Bhuta Shuddhi，每套练习都有不同的学习目的与准备要求。</p><a href="#catalog" className="btn btn-secondary" onClick={() => setLibraryOpen(true)}>浏览完整课程资料 <ArrowRight size={17}/></a></div>
            </div>
            <div className="practice-gallery" role="region" aria-label="练习照片相册，可左右滑动" tabIndex={0}>
              {[["upa-yoga.jpg", "Upa Yoga"], ["surya-shakti.jpg", "Surya Shakti"], ["surya-kriya.jpg", "Surya Kriya"], ["yogasanas.jpg", "Yogasanas"], ["angamardana-standing.jpg", "Angamardana"]].map(([src, name]) => <figure key={src}><img src={"/images/" + src} alt={name + " 练习照片"} loading="lazy"/><figcaption>{name}</figcaption></figure>)}
            </div>
            <div className="signature-row"><div><span className="signature-num">01</span><strong>精确教学</strong><span>保留传统练习的完整步骤</span></div><div><span className="signature-num">02</span><strong>多语言指导</strong><span>中文 · English · 粤语</span></div><div><span className="signature-num">03</span><strong>持续练习</strong><span>从课程到个人日常修习</span></div></div>
            <div id="catalog" className="catalog-box">
              <button className="catalog-toggle" type="button" onClick={() => setLibraryOpen(!libraryOpen)} aria-expanded={libraryOpen}>
                <span><small>COURSE LIBRARY</small><strong>完整课程资料库 <span className="count">{courses.length} 门课程与项目</span></strong></span><span className="catalog-plus">{libraryOpen ? "−" : "+"}</span>
              </button>
              {libraryOpen && <div className="catalog-body">
                <p className="catalog-help">这里保留完整课程介绍、益处、适合对象与课前须知。你可以先按主题筛选。</p>
                <div className="filter-row" role="group" aria-label="课程类别筛选">{filterItems.map(f => <button type="button" key={f.label} className={libraryFilter === f.label ? "filter active" : "filter"} onClick={() => setLibraryFilter(f.label)} aria-pressed={libraryFilter === f.label}>{f.label}</button>)}</div>
                <div className="course-grid catalog-grid">{filtered.map(c => <CourseCard key={c.title} course={c} photo={visibleNames.some(name => c.title.startsWith(name))} />)}</div>
              </div>}
            </div>
          </div>
        </section>
        <section className="section-pad about-section shell yoga-story" id="about" aria-labelledby="story-title">
          <div className="about-copy">
            <div className="eyebrow">04 / THE YOGA SRI STORY</div>
            <h2 id="story-title">從尋找自由，<em>到學習如何照顧生命。</em></h2>
            <p>我是 Yoga Sri，來自馬來西亞。</p>
            <p>在成為瑜伽老師之前，我修讀心理學，也曾擔任卡內基訓練講師與績效顧問。那時的工作，是陪伴人們提升能力、突破限制。而在自己的生活裡，我也一直探索：<strong>我們如何活出潛力，同時保有內在的自在？</strong></p>
            <p>這個提問，帶我走向瑜伽。</p>
            <p>2017 年，我完成了超過 1,750 小時的 Isha 哈他瑜伽師資培訓，獲得了 Yoga Sri 這個名字。從 2018 年開始，我投入全職教學，在馬來西亞、台灣、中國、日本與印度等地，與不同背景的學員相遇。</p>
            <details className="story-details">
              <summary>閱讀完整故事 <ChevronDown size={18} aria-hidden="true" /></summary>
              <div className="story-body">
                <p>每一次教學，都讓我更關心一件事：課堂上的練習，如何真正走進一個人的生活？當工作忙碌、身體疲倦、心裡充滿牽掛時，我們是否仍有方法照顧自己？</p>
                <h3>讓古老的智慧，回到日常</h3>
                <p>哈他瑜伽給了我一條從身體開始、深入觀察自己的道路。隨著對阿育吠陀的學習與親身體驗，我也開始更細緻地理解飲食、作息、環境與個人狀態之間的關係。</p>
                <p>這些探索逐漸成為 Yoga Sri 的教學方向：以古典哈他瑜伽為根基，結合阿育吠陀的生活觀點，並在需要時與專業醫師合作，陪伴學員找到適合自己的練習與養護節奏。</p>
                <p>你可以從一堂入門課開始，也可以留一段時間，深入認識自己的身體。練習的深度，會在一次次真實的投入裡慢慢累積。</p>
                <h3>自由，也包括好好照顧自己</h3>
                <p>以前，我嚮往的自由，是去不同的地方，做喜歡的事，活出生命的可能。</p>
                <p>走過多年的教學與探索，如今的我，也珍惜另一種自由：聽見自己的需要，尊重身體的節奏，清楚地做選擇，並為自己的生活承擔責任。</p>
                <p>我仍在這條路上學習。作為老師，我願意分享親身實踐的工具，也尊重每個人不同的起點與步伐。</p>
                <p>這是我想透過 Yoga Sri 帶給你的陪伴。</p>
              </div>
            </details>
            <p className="story-closing"><strong>從此刻的自己開始，為健康與自在，留一點空間。</strong></p>
            <a className="text-link" href="#find">探索適合你的課程 <ArrowRight size={17} aria-hidden="true" /></a>
            <div className="about-tags"><span>Malaysia based</span><span>Classical Hatha Yoga</span><span>Chinese · English · Cantonese</span></div>
          </div>
          <div className="story-portrait">
            <div className="about-image"><img src="/images/yoga-sri-portrait.jpeg" loading="lazy" alt="Yoga Sri，古典哈他瑜伽老師"/></div>
            <p className="story-caption">YOGA SRI · ROOTED IN PRACTICE, OPEN TO LIFE</p>
          </div>
        </section>
        <section className="booking-section section-pad" id="booking">
          <div className="shell booking-inner"><div><div className="eyebrow">05 / TAKE THE NEXT STEP</div><h2>准备好开始<br/><em>属于你的练习了吗？</em></h2><p>无需先填写复杂表单。告诉我们你感兴趣的课程，我们会通过 WhatsApp 回复可安排的班次、地点与报名步骤。</p></div><div className="booking-card"><div className="booking-label">报名流程 / HOW IT WORKS</div><ol><li><span>01</span>选择课程或学习方向</li><li><span>02</span>WhatsApp 确认班次与适合度</li><li><span>03</span>确认名额并完成报名</li></ol><a className="btn btn-cream" href={whatsapp(selectedPath.title)} target="_blank" rel="noreferrer"><MessageCircle size={19}/> WhatsApp 咨询我的课程 <ArrowUpRight size={18}/></a><small>将自动带入你当前选择的学习方向；不会要求在网页公开填写健康资料。</small></div></div>
        </section>
        <section className="section-pad faq-section shell" id="faq">
          <div className="section-heading split-heading"><div><div className="eyebrow">06 / BEFORE YOU BEGIN</div><h2>你可能还想知道</h2></div><p>从第一次上课到私人课程，我们先回答最常被问到的问题。</p></div>
          <div className="faq-list">
            {[
              ["完全没有瑜伽基础，可以参加吗？","可以。从 Yoga for Joints 或 Hatha Yoga for Beginners 开始。无需先具备柔软度；老师会根据具体练习与个人状况确认适合度。"],
              ["可以用中文上课吗？","可以。Yoga Sri 提供中文、英文与粤语教学；具体语言请以当期班次安排为准。"],
              ["每一门课程都可以马上报名吗？","不是每个项目都有固定开课日期。你可以先询问当前可安排的班次、地点与名额；网站不会显示未经确认的开课时间。"],
              ["如果我有受伤、怀孕或特殊健康情况呢？","请在报名时私下告知老师，并按需要先咨询专业医师。练习不代替医疗诊断、检查或治疗。"],
              ["可以预约私人、企业或线上课程吗？","可以。私人教学、企业与团体工作坊、线上学习及阿育吠陀相关项目均可先通过 WhatsApp 沟通需求。"]
            ].map(([q,a]) => <details key={q} className="faq-item"><summary>{q}<ChevronDown size={20} aria-hidden="true"/></summary><p>{a}</p></details>)}
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="shell footer-grid"><div><div className="footer-logo"><Kolam/> <span>Yoga Sri</span></div><p>Classical practice for a more conscious life.</p></div><div><strong>Explore</strong><a href="#find">三大学习路径</a><a href="#featured">课程资料</a><a href="#about">关于老师</a></div><div><strong>Connect</strong><a href={whatsapp()} target="_blank" rel="noreferrer">WhatsApp: +60 12-672 5549</a><span>Kuala Lumpur · Petaling Jaya · Online</span></div></div><div className="shell footer-bottom"><span>© 2026 Yoga Sri. All rights reserved.</span><span>瑜伽与阿育吠陀教育内容不替代医疗建议。</span></div></footer>
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
      <div className="mobile-action-bar"><a href="#find">找到适合的课程 <ArrowRight size={16}/></a><a href={whatsapp(selectedPath.title)} target="_blank" rel="noreferrer"><MessageCircle size={17}/> 直接咨询</a></div>
    </>
  );
}
