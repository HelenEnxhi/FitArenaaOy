import { Metadata } from "next";
import pricingData from "@/content/pricing.json";

export const metadata: Metadata = {
  title: "Gyms & Packages – FitArenaa Oy",
};

export default function GymsPage() {
  const { packages } = pricingData;
  return (
    <div className="bg-[#1e1e2f] text-white">
      <section className="bg-[#144349]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="heading text-2xl font-semibold text-white sm:text-3xl">
            Packages for modern gyms
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#E7F1FA]/80">
            Choose the level of AI that fits your operation today – and scale up
            as your network grows. All packages are software-only and integrate
            with existing access systems.
          </p>
        </div>
      </section>

      <section className="bg-[#1e1e2f]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-4">
            {packages.map((pkg) => {
              const isGrowth = pkg.id === "growth";
              return (
                <div
                  key={pkg.id}
                  className={`card flex h-full flex-col bg-[#31666a]/30 border border-[#409d94]/30 ${
                    isGrowth ? "ring-2 ring-[#4dc6a4]" : ""
                  }`}
                >
                  <div className="flex-1 p-5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                          {pkg.subtitle}
                        </p>
                        <h2 className="mt-1 text-sm font-semibold text-white">
                          {pkg.name} Package
                        </h2>
                      </div>
                      {isGrowth && (
                        <span className="pill bg-[#4dc6a4] px-3 py-1 text-[10px] font-semibold text-[#1e1e2f]">
                          Bestseller
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm font-semibold text-[#3bc6c1]">
                      {pkg.priceRange}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-white/80">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#4dc6a4]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-[#31666a] px-5 py-4 text-xs text-white/75">
                    {pkg.id === "social" ? (
                      <p>
                        B2C add-on that can be layered on top of any package to
                        unlock AI-based partner matching and social engagement.
                      </p>
                    ) : (
                      <p>
                        Includes onboarding support, success metrics, and
                          optional roll-out across multiple locations.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


