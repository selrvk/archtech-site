"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Terminal, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We listen, analyze, and understand your needs — your goals, constraints, and what success actually looks like.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description: "We architect the solution — structure, stack, and strategy. Every decision justified, nothing arbitrary.",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Develop",
    description: "We build with precision, testing at every stage. Clean code, documented, deployable.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Deliver",
    description: "We launch, monitor, and support. We don't disappear after deployment — we stay invested in your success.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="py-24 lg:py-32 relative bg-[#0D0D0D]"
      aria-labelledby="process-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6B9BC7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            How We Work
          </h2>
          <p className="mt-4 text-[#777777] max-w-xl mx-auto text-base leading-relaxed">
            A deliberate process that turns requirements into reliable software.
          </p>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: "linear-gradient(90deg, transparent, #2B5078 20%, #6B9BC7 50%, #2B5078 80%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step node */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl border border-[#2B5078] bg-[#111] flex items-center justify-center group-hover:border-[#6B9BC7] transition-colors">
                      <Icon size={26} className="text-[#6B9BC7]" aria-hidden="true" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 text-xs font-bold text-[#6B9BC7] bg-[#0D0D0D] px-1.5 rounded"
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-semibold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-[#777777] leading-relaxed px-2">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div
            className="absolute left-[39px] top-4 bottom-4 w-px"
            style={{
              background: "linear-gradient(to bottom, #2B5078, #6B9BC7, #2B5078)",
            }}
            aria-hidden="true"
          />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-6"
                >
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[78px] h-[78px] rounded-xl border border-[#2B5078] bg-[#111] flex items-center justify-center">
                      <Icon size={22} className="text-[#6B9BC7]" aria-hidden="true" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 text-xs font-bold text-[#6B9BC7] bg-[#0D0D0D] px-1 rounded">
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="pt-3">
                    <h3 className="font-semibold text-white text-base mb-1">{step.title}</h3>
                    <p className="text-sm text-[#777777] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
