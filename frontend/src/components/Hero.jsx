import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const HERO_BG =
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80";

const line = {
  initial: { y: "110%" },
  animate: (i) => ({
    y: "0%",
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 * i + 0.2,
    },
  }),
};

export const Hero = () => {
  const { scrollY } = useScroll();
  // Subtle parallax on background
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const bgScale = useTransform(scrollY, [0, 800], [1.05, 1.2]);
  const contentY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-white"
      data-testid="hero-section"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <img
          src={HERO_BG}
          alt="Luxury car"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "grayscale(0.15) contrast(1.05) brightness(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/40 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-white/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,204,0.10),transparent_65%)]" />
      </motion.div>

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute top-24 md:top-28 inset-x-0 z-10"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 flex items-center justify-between text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-neutral-700">
          <span data-testid="hero-meta-location">17.3850° N / 78.4867° E</span>
          <span className="hidden md:inline" data-testid="hero-meta-fleet">
            06 CARS / 24-7 FLEET
          </span>
          <span data-testid="hero-meta-year">EST · MMXVIII</span>
        </div>
      </motion.div>

      {/* Main copy */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 pt-40 pb-24 md:pt-52 md:pb-32 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-[#00BFCC]" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00BFCC]">
            KS Cab Services / Hyderabad
          </span>
        </motion.div>

        <h1
          className="font-display font-black uppercase tracking-tighter text-neutral-900 leading-[0.88] text-[13vw] md:text-[9vw] lg:text-[8.2vw] text-legible"
          data-testid="hero-headline"
        >
          <span className="mask-line">
            <motion.span
              custom={0}
              variants={line}
              initial="initial"
              animate="animate"
              className="block"
            >
              Premium Rides,
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span
              custom={1}
              variants={line}
              initial="initial"
              animate="animate"
              className="block"
            >
              <span className="text-outline-accent">Right</span> at your
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span
              custom={2}
              variants={line}
              initial="initial"
              animate="animate"
              className="block"
            >
              Doorstep.
            </motion.span>
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="md:col-span-6 text-neutral-700 text-base md:text-lg font-light leading-relaxed max-w-lg"
            data-testid="hero-subtitle"
          >
            A boutique cab fleet operating across Hyderabad — from airport
            transfers to intercity runs. Transparent per-kilometre pricing,
            professional chauffeurs, zero hidden charges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.9 }}
            className="md:col-span-6 flex flex-col md:items-end gap-6"
          >
            <a
              href="#book"
              data-testid="hero-book-cta"
              className="btn-sharp group inline-flex items-center gap-4 bg-neutral-900 text-white pl-8 pr-3 py-3 text-sm font-bold tracking-[0.25em] uppercase hover:bg-[#00BFCC] transition-colors"
            >
              Book a Ride
              <span className="flex items-center justify-center w-10 h-10 bg-[#00F0FF] text-neutral-900 group-hover:bg-white group-hover:text-neutral-900 transition-colors">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
            <div className="flex items-center gap-6 text-xs font-mono tracking-widest uppercase text-neutral-600">
              <div>
                <div className="text-[10px] text-neutral-500">Starting at</div>
                <div className="text-lg text-neutral-900 font-display font-bold tracking-tight">
                  ₹14<span className="text-[#00BFCC]">/km</span>
                </div>
              </div>
              <div className="w-px h-8 bg-neutral-300" />
              <div>
                <div className="text-[10px] text-neutral-500">Available</div>
                <div className="text-lg text-neutral-900 font-display font-bold tracking-tight">
                  24 · 7
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-neutral-500 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
