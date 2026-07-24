import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  "HYDERABAD",
  "PREMIUM FLEET",
  "TRANSPARENT PRICING",
  "NO HIDDEN CHARGES",
  "24 · 7 DISPATCH",
  "AIRPORT TRANSFERS",
  "INTERCITY RUNS",
];

export const EditorialMarquee = () => {
  return (
    <div
      className="relative border-y border-[#C7EEF3] bg-[#E1F6FA]/80 backdrop-blur-md overflow-hidden py-8 md:py-10"
      data-testid="editorial-marquee"
    >
      <Marquee speed={40} gradient={false} pauseOnHover={false}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10 md:gap-16 px-6 md:px-10">
            <span
              className={
                i % 2 === 0
                  ? "font-display font-black uppercase tracking-tighter text-neutral-900 text-5xl md:text-7xl lg:text-8xl"
                  : "font-display font-black uppercase tracking-tighter text-outline text-5xl md:text-7xl lg:text-8xl"
              }
            >
              {item}
            </span>
            <span className="w-2 h-2 bg-[#FF6B00] rotate-45" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
