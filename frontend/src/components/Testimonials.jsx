import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Priya Rao",
    role: "Marketing Head · Hyderabad",
    rating: 5,
    quote:
      "Booked the Innova Crysta for a Vizag-to-Hyderabad run. Immaculate cab, professional driver, and the final bill matched their quote to the rupee. This is how service should feel.",
  },
  {
    name: "Aditya Menon",
    role: "Software Engineer · HITEC City",
    rating: 5,
    quote:
      "I've been using KS for airport transfers for two years. They're always on time, the car is always spotless, and the driver knows every shortcut. I don't book anywhere else anymore.",
  },
  {
    name: "Fatima Sheikh",
    role: "Wedding Planner · Banjara Hills",
    rating: 5,
    quote:
      "Ran an entire weekend of ferrying wedding guests across the city. Six cars, zero delays, transparent billing. Genuinely the best fleet operator I've worked with.",
  },
];

const StarRow = ({ rating, testId }) => (
  <div className="flex items-center gap-0.5" data-testid={testId}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < rating
            ? "fill-[#00BFCC] text-[#00BFCC]"
            : "fill-transparent text-neutral-300"
        }`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="testimonials-section"
    >
      <div
        className="section-car-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/37933345/pexels-photo-37933345.jpeg')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#00BFCC]" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00BFCC]">
                04 / Testimonials
              </span>
            </div>
            <h2
              className="font-display font-black uppercase tracking-tighter text-neutral-900 text-5xl md:text-7xl leading-[0.9]"
              data-testid="testimonials-heading"
            >
              Words from<br />the back-seat.
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <div className="inline-flex items-baseline gap-3">
              <span className="font-display font-black tracking-tighter text-neutral-900 text-6xl md:text-7xl">
                4.9
              </span>
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                / 5.0
              </span>
            </div>
            <div className="flex md:justify-end items-center gap-2 mt-2">
              <StarRow rating={5} testId="testimonials-agg-stars" />
              <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                · 400+ reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative border transition-colors duration-500 p-7 md:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md ${
                i === 1
                  ? "bg-[#F0FBFD] border-[#00BFCC]/40 hover:border-[#00BFCC]"
                  : "bg-white border-[#C7EEF3] hover:border-[#00BFCC]/60"
              }`}
              data-testid={`testimonial-card-${i}`}
            >
              <div className="flex items-center justify-between">
                <StarRow rating={r.rating} testId={`testimonial-stars-${i}`} />
                <Quote className="w-6 h-6 text-[#00BFCC]/40 group-hover:text-[#00BFCC] transition-colors duration-500" />
              </div>
              <p className="text-neutral-800 text-base md:text-lg font-light leading-relaxed">
                "{r.quote}"
              </p>
              <div className="mt-auto pt-6 border-t border-[#C7EEF3]/70">
                <div className="font-display font-semibold text-neutral-900 text-base">
                  {r.name}
                </div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#00BFCC] mt-1">
                  {r.role}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
