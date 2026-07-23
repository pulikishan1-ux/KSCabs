import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { FLEET } from "./Fleet";
import { openWhatsApp, buildBookingMessage } from "@/lib/whatsapp";

const STEPS = [
  { key: "who", label: "Passenger", num: "01" },
  { key: "route", label: "Route", num: "02" },
  { key: "cab", label: "Cab", num: "03" },
  { key: "review", label: "Confirm", num: "04" },
];

const initialData = {
  fullName: "",
  phone: "",
  cab: "",
  pickup: "",
  drop: "",
  datetime: "",
  notes: "",
};

const stepVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
};

export const BookForm = () => {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState(initialData);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const isAirport = /airport|rgia|shamshabad|shamshabaad/i.test(
    `${data.pickup} ${data.drop}`,
  );

  const validateStep = () => {
    if (step === 0) {
      if (!data.fullName.trim()) return "Please enter your full name.";
      if (!data.phone.trim() || data.phone.replace(/\D/g, "").length < 8)
        return "Please enter a valid phone number.";
    }
    if (step === 1) {
      if (!data.pickup.trim()) return "Please enter a pickup location.";
      if (!data.drop.trim()) return "Please enter a drop location.";
      if (!data.datetime.trim()) return "Please pick a date & time.";
    }
    if (step === 2) {
      if (!data.cab) return "Please pick a cab.";
    }
    return null;
  };

  const next = () => {
    const err = validateStep();
    if (err) {
      toast.error(err);
      return;
    }
    setDir(1);
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };

  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(0, s - 1));
  };

  const submit = () => {
    const err = validateStep();
    if (err) {
      toast.error(err);
      return;
    }
    const msg = buildBookingMessage(data);
    toast.success("Redirecting to WhatsApp…");
    setTimeout(() => openWhatsApp(msg), 300);
  };

  return (
    <section
      id="book"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="book-section"
    >
      <div
        className="section-car-bg"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/31138744/pexels-photo-31138744.jpeg')",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12 md:mb-16">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#00BFCC]" />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#00BFCC]">
                05 / Book a Ride
              </span>
            </div>
            <h2
              className="font-display font-black uppercase tracking-tighter text-neutral-900 text-5xl md:text-7xl leading-[0.9]"
              data-testid="book-heading"
            >
              Four steps.<br />
              <span className="text-outline-accent">One</span> confirmation.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-neutral-600 font-light leading-relaxed">
              Fill it out, review, and hit confirm. Your booking is sent
              instantly via WhatsApp to our dispatch team — we'll call to lock
              it in.
            </p>
          </div>
        </div>

        <div className="border border-[#C7EEF3] bg-white shadow-sm">
          {/* Stepper */}
          <div className="grid grid-cols-4 border-b border-[#C7EEF3]">
            {STEPS.map((s, i) => (
              <button
                key={s.key}
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                data-testid={`book-step-${i}`}
                className={`px-4 md:px-6 py-4 md:py-5 text-left flex flex-col gap-1 transition-colors duration-300 border-r border-[#C7EEF3] last:border-r-0 ${
                  i === step
                    ? "bg-neutral-900 text-white"
                    : i < step
                    ? "bg-[#F0FBFD] text-neutral-700 hover:text-neutral-900 cursor-pointer"
                    : "bg-white text-neutral-400 cursor-not-allowed"
                }`}
              >
                <span
                  className={`font-mono text-[10px] tracking-[0.25em] uppercase ${
                    i === step ? "text-[#00F0FF]" : ""
                  }`}
                >
                  Step · {s.num}
                </span>
                <span className="font-display font-bold text-sm md:text-base">
                  {s.label}
                </span>
              </button>
            ))}
          </div>

          <div className="p-6 md:p-10 min-h-[420px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {step === 0 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Full Name"
                      value={data.fullName}
                      onChange={(v) => update("fullName", v)}
                      placeholder="e.g. Priya Rao"
                      testId="book-input-fullname"
                    />
                    <Field
                      label="Phone Number"
                      value={data.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+91 98xxx xxxxx"
                      type="tel"
                      testId="book-input-phone"
                    />
                    <Field
                      label="Notes (optional)"
                      value={data.notes}
                      onChange={(v) => update("notes", v)}
                      placeholder="Any preferences? Airport terminal? Luggage?"
                      testId="book-input-notes"
                      wide
                    />
                  </div>
                )}

                {step === 1 && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Pickup"
                      value={data.pickup}
                      onChange={(v) => update("pickup", v)}
                      placeholder="e.g. HITEC City Metro Station"
                      testId="book-input-pickup"
                    />
                    <Field
                      label="Drop"
                      value={data.drop}
                      onChange={(v) => update("drop", v)}
                      placeholder="e.g. RGIA Airport, Terminal 1"
                      testId="book-input-drop"
                    />
                    <Field
                      label="Date & Time"
                      value={data.datetime}
                      onChange={(v) => update("datetime", v)}
                      type="datetime-local"
                      testId="book-input-datetime"
                      wide
                    />
                    <div
                      className="md:col-span-2 border border-[#00BFCC]/40 bg-[#00F0FF]/[0.06] p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3"
                      data-testid="book-airport-note"
                    >
                      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00BFCC] shrink-0">
                        Pricing Note
                      </span>
                      <span className="text-neutral-700 text-sm font-light leading-relaxed">
                        Per-km rates apply to <span className="text-neutral-900 font-medium">local city rides</span>. For{" "}
                        <span className="text-neutral-900 font-medium">airport pickup or drop</span>, our dispatch will share the flat package price after you submit.
                      </span>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00BFCC]">
                        Select a cab
                      </div>
                      <div
                        className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-700 border border-[#00BFCC]/40 bg-[#00F0FF]/[0.08] px-3 py-1.5"
                        data-testid="book-cab-pricing-badge"
                      >
                        {isAirport
                          ? "Airport transfer · flat package by dispatch"
                          : "Final fare confirmed by dispatch"}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {FLEET.map((c) => {
                        const cabValue = c.name;
                        const selected = data.cab === cabValue;
                        return (
                          <button
                            key={c.name}
                            type="button"
                            onClick={() => update("cab", cabValue)}
                            data-testid={`book-cab-${c.name
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className={`text-left border p-4 flex items-center justify-between gap-3 transition-colors duration-300 ${
                              selected
                                ? "border-[#00BFCC] bg-[#00F0FF]/[0.08]"
                                : "border-neutral-200 hover:border-neutral-400"
                            }`}
                          >
                            <div>
                              <div className="font-display font-bold text-neutral-900 text-base">
                                {c.name}
                              </div>
                              <div className="font-mono text-[10px] tracking-widest text-neutral-500 mt-1 uppercase">
                                {c.tag} · {c.seats}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-mono text-[10px] tracking-widest text-[#00BFCC] uppercase leading-tight">
                                {isAirport ? (
                                  <>Flat<br />Package</>
                                ) : (
                                  <>Local<br />Ride</>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00BFCC] mb-4">
                        Review your booking
                      </div>
                      <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
                        <Row label="Name" value={data.fullName} />
                        <Row label="Phone" value={data.phone} />
                        <Row label="Cab" value={data.cab} />
                        <Row label="Pickup" value={data.pickup} />
                        <Row label="Drop" value={data.drop} />
                        <Row label="Date & Time" value={data.datetime} />
                        {data.notes && <Row label="Notes" value={data.notes} />}
                      </dl>
                    </div>
                    <div className="border border-[#00BFCC]/40 bg-[#00F0FF]/[0.08] p-6 md:p-8 flex flex-col gap-4">
                      <MessageSquare className="w-6 h-6 text-[#00BFCC]" />
                      <div className="font-display font-bold text-neutral-900 text-xl leading-tight">
                        On confirm, we open WhatsApp with your booking pre-typed.
                      </div>
                      <p className="text-neutral-700 text-sm font-light leading-relaxed">
                        Just hit <span className="text-[#00BFCC] font-medium">Send</span> in
                        WhatsApp and our dispatch team will call you within a
                        few minutes to lock in your ride.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav */}
          <div className="grid grid-cols-2 border-t border-[#C7EEF3]">
            <button
              onClick={back}
              disabled={step === 0}
              data-testid="book-back-btn"
              className="px-6 py-5 flex items-center gap-3 text-neutral-600 hover:text-neutral-900 disabled:text-neutral-300 disabled:cursor-not-allowed transition-colors duration-300 border-r border-[#C7EEF3]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-mono text-xs tracking-[0.25em] uppercase">
                Back
              </span>
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={next}
                data-testid="book-next-btn"
                className="px-6 py-5 flex items-center justify-end gap-3 bg-neutral-900 text-white hover:bg-[#00BFCC] transition-colors duration-300"
              >
                <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold">
                  Next Step
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                data-testid="book-submit-btn"
                className="btn-sharp px-6 py-5 flex items-center justify-end gap-3 bg-[#00F0FF] text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-300"
              >
                <span className="font-mono text-xs tracking-[0.25em] uppercase font-bold">
                  Send via WhatsApp
                </span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  wide,
  testId,
}) => (
  <label className={`flex flex-col gap-2 ${wide ? "md:col-span-2" : ""}`}>
    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
      {label}
    </span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      data-testid={testId}
      className="input-field bg-transparent border-b border-neutral-300 focus:border-[#00BFCC] py-3 text-neutral-900 text-base md:text-lg placeholder:text-neutral-400 transition-colors duration-300"
    />
  </label>
);

const Row = ({ label, value }) => (
  <div className="flex items-baseline justify-between py-3 gap-4">
    <dt className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
      {label}
    </dt>
    <dd className="text-neutral-900 text-sm md:text-base font-light text-right break-all">
      {value || "—"}
    </dd>
  </div>
);
