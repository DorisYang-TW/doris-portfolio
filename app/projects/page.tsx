"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="mb-16"
      >
        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
          Work
        </p>
        <h1 className="text-[clamp(2rem,6vw,4rem)] font-light leading-tight tracking-tight">
          Selected
          <br />
          <span className="italic">projects.</span>
        </h1>
      </motion.div>

      {/* Tag filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
              activeTag === tag
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-16">
          No projects found for this tag.
        </p>
      )}
    </div>
  );
}
