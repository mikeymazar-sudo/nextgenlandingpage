"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WaitlistCTA() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden px-4 py-20 md:py-32"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 via-surface-darker to-brand-purple/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-sm font-medium text-brand-purple">
            <Sparkles className="h-4 w-4" />
            No credit card required
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Close More Deals?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-slate-400">
            Join NextGen Realty today and get 500 free credits to start
            finding, analyzing, and closing wholesale deals faster.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#signup"
              className="group flex items-center gap-2 rounded-xl bg-brand-purple px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-purple/90 hover:shadow-lg hover:shadow-brand-purple/25"
            >
              <Sparkles className="h-4 w-4" />
              Get 500 Free Credits
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="text-sm text-slate-500">
              500 credits · No card required · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
