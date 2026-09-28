"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lang } from "@/data/courses";

export function Shell({ children }: { children: (lang: Lang) => React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("yoga-sri-language");
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  const zh = lang === "zh";
  const toggleLanguage = () => {
    const next = zh ? "en" : "zh";
    window.localStorage.setItem("yoga-sri-language", next);
    setLang(next);
  };
  return (
    <>
      <header>
        <Link className="brand" href="/">
          <b>YOGA SRI</b>
          <small>FROM AYUR ROOTS TO YOGIC BLOOM</small>
        </Link>
        <nav>
          <Link href="/courses">{zh ? "课程与方案" : "Programmes"}</Link>
          <Link href="/#about">{zh ? "关于" : "About"}</Link>
          <button onClick={toggleLanguage} aria-label={zh ? "Switch to English" : "切换至中文"}>{zh ? "EN" : "中文"}</button>
          <a className="btn small" href="https://wa.me/60126725549" target="_blank">WhatsApp</a>
        </nav>
      </header>
      <main>{children(lang)}</main>
      <footer>
        <div><b>Yoga Sri</b><br />Classical Hatha Yoga & Ayurveda</div>
        <div>Kuala Lumpur · Petaling Jaya · Online<br />中文 · English · 粤语</div>
        <div>© 2026 Yoga Sri Enterprise</div>
      </footer>
    </>
  );
}
