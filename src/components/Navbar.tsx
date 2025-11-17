"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gyms", label: "Gyms & Packages" },
  { href: "/investors", label: "Investors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#31666a]/30 bg-[#1e1e2f]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Logo.png"
              alt="FitArenaa"
              width={240}
              height={80}
              className="h-16 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  active ? "text-[#4dc6a4]" : "hover:text-[#4dc6a4]"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#4dc6a4]"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-[#4dc6a4] px-4 py-2 text-xs font-semibold text-[#1e1e2f] shadow-sm transition hover:bg-[#3bc6c1]"
          >
            Book a Demo
          </Link>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-[#31666a]/30 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-white" />
            <span className="block h-0.5 w-4 rounded-full bg-white" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-[#31666a]/30 bg-[#1e1e2f] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-white/90">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-2 py-2 transition-colors ${
                      active
                        ? "bg-[#4dc6a4] text-[#1e1e2f]"
                        : "hover:bg-[#31666a]/20 hover:text-[#4dc6a4]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#4dc6a4] px-4 py-2 text-center text-xs font-semibold text-[#1e1e2f] shadow-sm transition hover:bg-[#3bc6c1]"
              >
                Book a Demo
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}


