import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      className="relative bg-[#EDF9FB] backdrop-blur-[2px] border-t border-[#C7EEF3] pt-16 md:pt-20 pb-8"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Large wordmark */}
        <div className="mb-14 md:mb-20">
          <div className="font-display font-black uppercase tracking-tighter text-neutral-900 text-[22vw] md:text-[16vw] leading-[0.85]">
            KS <span className="text-outline-accent">CABS</span>
          </div>
          <div className="hairline mt-8" />
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF6B00] mb-4">
              About
            </div>
            <p className="text-neutral-700 font-light leading-relaxed max-w-md">
              A boutique cab fleet operating across Hyderabad. Owned. Vetted.
              Priced transparently. No surge, no aggregation, no surprises.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF6B00] mb-4">
              Explore
            </div>
            <ul className="flex flex-col gap-2 text-neutral-700">
              <li>
                <a href="#fleet" className="hover:text-neutral-900 transition-colors">
                  The Fleet
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-neutral-900 transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-neutral-900 transition-colors">
                  Book a Ride
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF6B00] mb-4">
              Dispatch
            </div>
            <div className="font-display font-bold text-neutral-900 text-2xl">
              +91 96524 64506
            </div>
            <div className="text-neutral-500 mt-1 font-mono text-xs tracking-widest uppercase">
              Available 24 · 7
            </div>
            <div className="flex items-center gap-3 mt-6">
              <SocialLink href="#" label="Instagram" testId="footer-social-ig">
                <Instagram className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="#" label="Twitter" testId="footer-social-tw">
                <Twitter className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="#" label="Facebook" testId="footer-social-fb">
                <Facebook className="w-4 h-4" />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="hairline mt-14 mb-6" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-[10px] tracking-widest uppercase text-neutral-500">
          <span>© {new Date().getFullYear()} KS Cab Services · Hyderabad</span>
          <span>Crafted with precision · Built to move</span>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, label, children, testId }) => (
  <a
    href={href}
    aria-label={label}
    data-testid={testId}
    className="w-9 h-9 border border-neutral-300 hover:border-[#FF6B00] hover:text-[#FF6B00] text-neutral-700 flex items-center justify-center transition-colors duration-300"
  >
    {children}
  </a>
);
