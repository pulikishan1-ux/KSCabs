import React from "react";
import { motion } from "framer-motion";

const CHAPTERS = [
  {
    number: "01",
    title: "The Promise",
    body: "We are not an aggregator. Every driver, every cab and every route is owned and vetted by our team. What you see is what you pay — down to the last rupee.",
  },
  {
    number: "02",
    title: "The Fleet",
    body: "Six vehicles across sedans, MPVs and full-size SUVs. Cleaned before every trip. GPS-tracked. Insured. Ready to move whenever you are.",
  },
  {
    number: "03",
    title: "The Drivers",
    body: "Uniformed, background-verified, and trained on Hyderabad routes — from HITEC City late nights to 4 AM airport runs. Discretion is non-negotiable.",
  },
  {
    number: "04",
    title: "The Charge",
    body: "Per-kilometre pricing, transparent as glass. Driver allowance, tolls and parking billed at actuals. No surge. No hidden line-items. Ever.",
  },
];

export const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="relative py-24 md:py-40 overflow-hidden"
      data-testid="manifesto-section"
    >
      <div
        className="section-car-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/9028761/pexels-photo-9028761.jpeg')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section header */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-20 md:mb-32">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#FF6B00]" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FF6B00]">
                03 / Manifesto
              </span>
            </div>
            <h2
              className="font-display font-black uppercase tracking-tighter text-neutral-900 text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
              data-testid="manifesto-heading"
            >
              A different<br />
              <span className="italic font-light text-neutral-500">
                kind of cab company.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-12">
            <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed">
              KS Cab Services began in 2018 with a single Innova and one
              conviction — that everyday travel could feel considered.
              Six years and thousands of trips later, that conviction has
              only sharpened.
            </p>
          </div>
        </div>

        {/* Chapters — asymmetric */}
        <div className="relative">
          {/* Vertical hairline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-200 to-transparent" />

          <div className="flex flex-col gap-16 md:gap-24">
            {CHAPTERS.map((c, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={c.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                    isRight ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                  data-testid={`manifesto-chapter-${c.number}`}
                >
                  <div
                    className={`flex flex-col ${
                      isRight ? "md:pl-16 md:items-start" : "md:pr-16"
                    }`}
                  >
                    <div className="chapter-num text-[26vw] md:text-[15vw] leading-[0.85] mb-4">
                      {c.number}
                    </div>
                  </div>
                  <div className={`${isRight ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF6B00] mb-4">
                      Chapter · {c.number}
                    </div>
                    <h3 className="font-display font-bold tracking-tight text-neutral-900 text-3xl md:text-4xl mb-5">
                      {c.title}
                    </h3>
                    <p className="text-neutral-600 font-light text-base md:text-lg leading-relaxed max-w-md">
                      {c.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
