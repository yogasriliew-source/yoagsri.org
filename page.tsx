import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Heart, Leaf, MessageCircle, Sparkles, MapPin, Phone } from "lucide-react";

export default function YogaSriWebsite() {
  const courses = [
    {
      title: "Yoga for Joints｜关节舒展瑜伽",
      desc: "适合初学者、久坐上班族、身体僵硬或想温和开始练习的人。通过简单、安全的动作，让身体重新找回轻盈与流动。",
      price: "RM80 起",
    },
    {
      title: "Hatha for Beginners｜初学者哈他瑜伽",
      desc: "为没有瑜伽基础的学员设计，帮助你学习正确的身体使用、呼吸配合与稳定练习方式。",
      price: "RM180 起",
    },
    {
      title: "Yogasanas｜经典瑜伽体式课程",
      desc: "Isha 经典哈他瑜伽核心课程，适合想深入学习体式、稳定能量与建立长期练习基础的学员。",
      price: "RM800 起",
    },
    {
      title: "Bhuta Shuddhi｜五大元素净化",
      desc: "通过传统的净化仪式与每日练习，帮助学员建立与五大元素之间更细腻的连接。课程含净化器具。",
      price: "RM800 起",
    },
    {
      title: "Nadi Balance Scan｜脉诊平衡检测",
      desc: "结合阿育吠陀医生解析与瑜伽顾问咨询，帮助你了解自己的体质状态，并找到更适合的练习与养护方向。",
      price: "RM180 起",
    },
    {
      title: "Yoga × Ayurveda Programs｜瑜伽 × 阿育吠陀整合课程",
      desc: "结合经典哈他瑜伽、体质分析、饮食建议与日常养护，为学员设计更完整的身心平衡体验。",
      price: "预约咨询",
    },
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
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.title} className="rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-7">
                <h3 className="font-serif text-2xl mb-3">{course.title}</h3>
                <p className="text-stone-600 leading-7 mb-5">{course.desc}</p>
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
