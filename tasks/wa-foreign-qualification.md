# Washington Foreign Qualification - filing checklist

> Pre-filled materials for registering Caventia Inc. as a foreign corporation doing business in Washington. File within 30 days of "doing business" in WA. Atlas does NOT automate this; you (or a service) must do it separately.

## What this is

Caventia is incorporated in Delaware. You operate from Redmond, WA. Under RCW 23B.15, a Delaware corporation doing business in Washington must register as a "foreign profit corporation" with the Washington Secretary of State.

"Doing business" is interpreted broadly: maintaining an office, having employees, signing contracts, taking payments. Operating Caventia from your home in Redmond qualifies.

Filing within 30 days is best practice. Penalties for not filing accrue interest and can complicate future contract enforceability in WA courts.

## Where to file

**Washington Secretary of State Corporations Division.** Online filing:

```
https://ccfs.sos.wa.gov/#/
```

You can also mail or in-person file at the Olympia office, but online is faster (typically same-day processing).

## What to file

Form: **Application for Certificate of Authority for Foreign Profit Corporation** (online wizard auto-populates the underlying form).

Pre-filled values (verify each against your Atlas-issued Delaware certificate before submitting):

| Field | Value |
|---|---|
| Corporation name | Caventia Inc. |
| Name in WA (if different) | Same. (If WA already has a registered "Caventia Inc." you'd need a fictitious name. Check name availability on the WA SOS portal first.) |
| State of incorporation | Delaware |
| Date of incorporation | [TO FILL IN: ISO date on Delaware certificate] |
| Federal EIN | [TO FILL IN: EIN issued by IRS] |
| Period of duration | Perpetual |
| Purpose of doing business in WA | Operate a vertical AI governance platform |
| Principal office address | [TO FILL IN: Caventia's principal Delaware office, typically the registered agent's address] |
| Mailing address | 16015 Cleveland Street, Apt. #611, Redmond WA 98052 |
| Registered agent in WA | You (Ashish K. Saxena), 16015 Cleveland Street, Apt. #611, Redmond WA 98052. (You may also use a commercial registered agent like Northwest at $125/yr.) |
| Registered office in WA | Same as registered agent address |
| Names and addresses of directors/officers | Ashish K. Saxena, Sole Director and CEO, 16015 Cleveland Street, Apt. #611, Redmond WA 98052 |
| Effective date | Date of filing |

## Required attachments

- **Certificate of Existence** (also called "Certificate of Good Standing") from the Delaware Division of Corporations, issued within 60 days of the WA filing.
  - Order from Delaware: https://corp.delaware.gov - $50, expedited delivery available
  - Atlas can request this for you for an additional fee. You can also order directly.

## Filing fee

- **$200** standard filing fee (online or in-person)
- Optional: **$50** expedited processing (24-hour turnaround vs ~5 business days)

## Annual report (after filing)

Once registered, WA requires an annual report:

- Due **on the last day of your formation anniversary month** each year
- Cost: **$70**
- Lists current directors and officers, registered agent and principal office
- File online via the WA SOS portal

WA SOS sends a postcard reminder ~60 days before due date to the address on file. Set a calendar reminder anyway. Missing the annual report puts the entity into "delinquent" status and eventually triggers administrative dissolution.

## What you'll need on hand

Before starting the online filing:

- [ ] Delaware Certificate of Incorporation (PDF from Atlas)
- [ ] Delaware Certificate of Existence (separate order, $50)
- [ ] EIN confirmation letter from IRS (Atlas delivers this)
- [ ] Your SSN (for the directors-and-officers section)
- [ ] Credit card for the $200 filing fee
- [ ] About 30 minutes to complete the online wizard

## Optional: use a service

If you don't want to do this yourself:

- **Northwest Registered Agent** - $100 service fee + $200 state fee = $300 total
- **Stripe Atlas Foreign Qualification add-on** (check Atlas marketplace; not always available)
- **Cogency Global** - $250 service fee + $200 state fee = $450 total

DIY is recommended. The online wizard is straightforward and takes 30 minutes.

## Sequence relative to Delaware incorporation

Recommended order:

1. Atlas confirms Delaware certificate of incorporation
2. Atlas confirms EIN
3. Order Delaware Certificate of Existence ($50, 1-3 days)
4. File WA Certificate of Authority ($200, same-day if expedited)
5. Set calendar reminder for first WA annual report (one year out, last day of formation anniversary month)

Total elapsed time from step 1 to step 4: typically 1-2 weeks.

## After filing

- [ ] Save WA Certificate of Authority PDF in `Documents/Caventia/Corporate/`
- [ ] Update `lib/entity.ts` with the WA-registered indicator (optional; the file already centralizes entity info)
- [ ] Update bookkeeping software with the WA UBI (Unified Business Identifier) number issued at filing
- [ ] If you plan to open any retail or paid product to consumers, register for the WA B&O tax separately via Department of Revenue. Not required for pre-revenue.

## Common gotchas

- **Name conflict.** If "Caventia Inc." is already taken in WA, you must file under a fictitious name. Check the WA SOS Corporation name search BEFORE filing to confirm availability.
- **Address mismatch.** Your WA registered agent address must be a physical street address, not a PO Box. Your home address works.
- **Annual report drift.** WA annual reports are tied to formation anniversary month, not calendar year. Easy to forget. Set a recurring calendar reminder for one week before the due date.
- **Certificate of Existence freshness.** Delaware certificate must be issued within 60 days of the WA filing. Order it AFTER incorporation but no more than two months before you submit the WA application.
