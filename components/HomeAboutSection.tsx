"use client";

import { motion } from "framer-motion";

const infoItems = [
  { label: "Experience", value: "7+ Years" },
  { label: "Role", value: "Frontend Engineer" },
  { label: "Stack", value: "React / Next.js" },
  { label: "Focus", value: "UI / UX Focused" },
  { label: "Location", value: "Based in Taiwan" },
];

const descriptionParagraphs = [
  "嗨，我是 Doris。\n擁有 7 年以上前端開發經驗，專注於 React / Next.js 等現代前端技術。",
  "我喜歡將設計與開發之間的距離慢慢拉近，\n透過細緻的互動、舒適的排版與流暢的體驗，打造兼具美感與實用性的網站。",
  "比起華麗的效果，我更在意使用者是否能自然地感受到「好用」與「舒服」。",
];

// ─────────────────────────────────────────────────────
// VERSION A  ·  極簡 Editorial（白底 + 分隔線列表）
// ─────────────────────────────────────────────────────
function AboutVersionA() {
  return (
    <section className="about_section about_version_a py-24 lg:py-32">
      <div className="max-w-350 mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 lg:gap-16 items-center">

        {/* ── LEFT: 5 cols ── */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-5 mb-10"
          >
            <span className="w-12 h-px bg-gray-900 block shrink-0" />
            <span className="text-2xl lg:text-3xl  tracking-[0.3em] uppercase text-gray-900">About Me</span>
          </motion.div>

          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-8"
          >
            Doris Yang
          </motion.h2> */}

          <div className="space-y-5">
            {descriptionParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                className="text-sm lg:text-base text-gray-600 leading-relaxed whitespace-pre-line"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 7 cols — 分隔線列表 ── */}
        <div className="col-span-12 lg:col-span-5">
          {infoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="info_list_item flex items-center justify-between py-5 border-t border-gray-100"
            >
              <span className="text-sm text-gray-400 tracking-wide">{item.label}</span>
              <span className="text-base font-medium text-gray-900">{item.value}</span>
            </motion.div>
          ))}
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
// VERSION B  ·  Bold Gradient（漸層底 + 大字 + 卡片）
// textStyle: "stroke" = 漸層邊框文字 / "fill" = 漸層填色文字
// ─────────────────────────────────────────────────────
function AboutVersionB({ textStyle = "stroke" }: { textStyle?: "stroke" | "fill" }) {
  return (
    <section
      className="about_section about_version_b relative py-24 lg:py-32"
      style={{ background: "#ffffff" }}
    >
      {/* Large watermark text */}
      {textStyle === "stroke" ? (
        <svg
          aria-hidden="true"
          className="absolute -top-4 left-6 lg:left-16 pointer-events-none select-none"
          overflow="visible"
        >
          <defs>
            <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#f9c784" />
              <stop offset="50%"  stopColor="#a4c8f7" />
              <stop offset="100%" stopColor="#c4b5fd" />
            </linearGradient>
          </defs>
          <text
            className="bg_display_text"
            fill="none"
            stroke="url(#aboutGrad)"
            strokeWidth="2"
            y="0.8em"
          >
            ABOUT
          </text>
        </svg>
      ) : (
        <div
          className="bg_display_text bg_display_text_fill absolute -top-4 left-6 lg:left-16 leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          ABOUT
        </div>
      )}

      <div className="relative z-10 max-w-350 mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 lg:gap-16 items-start">

        {/* ── LEFT: 5 cols ── */}
        <div className="col-span-12 lg:col-span-6 pt-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-base tracking-[0.3em] uppercase text-gray-500 mb-5"
          >
            關於我
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-gray-900 mb-8"
          >
            Hi, I&apos;m a<br />Frontend<br />Engineer.
          </motion.h2>

          <div className="space-y-4">
            {descriptionParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                className="text-sm text-gray-600 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 7 cols — Info cards ── */}
        <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">

          {/* 大數字卡 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="info_card bg-white/75 rounded-2xl p-6 flex flex-col justify-between min-h-36"
          >
            <span className="text-6xl font-black text-gray-900 leading-none">7+</span>
            <div className="mt-3">
              <p className="text-xs text-gray-400 tracking-widest uppercase">Years of</p>
              <p className="text-sm font-semibold text-gray-700">Experience</p>
            </div>
          </motion.div>

          {/* Role 卡 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="info_card bg-white/75 rounded-2xl p-6 flex flex-col justify-between min-h-36"
          >
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-white tracking-tight">FE</span>
            </div>
            <div className="mt-4">
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">Role</p>
              <p className="text-sm font-semibold text-gray-700">Frontend Engineer</p>
            </div>
          </motion.div>

          {/* Stack 卡 — 全寬 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.26, ease: "easeOut" }}
            className="info_card col-span-2 bg-white/75 rounded-2xl p-6"
          >
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Focus 卡 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.34, ease: "easeOut" }}
            className="info_card bg-white/75 rounded-2xl p-6"
          >
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">Focus</p>
            <p className="text-sm font-semibold text-gray-700 leading-relaxed">
              UI / UX<br />Focused
            </p>
          </motion.div>

          {/* Location 卡 */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.42, ease: "easeOut" }}
            className="info_card bg-white/75 rounded-2xl p-6"
          >
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-2">Location</p>
            <p className="text-sm font-semibold text-gray-700 leading-relaxed">
              Based in<br />Taiwan 🇹🇼
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
// Export — 選好後刪掉不要的即可
// ─────────────────────────────────────────────────────
export default function HomeAboutSection() {
  return (
    <>
      {/* ══ VERSION A : 極簡 Editorial ══ */}
      <AboutVersionA />

      {/* ══ VERSION B-1 : 漸層邊框文字 ══ */}
      <AboutVersionB textStyle="stroke" />

      {/* ══ VERSION B-2 : 漸層填色文字 ══ */}
      <AboutVersionB textStyle="fill" />
    </>
  );
}
