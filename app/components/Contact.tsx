"use client";

import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ gate SSR

  useEffect(() => setMounted(true), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <MotionConfig reducedMotion="never">
      <section className="relative py-16 md:py-24 bg-bg overflow-x-clip">
        {/* subtle background ornament */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-coffee/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-expresso/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-4">
          {/* header */}
          <div className="mb-12 md:mb-16 text-center">
            <div className="flex items-center mb-12 md:mb-20">
              <div className="flex-grow border-t border-coffee"></div>
              <p className="mx-4 font-playfair italic text-6xl text-coffee text-center opsz-auto no-synth">
                Get in Touch
              </p>
              <div className="flex-grow border-t border-coffee"></div>
            </div>
            <p className="mt-3 text-lg text-expresso/80 font-playfair">
              Questions, bookings, or special requests—send us a note and we’ll
              reply within 24 hours.
            </p>
          </div>

          {/* Only render motion on client so initial->animate actually runs */}
          {mounted && (
            <div className="grid gap-6 md:grid-cols-2">
              {/* left: studio card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }} // ✅ mount animation
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl bg-expresso text-light shadow-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_-10%_-10%,rgba(255,255,255,0.15),transparent)]" />
                <div className="relative p-8 md:p-10">
                  <h3 className="font-playfair text-3xl">Pace Studio</h3>

                  <dl className="mt-6 space-y-4 text-[15px]">
                    <div className="flex items-start gap-3">
                      <dt className="mt-0.5 opacity-80">Address</dt>
                      <dd>123 Studio Lane, London</dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="mt-0.5 opacity-80">Email</dt>
                      <dd>
                        <a
                          href="mailto:hello@pacestudio.com"
                          className="underline decoration-light/30 underline-offset-4 hover:decoration-light"
                        >
                          hello@pacestudio.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="mt-0.5 opacity-80">Phone</dt>
                      <dd>
                        <a
                          href="tel:+440000000000"
                          className="underline decoration-light/30 underline-offset-4 hover:decoration-light"
                        >
                          +44 00 0000 0000
                        </a>
                      </dd>
                    </div>
                    <div className="flex items-start gap-3">
                      <dt className="mt-0.5 opacity-80">Hours</dt>
                      <dd>Mon–Sat: 7:00–19:00 · Sun: 9:00–13:00</dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/schedule"
                      className="rounded-full bg-light text-expresso px-5 py-2 font-medium hover:bg-light/90 transition"
                    >
                      View Schedule
                    </Link>
                    <Link
                      href="/faqs"
                      className="rounded-full border border-light/40 px-5 py-2 font-medium text-light hover:bg-light/10 transition"
                    >
                      FAQs
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* right: form */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }} // ✅ mount animation
                transition={{ duration: 0.5, delay: 0.05 }}
                className="rounded-3xl bg-light/70 backdrop-blur shadow-xl border border-coffee/20"
              >
                <form onSubmit={onSubmit} className="p-6 md:p-8">
                  {/* ...your fields unchanged... */}
                  <div className="grid gap-5 md:grid-cols-2">
                    {/* inputs */}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-sm text-expresso/70">
                      We’ll get back within one business day.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="rounded-full bg-expresso px-6 py-2.5 font-medium text-light hover:bg-expresso/90 disabled:opacity-60 disabled:cursor-not-allowed transition"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </button>
                  </div>

                  {sent && (
                    <div
                      className="mt-4 rounded-xl border border-coffee/30 bg-light/80 px-4 py-3 text-expresso"
                      role="status"
                      aria-live="polite"
                    >
                      Thanks! Your message has been sent.
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </MotionConfig>
  );
}
