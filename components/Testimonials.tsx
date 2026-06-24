"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ArchTech completely transformed our online presence. The site they built loads in under a second and our conversion rate jumped by 40%. Charles and team genuinely care about outcomes, not just deliverables.",
    name: "Maria Santos",
    role: "CEO, BatCity Retail Group",
    initials: "MS",
  },
  {
    quote:
      "We needed our entire office network redesigned with zero downtime. ArchTech executed flawlessly — professional, precise, and they explained everything clearly throughout. Wouldn't go to anyone else.",
    name: "Rico Villanueva",
    role: "IT Manager, PrimeCargo Logistics",
    initials: "RV",
  },
  {
    quote:
      "After the security audit ArchTech ran on our systems, we found three critical vulnerabilities we didn't know existed. They didn't just find the problems — they fixed them and trained our staff. Exceptional.",
    name: "Jasmine Cruz",
    role: "Director, Batangas Med Center",
    initials: "JC",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#6B9BC7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Client Feedback
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative rounded-xl border border-[#1a1a1a] bg-[#111] p-6 flex flex-col"
            >
              {/* Subtle top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #2B5078 50%, transparent)",
                }}
                aria-hidden="true"
              />

              <Quote
                size={20}
                className="text-[#2B5078] mb-4 flex-shrink-0"
                aria-hidden="true"
              />
              <p className="text-sm text-[#AAAAAA] leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="flex items-center gap-3 mt-auto">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2B5078, #6B9BC7)",
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-white">
                    {t.name}
                  </cite>
                  <p className="text-xs text-[#777777]">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
