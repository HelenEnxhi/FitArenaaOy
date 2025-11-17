import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors – FitArenaa Oy",
};

const roadmap = [
  {
    year: "2025",
    items: [
      "Pilot deployments across selected Nordic gym chains",
      "Core AI insights dashboard and live occupancy modules",
      "FitArenaa Social MVP launched with first partners",
    ],
  },
  {
    year: "2026",
    items: [
      "Scaled rollout to multi-country operators",
      "Energy efficiency dashboard and benchmarking suite",
      "Corporate wellness integrations and employer pilots",
    ],
  },
  {
    year: "2027",
    items: [
      "Pan-Nordic footprint with thousands of connected gym endpoints",
      "Standardised inclusivity and utilisation metrics for investors",
      "Expansion into broader wellness and sports infrastructure",
    ],
  },
];

export default function InvestorsPage() {
  return (
    <div className="bg-[#1e1e2f] text-white">
      <section className="bg-[#144349]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="heading text-2xl font-semibold text-white sm:text-3xl">
            Investor overview
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#E7F1FA]/80">
            FitArenaa sits at the intersection of fitness, inclusivity, and
            applied AI – a hardware-free SaaS layer on top of existing gym
            infrastructure, with recurring B2B and B2C revenue streams.
          </p>
        </div>
      </section>

      <section className="bg-[#1e1e2f]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 space-y-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm text-[#E7F1FA]/85">
              <h2 className="heading text-lg font-semibold text-white">
                Market opportunity
              </h2>
              <p>
                The Nordic fitness market is mature but under-optimised.
                Retention remains a persistent problem, inclusivity is more
                slogan than measurable practice, and most operators lack
                predictive tooling. At the same time, AI is moving from
                experiment to expectation – both from consumers and investors.
              </p>
              <p>
                FitArenaa targets this gap with a practical AI layer that solves
                day-to-day pain points: crowding, scheduling, inclusivity, and
                energy use. The opportunity extends beyond single gyms to
                multi-site operators, corporate wellness buyers, and city-scale
                wellness ecosystems.
              </p>
            </div>
            <div className="space-y-4 text-sm text-[#E7F1FA]/85">
              <h2 className="heading text-lg font-semibold text-white">
                Why invest in FitArenaa
              </h2>
              <ul className="space-y-2">
                <li>
                  • <span className="font-semibold">Hardware-free SaaS:</span>{" "}
                  no new in-gym devices, fast time-to-value, and scalable gross
                  margins.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    High scalability:
                  </span>{" "}
                  deploy once per operator, then scale across networks and
                  geographies.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Predictive analytics:
                  </span>{" "}
                  drives operational decisions and measurable inclusivity
                  improvements.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Large B2B opportunity:
                  </span>{" "}
                  gyms, wellness chains, and employers seeking differentiated
                  benefits.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Social add-on revenue:
                  </span>{" "}
                  FitArenaa Social unlocks B2C-like ARPU without becoming a pure
                  consumer app.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="heading text-lg font-semibold text-white">
              Traction &amp; roadmap
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-[#E7F1FA]/85">
              FitArenaa is focused on disciplined execution with a clear path to
              scale. Below is an indicative timeline for 2025–2027.
            </p>
            <div className="mt-6 space-y-6">
              {roadmap.map((entry, index) => (
                <div className="flex gap-4" key={entry.year}>
                  <div className="flex flex-col items-center">
                    <div className="pill flex h-9 w-9 items-center justify-center bg-[#176591] text-xs font-semibold text-white">
                      {entry.year}
                    </div>
                    {index < roadmap.length - 1 && (
                      <div className="h-full w-px bg-[#176591]/50" />
                    )}
                  </div>
                  <div className="card flex-1 bg-[#020817]">
                    <div className="p-4 text-sm text-[#E7F1FA]/85">
                      <ul className="space-y-2">
                        {entry.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-cta rounded-2xl px-6 py-7">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="heading text-lg font-semibold text-white">
                  Interested in the full picture?
                </h2>
                <p className="mt-2 max-w-xl text-xs text-[#E7F1FA]">
                  Request our investor pitch deck for deeper insight into the
                  product, traction, roadmap, and funding strategy.
                </p>
              </div>
              <a
                href="#"
                className="pill inline-flex items-center justify-center bg-white px-5 py-2.5 text-xs font-semibold text-[#176591] shadow-md shadow-[#0C2A4D]/40 transition hover:bg-[#E7F1FA]"
              >
                Download Pitch Deck
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


