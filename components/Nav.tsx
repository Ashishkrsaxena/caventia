"use client";

import { useState } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { NAV_LINKS } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 border-b border-rule bg-parchment">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Wordmark variant="nav" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-body text-[14px] font-normal tracking-[0.01em] text-ink-mute hover:text-ink transition-colors"
            >
              {link.label}
              {/* Hover underline that draws from right to left, settles on the left */}
              <span
                aria-hidden="true"
                className="absolute -bottom-[3px] left-0 right-0 h-px bg-ink origin-right group-hover:origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-body text-[14px] font-medium bg-accent text-parchment px-5 py-2.5 rounded-[2px] hover:bg-accent-deep transition-colors"
          >
            Talk to us →
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
            {open ? (
              <>
                <line x1="2" y1="2" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.5" />
              </>
            ) : (
              <>
                <line x1="2" y1="2" x2="20" y2="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-rule bg-parchment px-6 py-6"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-[16px] font-medium text-ink hover:text-accent py-2 border-b border-rule"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center font-body text-[15px] font-medium bg-accent text-parchment px-5 py-3.5 rounded-[2px] hover:bg-accent-deep transition-colors"
              >
                Talk to us →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
