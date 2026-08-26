import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Yoga Sri | Classical Hatha Yoga & Ayurveda in Malaysia",description:"中文、英文与粤语指导的古典哈他瑜伽与阿育吠陀课程。"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-Hans"><body>{children}</body></html>}
