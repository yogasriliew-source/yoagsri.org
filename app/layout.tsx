import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoga Sri | Classical Hatha Yoga & Ayurveda in Malaysia",
  description:
    "Yoga Sri 马来西亚经典哈他瑜伽、Bhuta Shuddhi、线上课程、Nadi Balance Scan 与阿育吠陀重启方案。中文、English、粤语指导。",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
