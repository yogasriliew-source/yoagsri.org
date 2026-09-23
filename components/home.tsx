"use client";
import Link from "next/link";
import { Shell } from "./shell";
import { CourseCard } from "./course-card";
import { featuredCourses } from "@/data/courses";

export function Home() {
  return (
    <Shell>
      {(lang) => {
        const zh = lang === "zh";
        return (
          <>
            <section className="hero">
              <div>
                <p className="eyebrow">CLASSICAL HATHA YOGA · AYURVEDA · MALAYSIA</p>
                <h1>
                  {zh ? (
                    <>从阿育根基，<em>走向瑜伽绽放。</em></>
                  ) : (
                    <>From Ayur roots,<em>to Yogic bloom.</em></>
                  )}
                </h1>
                <p className="intro">
                  {zh
                    ? "Yoga Sri 提供中文、英文与粤语指导的经典哈他瑜伽，并连接阿育吠陀评估、日常养护与深度重启方案，让练习不只停留在课堂，而能真正进入生活。"
                    : "Yoga Sri offers classical Hatha Yoga in Chinese, English and Cantonese, alongside Ayurveda assessments and reset pathways that bring practice into everyday life."}
                </p>
                <div className="actions">
                  <Link className="btn" href="/courses">
                    {zh ? "查看课程与方案" : "Explore programmes"}
                  </Link>
                  <a className="btn ghost" href="https://wa.me/60126725549" target="_blank">
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="art">
                <span />
                <b>From Ayur Roots<br />to Yogic Bloom</b>
              </div>
            </section>

            <section className="section">
              <div className="heading">
                <div>
                  <p className="eyebrow">UPCOMING · SEP–OCT 2026</p>
                  <h2>{zh ? "近期课程" : "Upcoming programmes"}</h2>
                </div>
                <Link className="link" href="/courses">
                  {zh ? "查看全部 →" : "View all →"}
                </Link>
              </div>
              <div className="grid">
                {featuredCourses.map((course) => (
                  <CourseCard key={course.slug} course={course} lang={lang} />
                ))}
              </div>
            </section>

            <section className="paths">
              <p className="eyebrow">THREE WAYS TO BEGIN</p>
              <h2>{zh ? "你可以从三个入口开始" : "Three ways to begin"}</h2>
              <div>
                <article>
                  <i>01</i>
                  <h3>{zh ? "经典哈他瑜伽" : "Classical Hatha Yoga"}</h3>
                  <p>{zh ? "从初学者体验、Surya Shakti、Surya Kriya、Yogasanas、Angamardana 到 Bhuta Shuddhi，建立可长期独立练习的基础。" : "Build a sustainable personal practice through beginner programmes, Surya practices, Yogasanas, Angamardana and Bhuta Shuddhi."}</p>
                </article>
                <article>
                  <i>02</i>
                  <h3>{zh ? "阿育吠陀养护" : "Ayurveda Care"}</h3>
                  <p>{zh ? "从 Nadi Balance Scan 开始，进一步进入一日重启、基础重启或深度重启，让饮食、作息、练习与养护彼此连接。" : "Begin with a Nadi Balance Scan, then move into One-Day, Foundation or Deep Reset pathways that connect food, routine, practice and care."}</p>
                </article>
                <article>
                  <i>03</i>
                  <h3>{zh ? "整合式课程" : "Integrated Programmes"}</h3>
                  <p>{zh ? "五大元素线上课、净化营、私人教学与企业项目，把瑜伽与阿育吠陀整合到更完整的学习与生活体验。" : "Online courses, retreats, private teaching and corporate programmes integrate yoga and Ayurveda into a fuller learning experience."}</p>
                </article>
              </div>
            </section>

            <section id="about" className="about">
              <div className="portrait">
                <b>YOGA SRI</b>
                <small>Malaysia · China · Taiwan · Japan · India</small>
              </div>
              <div>
                <p className="eyebrow">ABOUT YOGA SRI</p>
                <h2>{zh ? "把传统完整地传递，也把它带回真实生活。" : "Preserving the tradition, bringing it into real life."}</h2>
                <p>
                  {zh
                    ? "Yoga Sri 于2017年完成超过1,750小时的 Isha Hatha Yoga 教师训练，持续在马来西亚、中国、台湾、日本、印度及线上带领课程。她的工作重点，是把经典瑜伽清晰地传递给中文学员，并与阿育吠陀医生合作，把练习、体质与日常生活连接起来。"
                    : "Yoga Sri completed more than 1,750 hours of Isha Hatha Yoga teacher training in 2017. Her work focuses on clear transmission of classical yoga for Chinese-speaking students and collaboration with Ayurveda doctors to connect practice, constitution and daily life."}
                </p>
                <div className="stats">
                  <b>2017<small>{zh ? "教师训练" : "Teacher training"}</small></b>
                  <b>1,750+<small>{zh ? "训练小时" : "Training hours"}</small></b>
                  <b>1,500+<small>{zh ? "课程活动" : "Programmes"}</small></b>
                </div>
              </div>
            </section>

            <section className="cta">
              <p className="eyebrow">START FROM WHERE YOU ARE</p>
              <h2>{zh ? "不确定适合哪一门课程或重启方案？" : "Not sure which programme or reset pathway fits you?"}</h2>
              <p>{zh ? "告诉我们你的练习经验、身体状态、时间安排与想改善的生活方向，我们会建议一个合适的开始方式。" : "Share your experience, current condition, schedule and what you want to improve, and we’ll suggest a suitable place to begin."}</p>
              <a className="btn light" href="https://wa.me/60126725549?text=Namaskaram%20Yoga%20Sri%EF%BC%8C%E6%88%91%E6%83%B3%E8%AF%A2%E9%97%AE%E8%AF%BE%E7%A8%8B%E6%88%96%E9%98%BF%E8%82%B2%E5%90%A0%E9%99%80%E9%87%8D%E5%90%AF%E6%96%B9%E6%A1%88%E3%80%82" target="_blank">
                {zh ? "WhatsApp咨询" : "Ask on WhatsApp"}
              </a>
            </section>
          </>
        );
      }}
    </Shell>
  );
}
