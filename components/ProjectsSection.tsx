"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

const featuredProjects = projects.filter((p) => p.featured);

export default function ProjectsSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-end justify-between mb-14"
      >
        <div>
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl font-light tracking-tight">Projects</h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          View all
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex sm:hidden"
      >
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          View all projects →
        </Link>
      </motion.div>
    </section>
  );
}
