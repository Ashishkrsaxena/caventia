import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";

const linkClass =
  "block font-body text-[14px] text-parchment/70 hover:text-parchment transition-colors py-1";

export default function Footer() {
  return (
    <footer className="bg-deep text-parchment mt-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-14 md:py-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-6">
            <Wordmark variant="footer" />
            <p className="mt-6 font-display text-[22px] md:text-[26px] leading-[1.25] text-parchment max-w-[360px]">
              The audit-trail spine
              <br />
              for regulated AI agents.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="type-label text-parchment/60 mb-4">Explore</p>
            <Link href="/platform" className={linkClass}>Platform</Link>
            <Link href="/research" className={linkClass}>Research</Link>
            <Link href="/about" className={linkClass}>About</Link>
            <Link href="/sr117" className={linkClass}>SR 11-7 whitepaper</Link>
            <Link href="/contact" className={linkClass}>Contact</Link>
          </div>

          <div className="md:col-span-3">
            <p className="type-label text-parchment/60 mb-4">Legal</p>
            <Link href="/legal/privacy" className={linkClass}>Privacy</Link>
            <Link href="/legal/terms" className={linkClass}>Terms</Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-parchment/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="font-mono text-[12px] text-parchment/50">
            © {new Date().getFullYear()} Caventia Inc. All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-parchment/50">
            Built for regulated AI. Designed in the editorial register.
          </p>
        </div>
      </div>
    </footer>
  );
}
