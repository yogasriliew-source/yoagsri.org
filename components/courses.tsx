"use client";
import {Shell} from "./shell";
import {CourseCard} from "./course-card";
import {courses} from "@/data/courses";
export function Courses(){return <Shell>{lang=><><section className="pageHero"><p className="eyebrow">MALAYSIA · ONLINE</p><h1>{lang==="zh"?"近期课程安排":"Upcoming programmes"}</h1><p>{lang==="zh"?"查看日期、地点、语言与课程内容，选择适合你现在状态的练习。":"Explore dates, locations, languages and programme details."}</p></section><section className="section"><div className="grid">{courses.map(c=><CourseCard key={c.slug} course={c} lang={lang}/>)}</div></section></>}</Shell>}
