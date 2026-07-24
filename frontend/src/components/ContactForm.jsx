import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { openWhatsApp, buildContactMessage } from "@/lib/whatsapp";

export const ContactForm = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (!data.name.trim()) return toast.error("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(data.email))
      return toast.error("Please enter a valid email address.");
    if (!data.message.trim())
      return toast.error("Please enter a message.");
    toast.success("Redirecting to WhatsApp…");
    setTimeout(() => openWhatsApp(buildContactMessage(data)), 300);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden border-t border-neutral-100"
      data-testid="contact-section"
    >
      <div
        className="section-car-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/12920621/pexels-photo-12920621.jpeg')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#FF6B00]" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FF6B00]">
                06 / Contact
              </span>
            </div>
            <h2
              className="font-display font-black uppercase tracking-tighter text-neutral-900 text-5xl md:text-7xl leading-[0.9]"
              data-testid="contact-heading"
            >
              Let's get<br />you moving.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          {/* Meta rail */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <MetaBlock
              icon={<Phone className="w-4 h-4 text-[#FF6B00]" />}
              label="Dispatch"
              value="+91 96524 64506"
              href="tel:+919652464506"
              testId="contact-meta-phone"
            />
            <MetaBlock
              icon={<Mail className="w-4 h-4 text-[#FF6B00]" />}
              label="Enquiries"
              value="bookings@ks-cabs.com"
              href="mailto:bookings@ks-cabs.com"
              testId="contact-meta-email"
            />
            <MetaBlock
              icon={<MapPin className="w-4 h-4 text-[#FF6B00]" />}
              label="Based in"
              value="Hyderabad · Telangana"
              testId="contact-meta-location"
            />
            <div className="mt-4 border border-[#FF6B00]/40 p-6 bg-[#E1F6FA]">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#FF6B00] mb-3">
                Hours
              </div>
              <div className="font-display font-bold text-neutral-900 text-2xl leading-tight">
                24 · 7
              </div>
              <p className="text-neutral-600 text-sm mt-2 font-light">
                Dispatch never sleeps. Neither do our airport runs.
              </p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={submit}
            className="md:col-span-8 border border-[#C7EEF3] bg-white shadow-sm p-6 md:p-10 flex flex-col gap-8"
            data-testid="contact-form"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field
                label="Your Name"
                value={data.name}
                onChange={(v) => update("name", v)}
                placeholder="e.g. Aditya Menon"
                testId="contact-input-name"
              />
              <Field
                label="Email"
                value={data.email}
                onChange={(v) => update("email", v)}
                placeholder="you@company.com"
                type="email"
                testId="contact-input-email"
              />
            </div>
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
                Your Message
              </span>
              <textarea
                value={data.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Tell us what you need — corporate account, monthly rentals, wedding fleet, anything."
                rows={6}
                data-testid="contact-input-message"
                className="input-field bg-transparent border border-neutral-300 focus:border-[#FF6B00] p-4 text-neutral-900 text-base placeholder:text-neutral-400 resize-none transition-colors duration-300"
              />
            </label>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
              <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase max-w-md leading-relaxed">
                On submit, this message opens WhatsApp pre-filled for you.
                No accounts, no waiting.
              </p>
              <button
                type="submit"
                data-testid="contact-submit-btn"
                className="btn-sharp inline-flex items-center gap-4 bg-neutral-900 text-white pl-6 pr-3 py-3 text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#FF6B00] transition-colors duration-300 self-start md:self-auto"
              >
                Send via WhatsApp
                <span className="flex items-center justify-center w-9 h-9 bg-[#00F0FF] text-neutral-900">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const MetaBlock = ({ icon, label, value, href, testId }) => {
  const inner = (
    <>
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
          {label}
        </span>
      </div>
      <div className="font-display font-semibold text-neutral-900 text-lg md:text-xl mt-2">
        {value}
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      data-testid={testId}
      className="group block border border-neutral-200 hover:border-[#FF6B00]/60 p-6 bg-white transition-colors duration-500"
    >
      {inner}
    </a>
  ) : (
    <div
      data-testid={testId}
      className="border border-neutral-200 p-6 bg-white"
    >
      {inner}
    </div>
  );
};

const Field = ({ label, value, onChange, placeholder, type = "text", testId }) => (
  <label className="flex flex-col gap-2">
    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
      {label}
    </span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      data-testid={testId}
      className="input-field bg-transparent border-b border-neutral-300 focus:border-[#FF6B00] py-3 text-neutral-900 text-base md:text-lg placeholder:text-neutral-400 transition-colors duration-300"
    />
  </label>
);
