"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group relative bg-card border border-border rounded-lg p-7 flex flex-col gap-5 h-full hover:border-foreground/20 hover:shadow-sm transition-shadow duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">
              {project.year}
            </p>
            <h3 className="text-lg font-medium leading-snug text-foreground">
              {project.title}
            </h3>
          </div>
          {project.href && (
            <Link
              href={project.href}
              className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
              aria-label={`View ${project.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={14} />
            </Link>
          )}
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal rounded-full"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}
