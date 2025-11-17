export function Footer() {
  return (
    <footer className="border-t border-[#1A355A] bg-[#0C2A4D]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-[0.22em] text-[#E7F1FA]">
              FITARENAA OY
            </h3>
            <p className="mt-3 text-sm text-[#E4E7EC]/80">
              AI-native gym intelligence platform that helps Nordic gyms become
              smarter, more inclusive, and more profitable – without new
              hardware.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[#E4E7EC]/80">
              <li>Home</li>
              <li>About</li>
              <li>Gyms &amp; Packages</li>
              <li>Investors</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-white">
              Connect
            </h4>
            <div className="mt-3 flex gap-3 text-sm text-[#E4E7EC]/80">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white">
                in
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-4 text-xs text-[#E4E7EC]/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} FitArenaa Oy. All rights reserved.</p>
          <p>Built in Helsinki, for gyms everywhere.</p>
        </div>
      </div>
    </footer>
  );
}


