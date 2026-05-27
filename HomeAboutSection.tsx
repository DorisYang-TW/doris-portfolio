"use client";

import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────
const paragraphs = [
  "嗨，我是 Doris，一位喜歡把想法一步步落地成好體驗的前端工程師。",
  "我重視畫面的細節與操作的流暢度，也在意每一個流程是否真的符合使用者的直覺與需求。\n對我來說，前端不只是把畫面做出來，而是把複雜需求整理清楚，轉化成容易理解、好操作的產品體驗。",
  "這幾年參與過學習平台、訂閱制系統、品牌網站與商業專案開發。\n從課程流程、預約機制，到 AI 輔助功能與網站無障礙實作，都讓我越來越在意一件事：\n「使用者在操作時，會不會卡住？」",
  "我喜歡和不同角色一起協作，把看似混亂的需求慢慢整理清楚，也很享受功能順利上線、畫面與流程真正順起來，或 Accessibility 成功通過時帶來的成就感。\n對我來說，那種「終於順了」的時刻，是做前端最快樂的事。",
];

const tagGroups = [
  {
    label: "Expertise",
    tags: ["產品思維", "UX 流程規劃", "網站無障礙", "學習平台", "跨部門協作", "流程梳理"],
    style: "border border-gray-200 text-gray-600",
  },
  {
    label: "Traits",
    tags: ["重視細節", "使用者導向", "善於協作", "問題整理"],
    style: "bg-gray-200 text-gray-700 font-medium",
  },
  {
    label: "Tech Stack",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "SCSS"],
    style: "bg-gray-600 text-white font-medium tracking-wide",
  },
];

// ─────────────────────────────────────────────────────
// VERSION B  ·  About Section
// textStyle: "stroke" = 漸層邊框文字 / "fill" = 漸層填色文字
// ─────────────────────────────────────────────────────
function AboutVersionB({ textStyle = "fill" }: { textStyle?: "stroke" | "fill" }) {
  return (
    <section
      className="about_section about_version_b bg-[#F8F7F3] relative z-10 -mt-16 pt-28 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      {/* Watermark text */}
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
          className="bg_display_text bg_display_text_fill absolute top-16 lg:top-16 left-6 lg:left-16 leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          ABOUT
        </div>
      )}

      <div className="relative z-10 w-full max-w-350 mx-auto px-8 lg:px-16 grid grid-cols-12 gap-y-8 lg:gap-16 items-start">

        {/* ── LEFT: 7 cols — 主標 + 長文 ── */}
        <div className="col-span-12 lg:col-span-7 pt-4">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-6"
          >
            關於我
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-black leading-[1.35] tracking-tight text-gray-900 mb-10"
          >
            把複雜的需求，<br />
            整理成順手的產品體驗。
          </motion.h2>

          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                className="text-sm lg:text-base text-gray-500 leading-relaxed whitespace-pre-line"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>

        {/* ── RIGHT: 5 cols — Tag groups ── */}
        <div className="col-span-12 lg:col-span-5 space-y-8 lg:self-end">
          {tagGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 + gi * 0.1, ease: "easeOut" }}
            >
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-3 py-1.5 rounded-full ${group.style}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
// Export
// ─────────────────────────────────────────────────────
export default function HomeAboutSection() {
  return <AboutVersionB textStyle="fill" />;
}
