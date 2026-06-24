"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

type Category = "All" | "Web" | "Software" | "Networking" | "Security";

const projects = [
  {
    title: "Majestic Balinese",
    category: "Web" as Category,
    description: "Resort website for a property in Calatagan, Batangas — built with Next.js and TypeScript.",
    tech: "Next.js · TypeScript",
    gradient: "from-[#1a3d2e] to-[#0d2018]",
    pattern: "circles",
    live: "https://majestic-balinese.vercel.app",
    repo: "https://github.com/selrvk/Majestic-Balinese",
  },
  {
    title: "LifeTap Dashboard",
    category: "Web" as Category,
    description: "Health & lifestyle tracking dashboard — a Next.js frontend for the LifeTap app ecosystem.",
    tech: "Next.js · TypeScript",
    gradient: "from-[#2B5078] to-[#1a2d40]",
    pattern: "grid",
    live: "https://lifetap-dashboard.vercel.app",
    repo: "https://github.com/selrvk/lifetap-dashboard",
  },
  {
    title: "FNV Inventory",
    category: "Software" as Category,
    description: "Inventory management system for tracking stock, assets, and supply levels in real time.",
    tech: "Next.js · TypeScript",
    gradient: "from-[#3a2a5a] to-[#1a1240]",
    pattern: "dots",
    live: "https://fnv-inventory.vercel.app",
    repo: "https://github.com/selrvk/FNV-Inventory",
  },
  {
    title: "Student Portal",
    category: "Web" as Category,
    description: "Academic portal with dashboard, course enrollment, grade tracking, and profile management.",
    tech: "HTML · CSS",
    gradient: "from-[#1e4060] to-[#0d2030]",
    pattern: "lines",
    live: null,
    repo: "https://github.com/selrvk/StudentPortal",
  },
  {
    title: "Gesture GUI",
    category: "Software" as Category,
    description: "Hand gesture recognition interface using Python and MediaPipe's pre-trained ML models.",
    tech: "Python · MediaPipe",
    gradient: "from-[#2a1a40] to-[#140d25]",
    pattern: "circles",
    live: null,
    repo: "https://github.com/selrvk/gesture-gui",
  },
  {
    title: "Weather App",
    category: "Web" as Category,
    description: "Real-time weather application with location-based forecasts, built with TypeScript.",
    tech: "TypeScript · API",
    gradient: "from-[#1a3550] to-[#0d1f30]",
    pattern: "grid",
    live: "https://weather-app-eight-roan-49.vercel.app",
    repo: "https://github.com/selrvk/Weather-App",
  },
];

const filters: Category[] = ["All", "Web", "Software"];

const categoryColors: Record<Category, string> = {
  All: "#6B9BC7",
  Web: "#6B9BC7",
  Software: "#9B7BC7",
  Networking: "#5B8BAF",
  Security: "#C77B7B",
};

function PatternBg({ pattern }: { pattern: string }) {
  if (pattern === "circles")
    return (
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 35%, rgba(107,155,199,0.35) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(107,155,199,0.2) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />
    );
  if (pattern === "grid")
    return (
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(107,155,199,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(107,155,199,0.25) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
    );
  if (pattern === "dots")
    return (
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(155,123,199,0.5) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />
    );
  return (
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(107,155,199,0.2) 0px, rgba(107,155,199,0.2) 1px, transparent 1px, transparent 14px)",
      }}
      aria-hidden="true"
    />
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 lg:py-32 relative" aria-labelledby="projects-heading">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#6B9BC7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Portfolio
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Our Work
          </h2>
          <p className="mt-4 text-[#777777] max-w-xl mx-auto text-base leading-relaxed">
            A selection of real projects — built, deployed, and shipped.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#2B5078] text-white"
                  : "bg-[#111] border border-[#1a1a1a] text-[#777777] hover:text-white hover:border-[#2B5078]"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group rounded-xl border border-[#1a1a1a] bg-[#111] overflow-hidden hover:border-[#2B5078] transition-all duration-250 hover:shadow-lg hover:shadow-[#2B5078]/10 hover:scale-[1.02]"
              >
                {/* Thumbnail */}
                <div
                  className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  aria-hidden="true"
                >
                  <PatternBg pattern={project.pattern} />
                  {/* Subtle logo watermark in thumbnail */}
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-10">
                    <span className="text-6xl font-black text-white tracking-tighter">A</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-white text-base group-hover:text-[#E8F2FC] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        color: categoryColors[project.category],
                        backgroundColor: `${categoryColors[project.category]}18`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-[#777777] leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#444] font-mono">{project.tech}</span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source on GitHub`}
                        className="p-1.5 rounded-md text-[#555] hover:text-[#6B9BC7] transition-colors"
                      >
                        <GitBranch size={14} aria-hidden="true" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title} live site`}
                          className="p-1.5 rounded-md text-[#555] hover:text-[#6B9BC7] transition-colors"
                        >
                          <ExternalLink size={14} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/selrvk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#777777] hover:text-[#6B9BC7] transition-colors duration-200"
          >
            <GitBranch size={15} aria-hidden="true" />
            View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
