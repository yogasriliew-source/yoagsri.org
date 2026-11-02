import { SiteIcon, type SiteIconName } from "./site-icon";
import type { Lang } from "@/data/courses";

const elements: ReadonlyArray<{
  kind: SiteIconName;
  zh: string;
  en: string;
  qualityZh: string;
  qualityEn: string;
}> = [
  { kind: "earth", zh: "地", en: "Earth", qualityZh: "稳定 · 根基", qualityEn: "Stability · Grounding" },
  { kind: "water", zh: "水", en: "Water", qualityZh: "流动 · 滋养", qualityEn: "Flow · Nourishment" },
  { kind: "fire", zh: "火", en: "Fire", qualityZh: "转化 · 热度", qualityEn: "Transformation · Warmth" },
  { kind: "air", zh: "风", en: "Air", qualityZh: "流动 · 轻盈", qualityEn: "Movement · Lightness" },
  { kind: "space", zh: "空", en: "Space", qualityZh: "开阔 · 包容", qualityEn: "Openness · Spaciousness" },
];

export function FiveElements({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return <section className="five-elements" aria-labelledby="five-elements-title">
    <div className="elements-heading">
      <p className="eyebrow">THE FIVE ELEMENTS · PANCHA MAHABHUTA</p>
      <h2 id="five-elements-title">{zh ? "五大元素 · 自然的五种语言" : "The Five Elements"}</h2>
      <p>{zh
        ? "以南印度 Kolam 点阵与连续曲线为灵感，为五大元素设计一组简约图纹。"
        : "A family of minimal symbols inspired by South Indian kolam dots and flowing lines."}</p>
    </div>
    <div className="element-grid">
      {elements.map((el) => <div className="element-tile" key={el.kind}>
        <SiteIcon name={el.kind} size={102} className={`element-mark element-${el.kind}`} />
        <h3>{zh ? el.zh : el.en}</h3>
        <span className="element-english">{zh ? el.en : el.zh}</span>
        <p>{zh ? el.qualityZh : el.qualityEn}</p>
      </div>)}
    </div>
  </section>;
}
