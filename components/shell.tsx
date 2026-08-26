"use client";
import Link from "next/link";
import {useState} from "react";
import type {Lang} from "@/data/courses";
export function Shell({children}:{children:(lang:Lang)=>React.ReactNode}){
 const [lang,setLang]=useState<Lang>("zh"), zh=lang==="zh";
 return <><header><Link className="brand" href="/"><b>YOGA SRI</b><small>ROOTED PRACTICE · LIVING WISDOM</small></Link><nav><Link href="/courses">{zh?"马来西亚课程":"Malaysia courses"}</Link><Link href="/#about">{zh?"关于":"About"}</Link><button onClick={()=>setLang(zh?"en":"zh")}>{zh?"EN":"中文"}</button><a className="btn small" href="https://wa.me/60126725549" target="_blank">WhatsApp</a></nav></header><main>{children(lang)}</main><footer><div><b>Yoga Sri</b><br/>Classical Hatha Yoga & Ayurveda</div><div>Kuala Lumpur · Petaling Jaya · Online<br/>中文 · English · 粤语</div><div>© 2026 Yoga Sri Enterprise</div></footer></>
}
