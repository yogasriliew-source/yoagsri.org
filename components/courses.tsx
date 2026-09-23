"use client";
import { Shell } from "./shell";
import { CourseCard } from "./course-card";
import { coursesByCollection } from "@/data/courses";

export function Courses() {
  return (
    <Shell>
      {(lang) => {
        const zh = lang === "zh";
        const sections = [
          { key: "upcoming" as const, eyebrow: "SEP–OCT 2026", zh: "近期课程", en: "Upcoming programmes" },
          { key: "hatha" as const, eyebrow: "CLASSICAL HATHA YOGA", zh: "固定招生 · 经典哈他瑜伽", en: "Rolling enrolment · Classical Hatha Yoga" },
          { key: "ayurveda" as const, eyebrow: "AYURVEDA CARE", zh: "阿育吠陀评估与重启", en: "Ayurveda assessments & reset pathways" },
          { key: "services" as const, eyebrow: "PRIVATE · CORPORATE", zh: "私人教学与企业合作", en: "Private teaching & corporate programmes" },
        ];

        return (
          <>
            <section className="pageHero">
              <p className="eyebrow">YOGA SRI · MALAYSIA · ONLINE</p>
              <h1>{zh ? "课程与养护方案" : "Programmes & Care Pathways"}</h1>
              <p>{zh ? "从近期实体课程，到长期经典哈他瑜伽、阿育吠陀 Nadi Scan 与重启方案，都集中在这里。价格与已确认排期直接列出；预约制项目可通过 WhatsApp 进一步沟通。" : "Find upcoming in-person courses, recurring classical Hatha Yoga, Ayurveda Nadi Scan and reset pathways in one place."}</p>
            </section>

            {sections.map((section) => {
              const items = coursesByCollection(section.key);
              return (
                <section className="section" key={section.key} id={section.key}>
                  <div className="heading">
                    <div>
                      <p className="eyebrow">{section.eyebrow}</p>
                      <h2>{zh ? section.zh : section.en}</h2>
                    </div>
                  </div>
                  <div className="grid">
                    {items.map((course) => (
                      <CourseCard key={course.slug} course={course} lang={lang} />
                    ))}
                  </div>
                </section>
              );
            })}
          </>
        );
      }}
    </Shell>
  );
}
