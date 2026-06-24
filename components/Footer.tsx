import Logo from "./Logo";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#1a1a1a]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-4" aria-label="ArchTech home">
              <Logo size={30} />
              <span className="text-lg font-semibold tracking-tight">
                <span className="text-white">Arch</span>
                <span className="text-[#6B9BC7]">Tech</span>
              </span>
            </a>
            <p className="text-xs text-[#777777] leading-relaxed max-w-xs">
              Full-service IT firm based in Batangas City, Philippines. We
              architect digital solutions that are built to last.
            </p>
            <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-[#2B5078] uppercase">
              Built Solid. Built Smart.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation" className="sm:col-span-1">
            <p className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#777777] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + social */}
          <div className="sm:col-span-1">
            <p className="text-xs font-semibold text-[#AAAAAA] uppercase tracking-widest mb-4">
              Contact
            </p>
            <p className="text-sm text-[#777777] mb-1">
              <a
                href="mailto:charles@archtech.ph"
                className="hover:text-[#6B9BC7] transition-colors"
              >
                charles.a7cantara@gmail.com
              </a>
            </p>
            <p className="text-sm text-[#777777] mb-1">+63 939 354 7380</p>
            <p className="text-sm text-[#777777] mb-6">Batangas City, Philippines</p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Visit our ${label} page`}
                  className="p-2.5 rounded-lg bg-[#111] border border-[#1a1a1a] text-[#777777] hover:text-white hover:border-[#2B5078] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#555555]">
            © 2026 ArchTech. All rights reserved.
          </p>
          <p className="text-xs text-[#555555]">
            Batangas City, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
