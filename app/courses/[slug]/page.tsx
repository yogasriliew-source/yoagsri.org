import {notFound} from "next/navigation";
import {CourseDetail} from "@/components/course-detail";
import {courses,getCourse} from "@/data/courses";
export function generateStaticParams(){return courses.map(c=>({slug:c.slug}))}
export default function Page({params}:{params:{slug:string}}){const course=getCourse(params.slug);if(!course)notFound();return <CourseDetail course={course}/>}
