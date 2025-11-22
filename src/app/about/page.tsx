import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – FitArenaa Oy",
};

export default function AboutPage() {
  return (
    <div className="bg-[#1e1e2f] text-white">
      <section className="bg-[#144349]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="heading text-2xl font-semibold text-white sm:text-3xl">
            About FitArenaa Oy
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#E7F1FA]/80">
            FitArenaa is an AI-native SaaS company on a mission to make gyms
            more inclusive, predictable, and profitable – starting from the
            Nordics and expanding globally.
          </p>
        </div>
      </section>

      <section className="bg-[#1e1e2f]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr]">
            <div className="space-y-6 text-sm leading-relaxed text-[#E7F1FA]/85">
              <div>
                <h2 className="heading text-lg font-semibold text-white">
                  Company story
                </h2>
                <p className="mt-3">
                  FitArenaa was born from a simple observation: most gyms still
                  run on gut feeling and static spreadsheets, while members live
                  in a world of real-time information and personalised digital
                  experiences. Peak hours feel chaotic, quiet hours are wasted,
                  and members who need predictability the most – neurodiverse,
                  socially anxious, and time-sensitive people – often churn
                  first.
                </p>
                <p className="mt-3">
                  Instead of installing expensive hardware, FitArenaa takes a
                  software-first approach. By combining data from access
                  systems, bookings, and behaviour patterns, we build a
                  live-and-predictive model of how each gym actually breathes.
                  On top of that, we layer AI-driven features for operations,
                  inclusivity, and member engagement.
                </p>
              </div>

              <div>
                <h2 className="heading text-lg font-semibold text-white">
                  Mission
                </h2>
                <p className="mt-3">
                  Our mission is to make gyms feel calmer, smarter, and more
                  human – for both members and operators. We believe AI should
                  reduce friction, not add more dashboards. That&apos;s why
                  FitArenaa focuses on three pillars:
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <span className="font-semibold text-[#E7F1FA]">
                      AI:
                    </span>{" "}
                    Practical, hardware-free intelligence that plugs into
                    existing gym systems.
                  </li>
                  <li>
                    <span className="font-semibold text-[#E7F1FA]">
                      Inclusivity:
                    </span>{" "}
                    Tools that meaningfully support neurodiverse, anxious, and
                    time-constrained members.
                  </li>
                  <li>
                    <span className="font-semibold text-[#E7F1FA]">
                      Efficiency:
                    </span>{" "}
                    Better yield on space, classes, and energy – with fewer
                    manual decisions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card bg-[#020817]">
                <div className="p-5">
                  <h2 className="heading text-sm font-semibold text-white">
                    Vision – 3 to 5 years
                  </h2>
                  <p className="mt-3 text-sm text-[#E7F1FA]/85">
                    Our vision is to become the default AI operating layer for
                    gyms and wellness venues in the Nordics and beyond – the
                    system silently orchestrating when members visit, how energy
                    is used, and how inclusive each space feels.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[#E7F1FA]/85">
                    <li>
                      • Powering multi-country fitness networks with predictive
                      operations.
                    </li>
                    <li>
                      • Enabling employers to offer intelligent, inclusive gym
                      access as a core benefit.
                    </li>
                    <li>
                      • Providing a measurable &quot;inclusivity score&quot; for
                      gyms and their investors.
                    </li>
                    <li>
                      • Becoming a trusted AI partner for city-scale wellness
                      ecosystems.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card bg-[#E7F1FA]">
  <div className="p-5">
    <h2 className="heading text-sm font-semibold text-white">
      Founders
    </h2>

    <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-[#1A1A1A] md:grid-cols-2">
      
      {/* Column 1 */}
      <div className="rounded-xl bg-white p-4">
        <p className="font-semibold text-[#0C2A4D]">
          Ihab Alsouse
        </p>
        <p className="text-xs text-[#4A4A4A]">
          Co-Founder & Co-CEO
        </p>
        <p className="mt-2 text-xs text-[#4A4A4A]">
          Over 15 years of experience in fitness coaching, nutrition,
          and gym management. Ihab brings a deep understanding of health,
          training, and business operations — ensuring FitArena is built
          from real industry insight.
        </p>
      </div>

      {/* Column 2 */}
      <div className="rounded-xl bg-white p-4">
        <p className="font-semibold text-[#0C2A4D]">
          Enxhi Nikolla
        </p>
        <p className="text-xs text-[#4A4A4A]">
          Co-Founder & CEO
        </p>
        <p className="mt-2 text-xs text-[#4A4A4A]">
          A business strategist and entrepreneur with expertise in HR,
          startups, and IT. Enxhi focuses on scaling FitArena’s business,
          building partnerships, and connecting innovation with real-world
          gym needs.
        </p>
      </div>

    </div>
  </div>
</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


