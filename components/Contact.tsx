"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const services = [
  "Web Development",
  "Software Development",
  "Networking",
  "Cybersecurity",
  "IT Consulting",
  "Other",
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only — no backend needed
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative"
      aria-labelledby="contact-heading"
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
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 text-[#777777] max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#AAAAAA] mb-1.5">
                    Name <span className="text-[#6B9BC7]" aria-label="required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#3E6D9A] transition-colors duration-200"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#AAAAAA] mb-1.5">
                    Email <span className="text-[#6B9BC7]" aria-label="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#3E6D9A] transition-colors duration-200"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#AAAAAA] mb-1.5">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3E6D9A] transition-colors duration-200 appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-[#555]">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#AAAAAA] mb-1.5">
                  Message <span className="text-[#6B9BC7]" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#111] border border-[#222] rounded-lg px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none focus:border-[#3E6D9A] transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#6B9BC7] text-[#0A0A0A] text-sm font-semibold hover:bg-[#7AADD9] transition-all duration-200 hover:scale-[1.01] active:scale-100 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111] p-6 space-y-5">
              <a
                href="mailto:charles@archtech.ph"
                className="flex items-start gap-4 group"
                aria-label="Email us at charles@archtech.ph"
              >
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#1a1a1a] group-hover:border-[#2B5078] transition-colors flex-shrink-0">
                  <Mail size={18} className="text-[#6B9BC7]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#777777] mb-0.5">Email</p>
                  <p className="text-sm text-white group-hover:text-[#6B9BC7] transition-colors">
                    charles.a7cantara@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#1a1a1a] flex-shrink-0">
                  <Phone size={18} className="text-[#6B9BC7]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#777777] mb-0.5">Phone</p>
                  <p className="text-sm text-white">+63 939 354 7380</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#0A0A0A] border border-[#1a1a1a] flex-shrink-0">
                  <MapPin size={18} className="text-[#6B9BC7]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#777777] mb-0.5">Location</p>
                  <p className="text-sm text-white">Batangas City, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-[#777777] uppercase tracking-widest mb-4 font-semibold">
                Follow us
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Visit our ${label} page`}
                    className="p-3 rounded-lg bg-[#111] border border-[#1a1a1a] text-[#777777] hover:text-white hover:border-[#2B5078] transition-all duration-200 hover:scale-105"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <div className="rounded-xl border border-[#1a1a1a] bg-[#111] p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                <span className="text-sm font-medium text-white">Usually replies within 24 hours</span>
              </div>
              <p className="text-xs text-[#777777] leading-relaxed">
                We review every inquiry personally. No automated replies, no runaround — just a real conversation about your project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
