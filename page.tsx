"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Heart, Leaf, MessageCircle, Sparkles, MapPin, Phone } from "lucide-react";

export default function YogaSriWebsite() {
  // Editorial source: uploaded 课程产品目录.xlsx (课程简介、课程益处、precaution、儿童课程、企业课程).
  // Historic workbook prices were intentionally not imported. Verify any health-specific eligibility individually.
  const courses = [
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
        "title": "Yoga Namaskar｜瑜伽合十礼",
        "desc": "以重复而有意识的动作，练习脊柱周围的稳定与身体协调。",
        "price": "预约咨询",
        "duration": "依课程安排",
        "suitable": "希望建立脊柱活动及日常练习习惯的人",
        "overview": "Yoga Namaskar（瑜伽合十礼）是通过规律、细致的动作练习关注脊柱及其周边肌群的古典瑜伽方法，适合作为日常身体觉察练习。",
        "benefits": [
            "支持脊柱周边肌群的力量与活动能力",
            "培养身体协调和平衡感",
            "帮助建立持续而有意识的日常练习习惯"
        ],
        "preparation": [
            "原始课程资料列明 Yoga Namaskar 一般适合7岁及以上；未成年学员须参与适龄课程。",
            "请携带瑜伽垫，按具体班次要求准备空腹状态。",
            "孕期及有脊柱、膝关节或近期手术问题者，应先由老师确认是否适合。"
        ]
    },
    {
        "title": "Yoga for Memory & Focus｜专注力与记忆力瑜伽",
        "desc": "透过身体、呼吸与注意力练习，培养清明、稳定的专注状态。",
        "price": "预约咨询",
        "duration": "约 120 分钟",
        "suitable": "学生、忙碌上班族与想培养专注习惯的人",
        "overview": "依古典瑜伽练习组合设计的专题课程，以关节舒展、基础体式、呼吸与专注练习，帮助学员培养稳定而清晰的注意力。注重从身体和呼吸出发建立专注，而非依靠持续紧绷来强迫集中。",
        "benefits": [
            "培养注意力及学习时的清晰感",
            "支持身体、头脑与情绪的平衡",
            "建立应对日常压力与疲劳的放松习惯"
        ],
        "preparation": [
            "适合一般12岁以上学员；无需瑜伽基础。",
            "请携带瑜伽垫，按具体练习遵守课前空腹要求。",
            "孕期、疝气、近期大型手术及颈背部疾病等情况，报名前请先与老师确认。"
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
        "duration": "完整系列或站／蹲／坐／躺模块",
        "suitable": "希望建立体能与动作控制力的人",
        "overview": "Angamardana（安伽玛达那）是由多种动态练习组成的传统瑜伽健身体系，强调无需器械，通过身体本身发展力量、灵活度、耐力与协调。课程可按完整体系或站、蹲、坐、躺等模块安排。",
        "benefits": [
            "帮助强健脊柱周边、骨骼与肌肉系统",
            "培养力量、体能、柔韧与身体控制",
            "改善身体活动中的轻盈感与协调感"
        ],
        "preparation": [
            "这是一套较有强度的动态练习；儿童参与和模块选择须由老师按年龄、体能与课程安排确认。",
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
        "title": "Jala Neti｜瑜伽洗鼻术",
        "desc": "传统瑜伽的鼻腔清洁练习，需在正确指导下学习。",
        "price": "预约咨询",
        "duration": "依课程安排",
        "suitable": "希望认识传统瑜伽鼻腔清洁方法的人",
        "overview": "Jala Neti 是传统瑜伽中的鼻腔清洁练习，特别强调正确的教学、卫生和操作准备。课程以安全、规范地认识这项方法为主，不作为耳鼻喉疾病的治疗。",
        "benefits": [
            "认识传统瑜伽的个人清洁习惯",
            "学习在指导下理解正确的使用与卫生原则",
            "培养对鼻腔舒适度和身体状态的觉察"
        ],
        "preparation": [
            "必须在合格老师的指导下学习，未上课前不要根据网页文字自行操作。",
            "鼻窦或耳部疾病、近期手术、出血、感染及其他特殊状况请先咨询医生。",
            "报名后再由老师说明所需器具、清洁要求及适用条件。"
        ]
    },
    {
        "title": "Children's Yoga｜儿童瑜伽",
        "desc": "按年龄使用专门的瑜伽练习组合，让孩子在轻松的引导中发展身体与专注。",
        "price": "预约咨询",
        "duration": "依适龄课程安排",
        "suitable": "希望从适龄活动和专注练习开始的儿童及家庭",
        "overview": "儿童课程可依年龄和活动能力安排温和的 Upa-Yoga、Yoga Namaskar、呼吸与声音练习，部分班次也可包含专门的儿童版 Surya Shakti。练习内容和强度因年龄而不同，不能直接套用成人课程。",
        "benefits": [
            "培养身体协调与活动习惯",
            "鼓励注意力、规律与自我觉察",
            "透过适龄活动建立愉快的学习体验"
        ],
        "preparation": [
            "不同模块有不同年龄条件，例如部分温和 Upa-Yoga 适合较小儿童；Yoga Namaskar 通常为7岁及以上。",
            "Surya Shakti 儿童班须使用7至13岁专门教材与指定教学安排。",
            "请由家长提供学童健康状况并按课程通知准备衣物、瑜伽垫和饮食间隔。"
        ]
    }
];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-wide">Yoga Sri</div>
          <nav className="hidden md:flex gap-6 text-sm text-stone-600">
            <a href="#about" className="hover:text-stone-900">关于</a>
            <a href="#courses" className="hover:text-stone-900">课程</a>
            <a href="#booking" className="hover:text-stone-900">预约</a>
            <a href="#contact" className="hover:text-stone-900">联系</a>
          </nav>
          <a href="https://wa.me/60126725549" target="_blank" rel="noreferrer">
            <Button className="rounded-full px-5">WhatsApp 预约</Button>
          </a>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-4">Classical Hatha Yoga · Ayurveda · Chinese Guidance</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
            让身体安定下来，<br />让生命重新有空间呼吸。
          </h1>
          <p className="text-lg text-stone-650 leading-8 mb-8">
            Yoga Sri 提供中文指导的 Isha 经典哈他瑜伽课程，并结合阿育吠陀体质分析，帮助初学者与长期练习者找到适合自己的练习、养护与身心平衡方式。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking"><Button size="lg" className="rounded-full px-8">查看课程与报名</Button></a>
            <a href="#about"><Button size="lg" variant="outline" className="rounded-full px-8">认识 Yoga Sri</Button></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-amber-100 via-stone-200 to-emerald-100 shadow-xl flex items-center justify-center p-8">
            <div className="text-center">
              <Sparkles className="mx-auto mb-5 h-12 w-12 text-stone-600" />
              <p className="font-serif text-3xl mb-4">Classical Practice for Modern Life</p>
              <p className="text-stone-600 leading-7">这里可以放 Yoga Sri 的专业照片或课程现场照片</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-4">About Yoga Sri</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">把古老的瑜伽智慧，带回现代人的生活。</h2>
            <p className="text-stone-600 leading-8 mb-5">
              Yoga Sri 是一位受过完整训练的 Isha Hatha Yoga 老师，自 2017 年完成密集教师培训后，持续在马来西亚、中国、台湾、日本、印度及线上带领中文与英文课程。
            </p>
            <p className="text-stone-600 leading-8 mb-5">
              她特别理解中文学员在学习经典瑜伽时常遇到的困难：听不懂英文指令、不确定动作是否正确、练习很努力却不知道如何调整身体状态。因此，她的课程注重清晰引导、安全细节与长期练习的建立。
            </p>
            <p className="text-stone-600 leading-8">
              近年来，Yoga Sri 也结合阿育吠陀医生的体质分析与生活建议，帮助学员从瑜伽练习、饮食、作息与身体养护中，找到更完整的平衡方式。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Card className="rounded-3xl shadow-sm"><CardContent className="p-7"><Heart className="mb-4" /><h3 className="font-serif text-2xl mb-3">中文清晰指导</h3><p className="text-stone-600 leading-7">让中文学员可以准确、安全、无障碍地学习经典哈他瑜伽。</p></CardContent></Card>
            <Card className="rounded-3xl shadow-sm"><CardContent className="p-7"><Leaf className="mb-4" /><h3 className="font-serif text-2xl mb-3">瑜伽 × 阿育吠陀</h3><p className="text-stone-600 leading-7">从体质、饮食、练习与日常节奏，建立更完整的身心支持。</p></CardContent></Card>
            <Card className="rounded-3xl shadow-sm sm:col-span-2"><CardContent className="p-7"><CalendarDays className="mb-4" /><h3 className="font-serif text-2xl mb-3">适合忙碌现代人</h3><p className="text-stone-600 leading-7">特别适合工作忙碌、家庭责任重，却想重新照顾身体与内在的人。课程可以从温和入门开始，也可以进入更深入的经典哈他瑜伽与五大元素净化。</p></CardContent></Card>
          </div>
        </div>
      </section>

      <section id="courses" className="max-w-6xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-3">Courses</p>
          <h2 className="font-serif text-4xl md:text-5xl">课程介绍</h2>
          <p className="mt-4 text-stone-600">选择课程后，展开查看完整介绍、练习益处及各课程专属的课前须知。</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-7">
                <h3 className="font-serif text-2xl mb-3">{course.title}</h3>
                <p className="text-stone-600 leading-7 mb-5">{course.desc}</p>
                <details className="group rounded-2xl border border-stone-200 bg-stone-50/70 px-4 py-3 mb-5">
                  <summary className="cursor-pointer flex items-center justify-between gap-3 text-sm font-medium text-stone-800">
                    查看课程详情 <span aria-hidden="true" className="text-lg text-stone-500">＋</span>
                  </summary>
                  <div className="pt-4 mt-3 border-t border-stone-200 space-y-3 text-sm leading-7">
                    <h4 className="font-semibold text-stone-900">完整课程介绍</h4>
                    <p className="text-stone-600">{course.overview}</p>
                    <h4 className="font-semibold text-stone-900">练习益处</h4>
                    <ul className="list-disc pl-5 text-stone-600">{course.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                    <h4 className="font-semibold text-stone-900">适合对象与时长</h4>
                    <p className="text-stone-600">{course.suitable} · {course.duration}</p>
                    <h4 className="font-semibold text-stone-900">课前须知</h4>
                    <ul className="list-disc pl-5 text-stone-600">{course.preparation.map((note) => <li key={note}>{note}</li>)}</ul>
                    <p className="text-xs text-stone-500">以上为课程学习方向及可能体验，非医疗效果保证。如有健康问题，请咨询合格医师。</p>
                  </div>
                </details>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{course.price}</span>
                  <a href="https://wa.me/60126725549" target="_blank" rel="noreferrer" className="text-sm underline">询问详情</a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-3">Who is this for</p>
            <h2 className="font-serif text-4xl md:text-5xl">适合参加的人</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "长期久坐、肩颈僵硬、身体紧绷的人",
              "想开始瑜伽，但担心自己没有基础的人",
              "已经练习 Isha Yoga，想让身体状态更稳定的人",
              "想结合阿育吠陀，了解体质与日常养护的人",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-stone-50 border border-stone-200 p-6 text-stone-700 leading-7">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-stone-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-300 mb-4">Booking</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">预约报名</h2>
          <p className="text-stone-300 leading-8 mb-8 text-lg">
            不确定自己适合哪一个课程？你可以先预约咨询。Yoga Sri 会根据你的身体状态、练习经验、时间安排与目标，建议最适合的开始方式。
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
            <div className="bg-white/10 rounded-3xl p-6"><div className="text-3xl mb-2">1</div><p>选择你感兴趣的课程</p></div>
            <div className="bg-white/10 rounded-3xl p-6"><div className="text-3xl mb-2">2</div><p>WhatsApp 预约时间</p></div>
            <div className="bg-white/10 rounded-3xl p-6"><div className="text-3xl mb-2">3</div><p>确认名额并完成报名</p></div>
          </div>

          <div className="bg-white text-stone-900 rounded-[2rem] p-6 md:p-8 text-left mb-8">
            <h3 className="font-serif text-3xl mb-5">报名时请提供</h3>
            <div className="grid md:grid-cols-2 gap-4 text-stone-700">
              <p>• 姓名 / Name</p>
              <p>• 想报名的课程 / Program</p>
              <p>• 可上课日期与时间 / Preferred date & time</p>
              <p>• 是否有瑜伽经验 / Yoga experience</p>
              <p>• 身体状况或特别注意事项 / Body condition</p>
              <p>• 所在城市 / Location</p>
            </div>
          </div>

          <a href="https://wa.me/60126725549?text=Namaskaram%20Yoga%20Sri%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E9%97%AE%E8%AF%BE%E7%A8%8B%E4%B8%8E%E9%A2%84%E7%BA%A6%E6%8A%A5%E5%90%8D%E3%80%82" target="_blank" rel="noreferrer">
            <Button size="lg" variant="secondary" className="rounded-full px-10">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp 立即预约
            </Button>
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-20">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 mb-3">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl">常见问题</h2>
        </div>
        <div className="space-y-4">
          {[
            ["完全没有瑜伽基础可以参加吗？", "可以。你可以从 Yoga for Joints 或 Hatha for Beginners 开始，课程会以安全、清晰、循序渐进的方式进行。"],
            ["课程是中文教学吗？", "是的，Yoga Sri 可提供中文、英文、粤语指导，特别适合希望用中文准确学习经典瑜伽的学员。"],
            ["我身体比较僵硬，适合吗？", "适合。身体僵硬不是问题，反而是开始练习的原因。老师会根据你的状态给予适合的调整。"],
            ["可以预约私人课程或团体课程吗？", "可以。私人课程、小团体课程、企业课程、静修营与瑜伽 × 阿育吠陀合作项目都可以预约咨询。"],
          ].map(([q, a]) => (
            <div key={q} className="rounded-3xl bg-white border border-stone-200 p-6">
              <h3 className="font-serif text-2xl mb-2">{q}</h3>
              <p className="text-stone-600 leading-7">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-5 py-16">
        <div className="rounded-[2rem] bg-white shadow-sm p-8 md:p-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-serif text-4xl mb-4">联系 Yoga Sri</h2>
            <p className="text-stone-600 leading-7">欢迎通过 WhatsApp 预约课程、询问私人咨询、企业课程、静修营或瑜伽 × 阿育吠陀合作项目。</p>
          </div>
          <div className="space-y-4 text-stone-700">
            <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> +6012-6725549</p>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> Kuala Lumpur / Petaling Jaya / Online</p>
            <p className="flex items-center gap-3"><MessageCircle className="h-5 w-5" /> Facebook: YogaSriNowYoga</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        © 2026 Yoga Sri. Classical Hatha Yoga & Ayurveda Guidance.
      </footer>
    </div>
  );
}
