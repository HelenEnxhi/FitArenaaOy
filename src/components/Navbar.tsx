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
    <header className="sticky top-0 z-40 border-b border-[#1A355A] bg-[#0C1F3A]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-xl bg-gradient-to-tr from-[#176591] to-[#4A75A6] p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-[0.7rem] bg-[#0C2A4D]">
                <span className="text-xs font-semibold tracking-[0.18em] text-white">
                  FA
                </span>
              </div>
            </div>
            <span className="text-sm font-semibold tracking-[0.22em] text-white sm:text-base">
              FITARENAA OY
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#E4E7EC] md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  active ? "text-white" : "hover:text-white"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#176591]"
                  />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-[#176591] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#0C2A4D]/40 transition hover:bg-[#145477]"
          >
            Book Demo
          </Link>
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
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
            className="border-t border-[#1A355A] bg-[#0C2A4D] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-[#E4E7EC]">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-2 py-2 transition-colors ${
                      active
                        ? "bg-[#176591] text-white"
                        : "hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-[#176591] px-4 py-2 text-center text-xs font-semibold text-white shadow-sm shadow-[#0C2A4D]/40 transition hover:bg-[#145477]"
              >
                Book Demo
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}


