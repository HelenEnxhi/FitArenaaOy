import { motion } from "framer-motion";
import {
  ChartBarIcon,
  UsersIcon,
  SparklesIcon,
  ClockIcon,
  BoltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import pricingData from "@/content/pricing.json";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const packages = pricingData.packages.slice(0, 3);

  return (
    <div className="bg-[#020817] text-white">
      {/* Hero */}
      <section className="gradient-hero bg-grid">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-16 pt-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="flex-1"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#E7F1FA]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#27AE60]" />
              Live AI for gyms – no new hardware required
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="heading mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              AI That Makes Gyms Smarter, More Inclusive, and More Profitable
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-[#E7F1FA]/80 sm:text-base"
            >
              FitArenaa uses predictive analytics, real-time occupancy signals,
              and inclusive design to help gyms manage peak hours, reduce
              churn, and welcome neurodiverse and socially anxious members with
              confidence.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="pill gradient-cta inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#0C2A4D]/40 transition hover:brightness-110 sm:text-sm"
              >
                Book Demo
              </Link>
              <Link
                href="/gyms"
                className="pill inline-flex items-center justify-center border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-[#E7F1FA] transition hover:bg-white/10 sm:text-sm"
              >
                View Packages
              </Link>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#E7F1FA]/70"
            >
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-[#176591]/20 text-[10px] font-semibold text-[#E7F1FA] flex items-center justify-center">
                  AI
                </span>
                <span>Predictive crowd levels & energy signals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-[#27AE60]/20" />
                <span>Live across Nordic fitness operators</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex-1"
          >
            <div className="card relative overflow-hidden bg-[#020817]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#176591]/40 via-transparent to-[#4A75A6]/40" />
              <div className="relative grid gap-6 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-[#E7F1FA]/70">
                      AI Insights Dashboard
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Today&apos;s gym load
                    </p>
                  </div>
                  <div className="pill bg-[#E7F1FA]/5 px-3 py-1 text-[10px] font-medium text-[#E7F1FA]">
                    Hardware-free
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-[#0C2A4D] px-3 py-3">
                    <p className="text-[11px] text-[#E7F1FA]/70">
                      Peak forecast
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-[#F2994A]">
                      18:30
                    </p>
                    <p className="mt-1 text-[11px] text-[#E7F1FA]/60">
                      87% capacity expected
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#0C2A4D] px-3 py-3">
                    <p className="text-[11px] text-[#E7F1FA]/70">
                      Current crowd
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-[#27AE60]">
                      54%
                    </p>
                    <p className="mt-1 text-[11px] text-[#E7F1FA]/60">
                      Ideal for anxious members
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#0C2A4D] px-3 py-3">
                    <p className="text-[11px] text-[#E7F1FA]/70">
                      Retention risk
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-[#D62828]">
                      ↓ 23%
                    </p>
                    <p className="mt-1 text-[11px] text-[#E7F1FA]/60">
                      with AI nudges enabled
                    </p>
                  </div>
                </div>
                <div className="grid gap-3 rounded-xl bg-[#020817] px-3 py-3 border border-[#1A355A]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#E7F1FA]/80">
                      Inclusivity score
                    </span>
                    <span className="pill bg-[#27AE60]/15 px-2 py-0.5 text-[10px] font-semibold text-[#27AE60]">
                      +12 pts this month
                    </span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-white/5">
                    <span className="w-2/3 bg-[#27AE60]" />
                    <span className="w-1/6 bg-[#F2994A]" />
                    <span className="w-1/6 bg-[#D62828]" />
                  </div>
                  <p className="text-[11px] text-[#E7F1FA]/70">
                    Neurodiverse, socially anxious, and time-sensitive members
                    receive tailored visit windows and nudges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#020817]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="heading text-xl font-semibold text-white sm:text-2xl">
                Key features for modern gyms
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#E7F1FA]/75">
                From live occupancy to AI coaching, FitArenaa connects the dots
                between member experience, operations, and profitability.
              </p>
            </div>
            <p className="text-xs text-[#E7F1FA]/60">
              Built for multi-site operators and ambitious independent gyms.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ChartBarIcon,
                title: "AI Insights Dashboard",
                description:
                  "See live and predicted crowd levels, retention risk, and class performance in one view.",
              },
              {
                icon: UsersIcon,
                title: "Live Occupancy Monitoring",
                description:
                  "Understand how busy each zone is using hardware-free signals and member behaviour.",
              },
              {
                icon: HeartIcon,
                title: "Member Engagement Analytics",
                description:
                  "Spot disengaged members early with AI-powered churn signals and nudges.",
              },
              {
                icon: ClockIcon,
                title: "Smart Scheduling",
                description:
                  "Optimise classes and staff based on demand, weather, and local patterns.",
              },
              {
                icon: SparklesIcon,
                title: "AI Fitness Buddy",
                description:
                  "Members receive micro-plans and timing suggestions aligned with real crowd data.",
              },
              {
                icon: BoltIcon,
                title: "Corporate Wellness Integration",
                description:
                  "Enable employers to sponsor smart, inclusive gym access for their teams.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true, amount: 0.3 }}
                className="card relative overflow-hidden bg-[#020817]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#176591]/10 via-transparent to-[#4A75A6]/10" />
                <div className="relative p-5">
                  <div className="pill inline-flex h-9 w-9 items-center justify-center bg-[#E7F1FA]">
                    <feature.icon className="h-5 w-5 text-[#176591]" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#E7F1FA]/80">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusivity & Accessibility */}
      <section className="bg-[#E7F1FA]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] lg:items-center">
            <div>
              <h2 className="heading text-xl font-semibold text-[#0C2A4D] sm:text-2xl">
                Built for inclusivity and accessibility
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4A4A4A]">
                Supporting neurodiverse, socially anxious, and time-sensitive
                members through real-time &amp; predictive crowd levels. Members
                see when the gym feels calmer, get nudges that respect their
                patterns, and choose how visible they want to be.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Real-time & predictive crowd levels in the app",
                  "Quiet window suggestions for anxious members",
                  "Privacy-first profiles & flexible social matching",
                  "Configurable for each gym’s culture and layout",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full border border-[#176591] text-[10px] font-semibold text-[#176591] flex items-center justify-center">
                      ✓
                    </span>
                    <p className="text-xs text-[#1A1A1A]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card border-[#176591]/20 bg-white">
              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#0C2A4D]">
                  Inclusivity snapshot
                </h3>
                <p className="mt-2 text-xs text-[#4A4A4A]">
                  See how well you serve different member groups – and where AI
                  can gently close gaps.
                </p>
                <div className="mt-5 space-y-4 text-xs text-[#1A1A1A]">
                  <div className="flex items-center justify-between">
                    <span>Neurodiverse-friendly hours</span>
                    <span className="font-semibold text-[#176591]">+32%</span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-[#E4E7EC]">
                    <span className="w-2/3 bg-[#176591]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Social anxiety-triggering queues</span>
                    <span className="font-semibold text-[#27AE60]">-19%</span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-[#E4E7EC]">
                    <span className="w-1/2 bg-[#27AE60]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Time-sensitive member satisfaction</span>
                    <span className="font-semibold text-[#176591]">+21 pts</span>
                  </div>
                  <div className="flex h-2.5 overflow-hidden rounded-full bg-[#E4E7EC]">
                    <span className="w-3/4 bg-[#4A75A6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Overview */}
      <section className="bg-[#020817]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="heading text-xl font-semibold text-white sm:text-2xl">
                Packages that scale with your gym
              </h2>
              <p className="mt-2 max-w-xl text-sm text-[#E7F1FA]/75">
                Start with essential AI, then unlock predictive and full-suite
                capabilities as your network grows.
              </p>
            </div>
            <Link
              href="/gyms"
              className="text-xs font-semibold text-[#E7F1FA] underline-offset-4 hover:underline"
            >
              See full packages
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="card flex flex-col justify-between bg-[#020817]"
              >
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#E7F1FA]/70">
                    {pkg.subtitle}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-white">
                    {pkg.name} Package
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#4A75A6]">
                    {pkg.priceRange}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-[#E7F1FA]/80">
                    {pkg.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#176591]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-white/5 px-5 py-4">
                  <Link
                    href="/contact"
                    className="pill inline-flex w-full items-center justify-center bg-[#176591] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#0C2A4D]/40 transition hover:bg-[#145477]"
                  >
                    Talk to sales
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feature */}
      <section className="bg-[#020817]">
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr] lg:items-center">
            <div className="card bg-[#020817]">
              <div className="relative overflow-hidden rounded-2xl border border-[#176591]/40 bg-gradient-to-br from-[#0C2A4D] via-[#020817] to-[#176591] p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-[#E7F1FA]/80">
                      FitArenaa Social
                    </p>
                    <h3 className="heading mt-1 text-lg font-semibold text-white">
                      AI-based gym partner matching
                    </h3>
                  </div>
                  <span className="pill bg-[#E7F1FA]/10 px-3 py-1 text-[10px] font-semibold text-[#E7F1FA]">
                    Optional B2C add-on
                  </span>
                </div>
                <p className="mt-3 text-xs text-[#E7F1FA]/80">
                  The AI social layer that helps members find compatible
                  training partners based on preferences, schedules, and
                  comfort-level – without sacrificing privacy.
                </p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs text-[#E7F1FA]/85">
                  <div className="rounded-xl bg-black/20 p-3">
                    <p className="font-semibold text-white">Train Together</p>
                    <p className="mt-1">
                      Members see subtle suggestions for partners who share
                      goals, pace, and preferred crowd levels.
                    </p>
                  </div>
                  <div className="rounded-xl bg-black/20 p-3">
                    <p className="font-semibold text-white">Safe by design</p>
                    <p className="mt-1">
                      Opt-in only, with clear controls for visibility and
                      communication – designed for inclusivity first.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[11px] text-[#E7F1FA]/70">
                  Priced at €1.99/member/mo, FitArenaa Social unlocks a new,
                  high-margin recurring revenue stream for gyms.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-xs text-[#E7F1FA]/80">
              <h4 className="heading text-sm font-semibold text-white">
                Social, but on members&apos; terms
              </h4>
              <p>
                Not everyone wants the same type of social energy at the gym.
                FitArenaa Social respects that – matching based on energy,
                goals, and comfort, not just who happens to be nearby.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#176591]" />
                  <span>Filters for tempo, communication style, and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#176591]" />
                  <span>Ideal for corporate wellness and student groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#176591]" />
                  <span>
                    Integrated with visit timing so partners actually meet
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#020817]">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="gradient-cta relative overflow-hidden rounded-2xl px-6 py-7 sm:px-8">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
            <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="heading text-lg font-semibold text-white sm:text-xl">
                  Ready to make your gym future-proof?
                </h2>
                <p className="mt-2 max-w-xl text-xs text-[#E7F1FA]">
                  Book a 30-minute session with the FitArenaa team to see how
                  predictive AI and inclusivity features can boost retention,
                  yield, and member satisfaction across your network.
                </p>
              </div>
              <Link
                href="/contact"
                className="pill inline-flex items-center justify-center bg-white px-5 py-2.5 text-xs font-semibold text-[#176591] shadow-md shadow-[#0C2A4D]/40 transition hover:bg-[#E7F1FA]"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

