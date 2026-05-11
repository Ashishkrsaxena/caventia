import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";

const linkClass =
  "block font-body text-[14px] text-parchment/50 hover:text-parchment/90 transition-colors py-1.5";

export default function Footer() {
  return (
    <footer className="bg-deep-warm text-parchment mt-0 relative z-10 border-t border-parchment/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16">
          <div className="md:col-span-5">
            <Wordmark variant="footer" />
            <p
              className="mt-5 font-display italic max-w-[280px]"
              style={{
                fontSize: "19px",
                lineHeight: 1.4,
                color: "rgba(245,241,232,0.55)",
                fontVariationSettings: '"opsz" 36, "SOFT" 60',
              }}
            >
              The audit-trail spine for regulated AI agents.
            </p>
          </div>

          <div className="md:col-span-2">
            <p
              className="font-body font-medium uppercase mb-6"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "rgba(245,241,232,0.7)",
              }}
            >
              Platform
            </p>
            <Link href="/platform" className={linkClass}>Overview</Link>
            <Link href="/platform#agentguard" className={linkClass}>AgentGuard</Link>
            <Link href="/platform#audit-trail" className={linkClass}>Audit Trail</Link>
            <Link href="/platform#passport" className={linkClass}>Compliance Passport</Link>
            <Link href="/platform#bridge" className={linkClass}>Auditor Bridge</Link>
          </div>

          <div className="md:col-span-2">
            <p
              className="font-body font-medium uppercase mb-6"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "rgba(245,241,232,0.7)",
              }}
            >
              Resources
            </p>
            <Link href="/sr117" className={linkClass}>SR 11-7 Whitepaper</Link>
            <Link href="/fda" className={linkClass}>FDA Q-Sub Whitepaper</Link>
            <Link href="/research" className={linkClass}>Founder Research</Link>
            <Link href="/about" className={linkClass}>About</Link>
          </div>

          <div className="md:col-span-3">
            <p
              className="font-body font-medium uppercase mb-6"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "rgba(245,241,232,0.7)",
              }}
            >
              Contact
            </p>
            <Link href="/contact" className={linkClass}>Design partners</Link>
            <a href="mailto:ashish@caventia.com" className={linkClass}>
              ashish@caventia.com
            </a>
          </div>
        </div>

        <div
          className="border-t border-parchment/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          style={{ fontSize: "11px" }}
        >
          <span
            className="font-mono"
            style={{ color: "rgba(245,241,232,0.3)", letterSpacing: "0.05em" }}
          >
            © {new Date().getFullYear()} Caventia Inc. · All rights reserved
          </span>
          <span
            className="font-display italic"
            style={{
              fontSize: "13px",
              color: "rgba(245,241,232,0.35)",
              letterSpacing: "0.01em",
              fontVariationSettings: '"opsz" 24, "SOFT" 60',
            }}
          >
            cavēre necesse est
          </span>
        </div>

        {/* Legal links - small subline so /privacy and /terms remain reachable */}
        <div className="mt-3 font-mono text-[11px] tracking-[0.05em] text-parchment/30">
          <Link href="/legal/privacy" className="hover:text-parchment/80 transition-colors">
            Privacy
          </Link>
          <span aria-hidden="true" className="mx-3">·</span>
          <Link href="/legal/terms" className="hover:text-parchment/80 transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
