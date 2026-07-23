import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EditorialMarquee } from "@/components/Marquee";
import { Fleet } from "@/components/Fleet";
import { Manifesto } from "@/components/Manifesto";
import { Testimonials } from "@/components/Testimonials";
import { BookForm } from "@/components/BookForm";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <main className="grain relative min-h-screen bg-white text-neutral-900">
      {/* Persistent car atmosphere behind all sections */}
      <div className="site-backdrop" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <EditorialMarquee />
        <Fleet />
        <Manifesto />
        <Testimonials />
        <BookForm />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}

