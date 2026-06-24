"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Code, Network, Shield, Briefcase } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "From landing pages to full-scale web applications. Modern frameworks, responsive design, blazing fast performance.",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business. Desktop apps, mobile apps, APIs, and automation tools.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Network design, setup, and management. Wired and wireless infrastructure, server configuration, and monitoring.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business from threats. Vulnerability assessments, penetration testing, security audits, and incident response.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Strategic technology guidance for businesses of all sizes. System architecture, digital transformation, and tech stack advisory.",
  },
];


export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative" aria-labelledby="services-heading">
      {/* Subtle top border */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#6B9BC7] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Our Services
          </h2>
          <p className="mt-4 text-[#777777] max-w-xl mx-auto text-base leading-relaxed">
            End-to-end technology solutions built for businesses that take their
            digital presence seriously.
          </p>
        </motion.div>

        {/* Cards grid — centered for 5 cards: 1-2-2 on tablet, 3+2 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={`group relative rounded-xl border border-[#1a1a1a] bg-[#111] p-6
                  hover:border-[#2B5078] hover:bg-[#161616]
                  transition-all duration-250 cursor-default
                  ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
                `}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(43,80,120,0.15) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="relative mb-4 inline-flex p-3 rounded-lg bg-[#0A0A0A] border border-[#1a1a1a] group-hover:border-[#2B5078] transition-colors duration-250">
                  <Icon
                    size={22}
                    className="text-[#6B9BC7] group-hover:text-[#7AADD9] transition-colors duration-250"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-semibold text-white text-base mb-2 group-hover:text-[#E8F2FC] transition-colors duration-250">
                  {service.title}
                </h3>
                <p className="text-[#777777] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
