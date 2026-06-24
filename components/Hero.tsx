"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(107,155,199,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Blue gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(43,80,120,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0A0A0A)",
        }}
        aria-hidden="true"
      />

      {/* Ghost watermark A */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: 0.04 }}
      >
        <Logo size={480} variant="watermark" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-24 pb-20">
        <FadeUp delay={0}>
          <p className="text-[#6B9BC7] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
            Built Solid. Built Smart.
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We architect your{" "}
            <span className="text-[#6B9BC7]">digital future.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.24}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#777777] leading-relaxed mb-10">
            Full-service IT firm based in Batangas City. Web development,
            networking, software engineering, security, and consulting.
          </p>
        </FadeUp>

        <FadeUp delay={0.36}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#6B9BC7] text-[#0A0A0A] font-semibold text-sm hover:bg-[#7AADD9] transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Get a Quote
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-[#2B5078] text-white font-semibold text-sm hover:border-[#6B9BC7] hover:bg-[#6B9BC7]/10 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Our Services
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>
        </FadeUp>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#6B9BC7]/60 to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
