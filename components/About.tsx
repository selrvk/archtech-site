"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import Logo from "./Logo";

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99.9, suffix: "%", label: "Uptime Delivered", decimal: true },
];

const strengths = [
  "Deep technical expertise across the full stack",
  "Genuine care for every client's success",
  "Small firm agility — fast, flexible, focused",
  "Big firm capability when it matters most",
];

function StatCounter({
  value,
  suffix,
  label,
  decimal,
  animate,
}: {
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  animate: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [animate, value]);

  const display = decimal
    ? count.toFixed(count >= value ? 1 : 0)
    : Math.floor(count).toString();

  return (
    <div className="text-center sm:text-left">
      <div className="text-3xl lg:text-4xl font-bold text-white">
        {display}
        <span className="text-[#6B9BC7]">{suffix}</span>
      </div>
      <div className="text-sm text-[#777777] mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative" aria-labelledby="about-heading">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[#6B9BC7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              About Us
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              Why <span className="text-[#6B9BC7]">ArchTech?</span>
            </h2>
            <p className="text-[#777777] leading-relaxed mb-4">
              Founded by Charles — a developer and tech enthusiast from
              Batangas City — ArchTech was built on a simple belief: every
              project deserves the same level of care and precision as a
              mission-critical enterprise system.
            </p>
            <p className="text-[#777777] leading-relaxed mb-8">
              We&apos;re a passion-driven firm that combines deep technical
              expertise with genuine investment in your success. Whether
              you&apos;re a small business or a growing enterprise, we bring
              the agility of a boutique studio and the capability of a larger
              firm — without the overhead.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#2B5078]/30 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Check size={12} className="text-[#6B9BC7]" />
                  </span>
                  <span className="text-sm text-[#AAAAAA]">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-[#1a1a1a]"
            >
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} animate={statsInView} />
              ))}
            </div>
          </motion.div>

          {/* Right: decorative code aesthetic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            {/* Big logo mark */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(43,80,120,0.2) 0%, transparent 70%)",
                }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Logo size={200} />
              </motion.div>
            </div>

            {/* Code snippet card */}
            <div className="mt-8 rounded-xl border border-[#1a1a1a] bg-[#111] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0D0D0D]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 text-xs text-[#555555] font-mono">archtech.config.ts</span>
              </div>
              <pre className="p-4 text-xs font-mono leading-loose overflow-x-auto">
                <code>
                  <span className="text-[#777777]">// ArchTech — Built Solid. Built Smart.</span>{"\n"}
                  <span className="text-[#6B9BC7]">export const</span>{" "}
                  <span className="text-white">config</span>{" "}
                  <span className="text-[#6B9BC7]">=</span>{" "}<span className="text-[#777777]">{"{"}</span>{"\n"}
                  {"  "}<span className="text-[#AAAAAA]">location</span>
                  <span className="text-[#777777]">:</span>{" "}
                  <span className="text-[#3E6D9A]">&quot;Batangas City&quot;</span>
                  <span className="text-[#777777]">,</span>{"\n"}
                  {"  "}<span className="text-[#AAAAAA]">founder</span>
                  <span className="text-[#777777]">:</span>{" "}
                  <span className="text-[#3E6D9A]">&quot;Charles&quot;</span>
                  <span className="text-[#777777]">,</span>{"\n"}
                  {"  "}<span className="text-[#AAAAAA]">passion</span>
                  <span className="text-[#777777]">:</span>{" "}
                  <span className="text-[#6B9BC7]">true</span>
                  <span className="text-[#777777]">,</span>{"\n"}
                  {"  "}<span className="text-[#AAAAAA]">uptime</span>
                  <span className="text-[#777777]">:</span>{" "}
                  <span className="text-[#6B9BC7]">99.9</span>
                  <span className="text-[#777777]">,</span>{"\n"}
                  <span className="text-[#777777]">{"}"}</span>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
