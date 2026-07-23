import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const FLEET = [
  {
    name: "Innova Crysta",
    tag: "The Flagship",
    seats: "7 seats",
    price: 22,
    desc: "Top-tier SUV for family trips, intercity runs and premium airport transfers.",
    image:
      "https://images.pexels.com/photos/37933345/pexels-photo-37933345.jpeg",
    accent: true,
  },
  {
    name: "Toyota Innova",
    tag: "The Workhorse",
    seats: "7 seats",
    price: 20,
    desc: "The reliable long-distance companion. Spacious cabin, unshakeable ride.",
    image:
      "https://images.pexels.com/photos/15549900/pexels-photo-15549900.jpeg",
  },
  {
    name: "Maruti Ertiga",
    tag: "The Group Pick",
    seats: "6 seats",
    price: 18,
    desc: "Perfect middle-ground SUV — nimble in city traffic, comfortable on highways.",
    image:
      "https://images.pexels.com/photos/12920621/pexels-photo-12920621.jpeg",
  },
  {
    name: "Maruti Ciaz",
    tag: "The Executive",
    seats: "4 seats",
    price: 16,
    desc: "Sedan comfort with a business-class demeanour. Ideal for corporate rides.",
    image:
      "https://images.pexels.com/photos/31138744/pexels-photo-31138744.jpeg",
  },
  {
    name: "Toyota Etios",
    tag: "The Classic",
    seats: "4 seats",
    price: 15,
    desc: "Legendary reliability and cabin space at a value-forward rate.",
    image:
      "https://images.pexels.com/photos/9028761/pexels-photo-9028761.jpeg",
  },
  {
    name: "Swift Dzire",
    tag: "The Everyday",
    seats: "4 seats",
    price: 14,
    desc: "The city sedan. Snappy, efficient, and always ready when you are.",
    image:
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

const FleetCard = ({ car, index }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <motion.a
      href="#book"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      onMouseMove={handleMouseMove}
      data-testid={`fleet-card-${car.name.toLowerCase().replace(/\s+/g, "-")}`}
      className={`spotlight group relative flex flex-col bg-white border ${
        car.accent ? "border-[#00BFCC]/60 bg-gradient-to-b from-[#F0FBFD] to-white" : "border-[#C7EEF3]"
      } hover:border-[#00BFCC] transition-colors duration-500 overflow-hidden shadow-sm hover:shadow-md`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <img
          src={car.image}
          alt={car.name}
          className="clip-hover absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          style={{ filter: "contrast(1.05) brightness(0.98)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-900 bg-white/85 backdrop-blur-md px-2.5 py-1 border border-[#00BFCC]/40">
            0{index + 1}
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-700 bg-white/85 backdrop-blur-md px-2.5 py-1 border border-neutral-200">
            {car.seats}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 border border-neutral-200 bg-white/85 backdrop-blur-md group-hover:bg-[#00F0FF] group-hover:border-[#00BFCC] transition-colors duration-500">
          <ArrowUpRight className="w-4 h-4 text-neutral-900 group-hover:text-neutral-900 transition-colors duration-500" />
        </div>
      </div>

      <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00BFCC] mb-1.5">
              {car.tag}
            </div>
            <h3 className="font-display font-bold tracking-tight text-neutral-900 text-2xl md:text-[26px] leading-tight">
              {car.name}
            </h3>
          </div>
          <div className="text-right">
            <div className="font-display font-black tracking-tight text-neutral-900 text-3xl md:text-4xl leading-none">
              ₹{car.price}
            </div>
            <div className="font-mono text-[10px] tracking-widest text-neutral-500 mt-1">
              PER KM
            </div>
          </div>
        </div>
        <p className="text-sm text-neutral-600 leading-relaxed font-light">
          {car.desc}
        </p>
        <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
            Book via WhatsApp
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[#00BFCC]">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export const Fleet = () => {
  return (
    <section
      id="fleet"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="fleet-section"
    >
      <div
        className="section-car-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/15549900/pexels-photo-15549900.jpeg')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#00BFCC]" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00BFCC]">
                02 / The Fleet
              </span>
            </div>
            <h2
              className="font-display font-black uppercase tracking-tighter text-neutral-900 text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
              data-testid="fleet-heading"
            >
              Six cabs.<br />
              <span className="text-outline-accent">One flat</span> rate.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-neutral-600 font-light text-base leading-relaxed">
              A curated fleet — sedans, MPVs and full-size SUVs. Rates listed
              are per kilometre for local city rides. Airport pickup and drop
              are priced separately, confirmed by our dispatch at booking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FLEET.map((car, i) => (
            <FleetCard key={car.name} car={car} index={i} />
          ))}
        </div>

        <div className="mt-14 md:mt-16 grid md:grid-cols-2 gap-4">
          <div className="border border-[#C7EEF3] bg-[#F0FBFD] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00BFCC] shrink-0">
              Local City Rides
            </span>
            <span className="text-neutral-700 text-sm font-light leading-relaxed">
              Per-km rates shown above apply to <span className="text-neutral-900 font-medium">local Hyderabad rides only</span>. Driver allowance, toll & parking are billed at actuals. No other hidden charges.
            </span>
          </div>
          <div className="border border-[#00BFCC]/50 bg-[#E1F6FA] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00BFCC] shrink-0">
              Airport Transfers
            </span>
            <span className="text-neutral-700 text-sm font-light leading-relaxed">
              Airport <span className="text-neutral-900 font-medium">pickup / drop is priced separately</span> — flat packages depending on cab & pickup zone. Confirmed by our dispatch at booking.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
