"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const avatarImages = [
  "/image/avatar/avatar_01.JPG",
  "/image/avatar/avatar_02.JPG",
  "/image/avatar/avatar_03.JPG",
];

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
      <div className="relative z-10 w-full max-w-350 mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 items-center pt-24 pb-20 min-h-[75vh]">

        {/* ── LEFT: 5 cols ── */}
        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
          {/* <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-5"
          >
            Portfolio 2026
          </motion.p> */}

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="text-[clamp(3rem,6vw,6rem)] font-black leading-none tracking-tight text-gray-900"
          >
            Hello,
            <br />
            I&apos;m Doris
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-5 text-base lg:text-2xl font-light tracking-[0.2em] text-gray-500"
          >
            I&apos;m a Frontend Engineer
          </motion.p>
        </div>

        {/* ── RIGHT: 7 cols ── */}
        <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-end gap-5 order-1 lg:order-2">

          {/* Blob photo carousel */}
          <motion.div
            className="blob-flower relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[550px] lg:h-[550px] overflow-hidden shadow-2xl"
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

          {/* Carousel dots */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-2"
          >
            {avatarImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`View photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "w-6 bg-gray-600"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div> */}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
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
      </motion.div>
    </section>
  );
}
