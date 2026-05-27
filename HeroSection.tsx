"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const avatarImages = [
  "/image/avatar/avatar_01.JPG",
  "/image/avatar/avatar_02.JPG",
  "/image/avatar/avatar_03.JPG",
];

const SIGNALS = [
  "7+ Years Frontend Experience",
  "Product & LMS Workflow",
  "7+ Sites Accessibility Passed",
  "AI Workflow & LMS Platform",
];

const ACCENT = "#c06848";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % avatarImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero_section relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Pastel gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(130deg, #fde4c2 0%, #fef4e8 30%, #e8f5f2 65%, #d4ecf7 100%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 12-col grid, max 1400px */}
      <div className="relative z-10 w-full max-w-350 mx-auto px-8 lg:px-12 xl:px-16 grid grid-cols-12 gap-y-8 lg:gap-8 items-center pt-24 pb-20 min-h-[75vh]">

        {/* ── LEFT: 7 cols (~55%) ── */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center gap-7 order-2 lg:order-1">

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.0] tracking-tight text-gray-900"
          >
            Hi, I&apos;m Doris —<br />
            a Frontend Engineer.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-sm lg:text-lg text-gray-500 leading-relaxed max-w-[460px]"
          >
            我重視產品體驗、網站可及性與操作流暢度，<br />
            並致力於將複雜需求轉化為直覺且好使用的數位體驗。
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ backgroundColor: ACCENT }}
            >
              View Projects <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          {/* Signal cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-2.5 max-w-[550px]"
          >
            {SIGNALS.map((label) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/80"
              >
                <span className="shrink-0 text-[10px]" style={{ color: ACCENT }}>✦</span>
                <span className="text-sm text-gray-600 leading-snug">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: 5 cols (~45%) ── */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-end gap-5 order-1 lg:order-2">

          {/* Blob photo carousel — 15% smaller than original 550px → 467px */}
          <motion.div
            className="blob-flower relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] xl:w-[480px] xl:h-[480px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={avatarImages[currentIndex]}
                  alt={`Doris — photo ${currentIndex + 1}`}
                  fill
                  className="object-cover object-top"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* ── Organic curve transition to About ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 right-0 pointer-events-none z-10"
      >
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-[140px]"
        >
          <path
            d="M0,55 C260,35 520,95 820,75 C1080,58 1240,85 1440,105 L1440,140 L0,140 Z"
            fill="#F8F7F3"
          />
        </svg>
      </div>

      {/* ── Scroll indicator ── */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0"
      >
        <div className="relative w-18 h-18">
          <motion.svg
            viewBox="0 0 72 72"
            className="absolute inset-0 w-full h-full text-gray-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path
                id="scrollCircle"
                d="M 36,36 m -24,0 a 24,24 0 1,1 48,0 a 24,24 0 1,1 -48,0"
              />
            </defs>
            <text fontSize="7.2" fill="currentColor" letterSpacing="2.4">
              <textPath href="#scrollCircle">
                SCROLL · SCROLL · SCROLL ·{" "}
              </textPath>
            </text>
          </motion.svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-500"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div> */}
    </section>
  );
}
