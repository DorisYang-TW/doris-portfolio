"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills, experiences } from "@/lib/data";

function FadeUp({
  children,
  delay = 0,
  className,
  inView = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      {...(inView
        ? {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
          }
        : { animate: { opacity: 1, y: 0 } })}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-20">
        <FadeUp delay={0}>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
            About Me
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2rem,6vw,4rem)] font-light leading-tight tracking-tight">
            A little about
            <br />
            <span className="italic">who I am.</span>
          </h1>
        </FadeUp>
      </div>

      {/* Bio + Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <FadeUp delay={0.15}>
          <div className="space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground">
              Hi, I&apos;m Doris — a frontend engineer with a background in
              design and a deep appreciation for the space between pixels. I
              care about the small things: the timing of a transition, the
              weight of a typeface, the feel of a hover state.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              I&apos;ve spent the past several years building web products
              across industries — from SaaS dashboards to e-commerce platforms
              — always with the same goal: make something that works
              beautifully.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              When I&apos;m not writing TypeScript, I&apos;m usually reading
              about typography, hunting for good coffee, or sketching layouts
              in a notebook that&apos;s already too full.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm font-normal rounded-full px-4 py-1.5"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Experience */}
      <FadeUp inView delay={0}>
        <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-10">
          Experience
        </h2>
      </FadeUp>

      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 py-8 border-t border-border last:border-b"
          >
            <div>
              <p className="text-xs text-muted-foreground tracking-wide mb-1">
                {exp.period}
              </p>
              <p className="text-sm font-medium">{exp.company}</p>
            </div>
            <div>
              <p className="font-medium mb-2">{exp.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
