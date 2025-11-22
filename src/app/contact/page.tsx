import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact – FitArenaa Oy",
};

export default function ContactPage() {
  return (
    <div className="bg-[#1e1e2f] text-white">
      <section className="bg-[#144349]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="heading text-2xl font-semibold text-white sm:text-3xl">
            Contact FitArenaa Oy
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#E7F1FA]/80">
            Share a few details and we&apos;ll be in touch with a short demo
            walkthrough or investor conversation – usually within one business
            day.
          </p>
        </div>
      </section>

      <section className="bg-[#1e1e2f]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 grid gap-10 lg:grid-cols-[1.4fr,1fr]">
          
          {/* CONTACT FORM */}
          <div className="card bg-[#020817]">
            <form
              action="mailto:contact@fitarenaa.fi"
              method="POST"
              encType="text/plain"
              className="space-y-4 p-6 text-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-[#E7F1FA]/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1A1A1A] outline-none ring-0 focus:border-[#176591]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-[#E7F1FA]/80"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-1 w-full rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1A1A1A] outline-none ring-0 focus:border-[#176591]"
                    placeholder="Gym / organisation name"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[#E7F1FA]/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="mt-1 w-full rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1A1A1A] outline-none ring-0 focus:border-[#176591]"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-[#E7F1FA]/80"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1A1A1A] outline-none ring-0 focus:border-[#176591]"
                    placeholder="+358…"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-[#E7F1FA]/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-[#E4E7EC] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1A1A1A] outline-none ring-0 focus:border-[#176591]"
                  placeholder="Tell us briefly about your gym, network, or interest."
                />
              </div>

              <button
                type="submit"
                className="pill inline-flex items-center justify-center bg-[#176591] px-5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-[#0C2A4D]/40 transition hover:bg-[#145477]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-5 text-sm text-[#E7F1FA]/85">
            
            <div className="card bg-[#0C2A4D]">
              <div className="p-5">
                <h2 className="heading text-sm font-semibold text-white">
                  Company details
                </h2>
                <p className="mt-3 text-xs text-[#E7F1FA]/85">
                  <span className="font-semibold">Company:</span> FitArenaa Oy, Helsinki
                </p>
                <p className="mt-2 text-xs text-[#E7F1FA]/85">
                  <span className="font-semibold">Email:</span> contact@fitarenaa.fi
                </p>
              </div>
            </div>

            <div className="card bg-[#020817]">
              <div className="flex items-center justify-between gap-3 p-5">
                <div>
                  <h2 className="heading text-sm font-semibold text-white">
                    LinkedIn
                  </h2>
                  <p className="mt-1 text-xs text-[#E7F1FA]/75">
                    Follow FitArenaa for updates on pilots, product releases, and open roles.
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/company/fitarenaa-oy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E7EC]/30 bg-[#0C2A4D]"
                >
                  <span className="text-sm font-semibold text-white">in</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
