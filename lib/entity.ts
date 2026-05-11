/**
 * Single source of truth for Caventia's legal entity information.
 *
 * Pre-incorporation, INCORPORATED is false and longForm() surfaces
 * "Caventia (in formation as a Delaware C-Corp)" language. Once Stripe
 * Atlas confirms the Delaware certificate of incorporation:
 *
 *   1. Flip INCORPORATED to true
 *   2. Fill FORMATION_DATE with the ISO date on the certificate
 *   3. Add EIN and DELAWARE_FILE_NUMBER (kept here for centralized
 *      reference; not surfaced publicly)
 *
 * Every component that reads from this file updates in that one commit.
 */

// Flip to true after Stripe Atlas confirms Delaware certificate of
// incorporation. Until then, public pages render "in formation" language.
export const INCORPORATED = false;

// ISO date (YYYY-MM-DD) on the Delaware certificate of incorporation.
// Set when INCORPORATED flips to true.
export const FORMATION_DATE = "";

// Delaware-issued file number on the certificate of incorporation. Not
// surfaced publicly. Kept here for internal reference.
export const DELAWARE_FILE_NUMBER = "";

// EIN issued by the IRS. Not surfaced publicly. Kept here for internal
// reference and to be used by lib/email.ts and other server-side modules
// that may need it.
export const EIN = "";

/**
 * Short form, used in footers, byline meta, copyright lines, structured
 * data legalName. Same string pre- and post-incorporation; the difference
 * is whether the entity is legally formed.
 */
export const SHORT = "Caventia Inc.";

/**
 * Conversational reference, used in body prose where the long legal form
 * would be heavy.
 */
export const CONVERSATIONAL = "Caventia";

/**
 * Long form used in the opening paragraph of legal pages. Pre-incorporation
 * uses "in formation" language so the page isn't misrepresenting a
 * non-existent entity. Post-incorporation uses the standard Delaware
 * corporation phrasing.
 */
export function longForm(): string {
  return INCORPORATED
    ? "Caventia Inc., a Delaware corporation"
    : "Caventia (in formation as a Delaware C-Corp)";
}

/**
 * Returns the founding date for Schema.org structured data. Once
 * INCORPORATED flips, returns the precise ISO date. Until then, returns
 * the planned-formation year for SEO continuity.
 */
export function foundingDate(): string {
  return FORMATION_DATE || "2026";
}

/**
 * Returns the current year for copyright strings. Function rather than
 * constant so server-rendered pages always show today's year without a
 * rebuild on Jan 1.
 */
export function copyrightYear(): number {
  return new Date().getFullYear();
}

/**
 * Jurisdiction. Kept here so any future structured-data fields can read
 * from one place.
 */
export const STATE = "Delaware";
export const COUNTRY = "United States";

/**
 * Public-facing entity contact email aliases. Each should resolve to a
 * monitored inbox before any production commercial relationship begins.
 */
export const EMAIL = {
  founder: "ashish@caventia.com",
  general: "hello@caventia.com",
  privacy: "privacy@caventia.com",
  legal: "legal@caventia.com",
} as const;
