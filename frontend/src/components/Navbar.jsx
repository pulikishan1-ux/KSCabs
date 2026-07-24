import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Fleet", href: "#fleet" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/75 border-b border-neutral-200"
          : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 group"
          data-testid="nav-logo"
        >
          <div className="relative">
            <div className="h-8 w-8 border border-[#FF6B00] rotate-45 group-hover:rotate-[135deg] transition-transform duration-700" />
            <div className="absolute inset-1 bg-[#00F0FF]/25" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black tracking-tighter text-neutral-900 text-lg">
              KS CABS
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#FF6B00]">
              HYDERABAD
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-300 group"
            >
              <span className="font-mono text-[10px] text-[#FF6B00]/80 mr-1.5">
                0{i + 1}
              </span>
              {l.label}
              <span className="absolute left-4 right-4 bottom-1 h-px bg-[#FF6B00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919652464506"
            data-testid="nav-phone-cta"
            className="hidden md:inline-flex items-center gap-2 border border-neutral-300 hover:border-[#FF6B00] px-4 py-2 text-xs font-mono tracking-widest text-neutral-700 hover:text-[#FF6B00] transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5" />
            +91 96524 64506
          </a>
          <a
            href="#book"
            data-testid="nav-book-cta"
            className="btn-sharp inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#FF6B00] transition-colors"
          >
            Book Now
          </a>
          <button
            className="md:hidden text-neutral-900 p-2"
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-neutral-200 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  className="flex items-baseline gap-3 py-3 text-2xl font-display font-semibold text-neutral-900 border-b border-neutral-100"
                >
                  <span className="font-mono text-[10px] text-[#FF6B00]">
                    0{i + 1}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
