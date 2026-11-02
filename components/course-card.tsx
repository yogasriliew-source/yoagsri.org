import Link from "next/link";
import type { Course, Lang } from "@/data/courses";
import { SiteIcon, iconForCourse } from "./site-icon";

export function CourseCard({ course: c, lang }: { course: Course; lang: Lang }) {
  const zh = lang === "zh";
  return <article className="card kolam-course-card">
    <div className="top">
      <span>{c.type[lang]}</span>
      <i>{c.status[lang]}</i>
    </div>
    <div className="course-symbol">
      <SiteIcon name={iconForCourse(c.slug)} size={86} />
      <span className="course-symbol-rule" />
    </div>
    <h3>{c.title[lang]}</h3>
    <p>{c.summary[lang]}</p>
    <dl>
      <div><dt>{zh ? "日期" : "Date"}</dt><dd>{c.date[lang]}</dd></div>
      <div><dt>{zh ? "地点" : "Place"}</dt><dd>{c.place[lang]}</dd></div>
      <div><dt>{zh ? "费用" : "Fee"}</dt><dd>{c.price[lang]}</dd></div>
    </dl>
    <Link className="link" href={`/courses/${c.slug}`}>{zh ? "查看课程详情 →" : "View course details →"}</Link>
  </article>;
}
