"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Mail, Lock, User, Check, AlertCircle, Gift, Zap, BarChart3, Search } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function SignUpCredits() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: "https://www.nextgen.realty/dashboard",
      },
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // If Supabase returned a session (email confirmation disabled),
    // redirect straight to the dashboard
    if (data?.session) {
      window.location.href = "https://www.nextgen.realty/dashboard";
      return;
    }

    // Otherwise email confirmation is required — show "check your inbox"
    setSubmitted(true);
  };

  return (
    <section id="signup" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Value prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1.5 text-sm font-medium text-brand-purple">
              <Gift className="h-4 w-4" />
              Limited-time offer
            </div>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sign Up &amp; Get{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-blue-light bg-clip-text text-transparent">
                500 Free Credits
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-400">
              Create your account today and we&apos;ll load your dashboard with 500
              credits — no credit card required. Start finding and analyzing deals
              immediately.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  icon: BarChart3,
                  title: "Analyze deals instantly",
                  desc: "Run AI-powered deal analysis on any property",
                },
                {
                  icon: Search,
                  title: "Skip trace leads",
                  desc: "Find owner contact info for motivated sellers",
                },
                {
                  icon: Zap,
                  title: "Automate your workflow",
                  desc: "Streamline offers, follow-ups, and comps",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-purple/15">
                    <Icon className="h-4 w-4 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              No credit card required. 500 credits included on signup. Cancel anytime.
            </p>
          </motion.div>

          {/* Right: Sign-up form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-brand-purple/20 bg-surface-card p-6 shadow-xl shadow-brand-purple/5 sm:p-8">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-white">
                        Create your free account
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        500 credits added automatically on sign-up
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-300">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="John Smith"
                            required
                            className="w-full rounded-xl border border-white/10 bg-surface-darker py-3 pl-9 pr-4 text-white placeholder:text-slate-600 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-300">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@example.com"
                            required
                            className="w-full rounded-xl border border-white/10 bg-surface-darker py-3 pl-9 pr-4 text-white placeholder:text-slate-600 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-slate-300">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min. 8 characters"
                            required
                            minLength={8}
                            className="w-full rounded-xl border border-white/10 bg-surface-darker py-3 pl-9 pr-4 text-white placeholder:text-slate-600 focus:border-brand-purple/50 focus:outline-none focus:ring-2 focus:ring-brand-purple/20"
                          />
                        </div>
                      </div>

                      {/* Error */}
                      {error && (
                        <div className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 p-3">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                          <p className="text-sm text-red-400">{error}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-purple py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-purple/90 hover:shadow-lg hover:shadow-brand-purple/25 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Creating account…
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4" />
                            Get 500 Free Credits
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="mt-4 text-center text-xs text-slate-600">
                      Already have an account?{" "}
                      <a
                        href="https://www.nextgen.realty/dashboard"
                        className="text-brand-blue-light hover:underline"
                      >
                        Sign in
                      </a>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-5 py-4 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/20">
                      <Check className="h-8 w-8 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">
                        Account created!
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        Check your inbox and click the confirmation link. Once
                        confirmed, you&apos;ll be taken straight to your dashboard
                        with{" "}
                        <span className="font-semibold text-brand-purple">
                          500 credits
                        </span>{" "}
                        ready to use.
                      </p>
                    </div>
                    <div className="w-full rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-4">
                      <p className="text-xs text-slate-400">
                        Didn&apos;t receive an email? Check your spam folder or{" "}
                        <button
                          onClick={() => setSubmitted(false)}
                          className="text-brand-blue-light hover:underline"
                        >
                          try again
                        </button>
                        .
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
