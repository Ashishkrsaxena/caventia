/**
 * Single source of truth for Caventia's legal entity information.
 *
 * Caventia, Inc. is a Delaware C corporation. Certificate of
 * incorporation filed 2026-05-12 via Stripe Atlas (file number
 * 10619896). EIN is on file; the value is stored outside the repo
 * (see ~/Documents/Caventia-Corporate/) and is not committed to
 * source control.
 *
 * Every component that surfaces entity language to a user reads
 * from longForm() or foundingDate(), so future entity-state
 * changes (e.g., reincorporation, name change) propagate through
 * a single edit here.
 */

// Flipped after Stripe Atlas confirmed the Delaware certificate of
// incorporation. Public pages now render the standard "Caventia, Inc., a
// Delaware corporation" language via longForm().
export const INCORPORATED = true;

// ISO date (YYYY-MM-DD) on the Delaware certificate of incorporation.
export const FORMATION_DATE = "2026-05-12";

// Delaware-issued file number on the certificate of incorporation. Not
// surfaced publicly. Kept here for internal reference.
export const DELAWARE_FILE_NUMBER = "10619896";

// EIN is intentionally NOT stored in source control. When a runtime
// code path needs the EIN (W-9 generation, contracts, terms-page fine
// print), read it from CAVENTIA_EIN at request time. The value lives
// in the deployment environment, not the repo. Local development
// shows an empty string; no public surface depends on it today.
export const EIN: string = process.env["CAVENTIA_EIN"] ?? "";

/**
 * Short form, used in footers, byline meta, copyright lines, structured
 * data legalName. Same string pre- and post-incorporation; the difference
 * is whether the entity is legally formed.
 */
// Matches the entity name on the Delaware certificate of incorporation.
export const SHORT = "Caventia, Inc.";

/**
 * Conversational reference, used in body prose where the long legal form
 * would be heavy.
 */
export const CONVERSATIONAL = "Caventia";

/**
 * Long form used in the opening paragraph of legal pages. Post-
 * incorporation renders the standard Delaware corporation phrasing.
 * The pre-incorporation fallback is kept for completeness and would
 * surface again only if the legal entity were ever wound down or
 * replaced.
 */
export function longForm(): string {
  return INCORPORATED
    ? "Caventia, Inc., a Delaware corporation"
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
