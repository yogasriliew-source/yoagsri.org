"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Heart, Leaf, MessageCircle, Sparkles, MapPin, Phone } from "lucide-react";

export default function YogaSriWebsite() {
  const courses = [
    {
        "title": "Yoga for Joints｜关节舒展瑜伽",
        "desc": "温和启动关节与肌肉，让身体从久坐与紧绷中重新找到轻盈感。",
        "price": "RM80 起",
        "duration": "约 60–90 分钟",
        "suitable": "零基础、久坐或想温和开始的人",
        "overview": "以 Upa Yoga／关节激活练习为基础，透过简单动作认识身体的活动范围，逐步建立舒适、稳定的日常练习习惯。",
        "benefits": [
            "帮助活动关节与舒缓日常僵硬",
            "提升身体觉察与灵活度",
            "支持日常活动后的放松"
        ],
        "preparation": [
            "无需瑜伽经验；请穿方便伸展的衣物并自备瑜伽垫。",
            "建议在课前至少 1.5 小时结束正餐；可饮清水。",
            "如有关节疼痛、近期受伤或术后恢复情况，请事先告知老师。"
        ]
    },
    {
        "title": "Hatha Yoga for Beginners｜哈他瑜伽入门",
        "desc": "从基础体式与呼吸练习，建立更稳定的身体觉察及练习基础。",
        "price": "RM80 起",
        "duration": "依当期班次安排",
        "suitable": "希望循序渐进学习古典哈他瑜伽的初学者",
        "overview": "透过适合入门的基础体式、坐姿准备与 Nadi Shuddhi 呼吸练习，学习如何以细致、稳定的方式使用身体与呼吸。",
        "benefits": [
            "帮助舒展下肢与改善坐姿舒适度",
            "培养身体、呼吸和注意力的协调",
            "为后续经典哈他练习奠定基础"
        ],
        "preparation": [
            "无需瑜伽基础；请自备瑜伽垫并穿宽松衣物。",
            "部分体式需要空腹，报名后请依指定练习遵守饮食间隔。",
            "孕期、疝气、近期大型手术或肌肉骨骼伤病，请报名时先与老师确认适用练习。"
        ]
    },
    {
        "title": "Yoga Namaskar｜瑜伽合十礼",
        "desc": "以重复而有意识的动作，练习脊柱周围的稳定与身体协调。",
        "price": "预约咨询",
        "duration": "依课程安排",
        "suitable": "希望建立脊柱活动及日常练习习惯的人",
        "overview": "瑜伽合十礼以一系列温和而细致的动作关注脊柱与周边肌群，作为日常瑜伽练习的一部分。",
        "benefits": [
            "支持脊柱周边肌群的活动与协调",
            "帮助建立身体稳定感",
            "适合培养规律、专注的练习节奏"
        ],
        "preparation": [
            "请自备瑜伽垫，并穿便于活动的服装。",
            "建议在课前至少 1.5 小时结束正餐；可饮清水。",
            "有严重背部问题、近期手术或急性疼痛者，先向老师说明并寻求医疗建议。"
        ]
    },
    {
        "title": "Yoga for Memory & Focus｜专注力与记忆力瑜伽",
        "desc": "透过身体、呼吸与注意力练习，培养清明、稳定的专注状态。",
        "price": "预约咨询",
        "duration": "约 120 分钟",
        "suitable": "学生、忙碌上班族与想培养专注习惯的人",
        "overview": "根植于古典瑜伽的身心练习组合，关注注意力、身体稳定、呼吸与日常压力的管理。课程不会要求学员靠紧绷和用力来维持专注。",
        "benefits": [
            "培养专注与日常学习觉察",
            "支持放松与情绪稳定",
            "帮助建立更有节奏的工作及学习状态"
        ],
        "preparation": [
            "一般适合 12 岁以上，无需瑜伽基础。",
            "建议课前 4 小时不吃正餐，并自备瑜伽垫。",
            "孕期、疝气、近期大型手术或颈背部疾病等，请先告知老师并确认可参加的练习。"
        ]
    },
    {
        "title": "Surya Shakti｜太阳能量练习",
        "desc": "动态的古典哈他练习，重点培养力量、耐力与身体活力。",
        "price": "RM350",
        "duration": "依当期课程安排",
        "suitable": "希望提升体能、学习规律身体练习的人",
        "overview": "Surya Shakti 是由一系列动态姿势组成的传统练习，重点在有意识地使用身体、培养力量与活力。",
        "benefits": [
            "发展力量、柔韧与身体协调",
            "提升动作中的注意力",
            "帮助建立规律的体能练习习惯"
        ],
        "preparation": [
            "请自备瑜伽垫及适合活动的衣物。",
            "此课程有一定身体活动强度，课前须按老师指示保持空腹。",
            "有心血管状况、关节伤病、孕期、疝气或近期手术者，报名时请先说明。"
        ]
    },
    {
        "title": "Surya Kriya｜太阳克里亚",
        "desc": "21 个步骤组成的古典练习，注重身体、呼吸与内在稳定。",
        "price": "RM450",
        "duration": "依当期课程安排",
        "suitable": "希望深入经典哈他瑜伽并建立长期练习基础的人",
        "overview": "Surya Kriya 的名称意为与太阳相关的内在过程。练习以细致的步骤结合姿势、呼吸和注意力，强调完整、准确的学习与独立练习。",
        "benefits": [
            "培养身体稳定与注意力",
            "深化对呼吸和身体协调的觉察",
            "作为静坐及深入练习的准备"
        ],
        "preparation": [
            "建议按完整课程参加，以学习每个步骤及必要修正。",
            "课前需要保持空腹；请依报名后的正式指引准备。",
            "孕期、近期手术、疝气及心脏、脊柱或关节问题，请先告知老师。"
        ]
    },
    {
        "title": "Surya Shakti + Surya Kriya｜太阳系列组合",
        "desc": "将动态力量练习与精细的古典练习结合，循序建立身体基础。",
        "price": "RM600",
        "duration": "依当期组合课程安排",
        "suitable": "希望系统学习太阳系列的学员",
        "overview": "同属太阳系列的两套经典练习各有侧重点：Surya Shakti 注重动态力量与身体活力；Surya Kriya 注重步骤、呼吸、专注与内在稳定。",
        "benefits": [
            "兼顾体能与精细的身体觉察",
            "建立较完整的自主练习基础",
            "帮助培养持续练习的节奏"
        ],
        "preparation": [
            "组合课包含不同强度与步骤，请参加完整教学。",
            "课前空腹与饮食间隔以老师提供的课程通知为准。",
            "有伤病、怀孕或近期大型手术等情况，报名时请先说明。"
        ]
    },
    {
        "title": "Yogasanas｜经典瑜伽体式",
        "desc": "以精准而稳定的体式学习，深化身体与内在觉察。",
        "price": "RM850",
        "duration": "多节完整课程；依当期安排",
        "suitable": "愿意耐心学习体式细节并持续自主练习的人",
        "overview": "Yogasanas 不只是一般的伸展或健身课程。它强调以有意识的姿势、稳定的保持及精细的身体校准，建立对身心的深入觉察。",
        "benefits": [
            "培养平衡、稳定与身体协调",
            "促进对姿势与呼吸的觉察",
            "支持长期、系统的个人瑜伽练习"
        ],
        "preparation": [
            "请预留完整课程时间，避免漏课。",
            "练习前须遵守指定空腹要求，并自备瑜伽垫。",
            "有脊柱、膝关节、颈部疾病、孕期或术后状况者，先与老师确认练习适宜性。"
        ]
    },
    {
        "title": "Angamardana｜安伽玛达那",
        "desc": "不依赖器械的动态练习，培养力量、灵活性与身体掌控。",
        "price": "全套 RM650｜单模块 RM180 起",
        "duration": "完整系列或站／蹲／坐／躺模块",
        "suitable": "希望建立体能与动作控制力的人",
        "overview": "Angamardana 是一套结合多种动态动作的传统瑜伽练习，透过身体本身作为练习工具，系统性发展协调、耐力与力量。",
        "benefits": [
            "帮助强化肌肉与身体稳定性",
            "培养耐力和活动能力",
            "发展动作协调及身体觉察"
        ],
        "preparation": [
            "动态强度较高，请确认身体情况适合参加。",
            "课前须依正式通知保持空腹，并自备瑜伽垫。",
            "如有心血管疾病、近期手术、孕期、疝气或肌肉骨骼损伤，请报名时先说明。"
        ]
    },
    {
        "title": "Bhuta Shuddhi｜五大元素净化",
        "desc": "源于古典瑜伽的元素练习，以简洁的日常仪式深化内在觉察。",
        "price": "RM850（含练习器具）",
        "duration": "依当期课程安排",
        "suitable": "对古典瑜伽的元素观与持续练习有兴趣的人",
        "overview": "Bhuta Shuddhi 传统上关注土、水、火、风、空五大元素，并以特定程序作为日常内在练习。课程包含练习方法与所需器具。",
        "benefits": [
            "建立安定且有意识的练习时刻",
            "探索古典瑜伽的五元素观",
            "支持长期内在练习的持续性"
        ],
        "preparation": [
            "报名时请了解课程器具的使用与保管说明。",
            "请遵守老师说明的课前饮食、身体准备及练习条件。",
            "若正在怀孕、患病或有近期手术，请先告知老师以确认参与条件。"
        ]
    },
    {
        "title": "Nada Yoga｜声音瑜伽",
        "desc": "以声音与专注作为练习媒介，体验放松与内在觉察。",
        "price": "预约咨询",
        "duration": "依当期课程安排",
        "suitable": "希望从较温和的声音练习开始的人",
        "overview": "Nada Yoga 在传统瑜伽中运用特定发声与聆听练习，帮助参与者探索声音、注意力及内在体验之间的关系。",
        "benefits": [
            "培养聆听与注意力",
            "支持放松及沉静",
            "探索声音作为冥想准备的方法"
        ],
        "preparation": [
            "无需体式基础；请穿着舒适衣物。",
            "课程可能包含发声与安静聆听，请依现场指示练习。",
            "如有咽喉不适、急性病症或其他特殊情况，请提前告诉老师。"
        ]
    },
    {
        "title": "Shanmukhi Mudra｜夏慕奇手印",
        "desc": "以精微的手印与注意力练习，带回对感官与内在的觉察。",
        "price": "预约咨询",
        "duration": "依当期课程安排",
        "suitable": "希望探索安静、内向的瑜伽练习的人",
        "overview": "Shanmukhi Mudra 是古典瑜伽中的精微练习，强调感官、注意力与内在觉察。适合在老师引导下学习完整步骤。",
        "benefits": [
            "帮助从外在刺激转向内在觉察",
            "支持安静与专注的练习",
            "为进一步的冥想探索打下基础"
        ],
        "preparation": [
            "原课程资料列明 14 岁以上；实际报名资格请向老师确认。",
            "建议至少于课前 2.5 小时完成正餐；可饮清水。",
            "若有眼、耳、鼻相关疾病、急性不适或术后状况，请先确认是否适合练习。"
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
        "overview": "根据参与人数、场地及活动目标组合适合的基础瑜伽、呼吸与专注内容。课程由 Yoga Sri 按团体情况设计。",
        "benefits": [
            "帮助团队建立短暂且有质量的休息时间",
            "支持日常身体活动与压力管理意识",
            "为团队活动提供共同体验"
        ],
        "preparation": [
            "请提前确认场地、人数与参与者年龄层。",
            "如安排体式课程，请让参加者穿方便活动的衣物并备妥瑜伽垫。",
            "活动前收集需调整动作的特殊健康情况；不以团体课代替个人医疗建议。"
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
