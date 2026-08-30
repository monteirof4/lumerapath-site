"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { submitLead as postLead } from "@/lib/leads";

type Status = "idle" | "submitting" | "success" | "error";

async function submitLead(type: string, form: HTMLFormElement): Promise<boolean> {
  const data = Object.fromEntries(new FormData(form).entries());
  return postLead({ type, ...data });
}

function SuccessState({
  heading,
  message,
}: {
  heading: string;
  message: string;
}) {
  return (
    <div className="rounded-[2rem] border border-gold-400/35 bg-white/80 p-8 text-center shadow-[0_32px_80px_-38px_rgb(15_28_54/0.5)]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/20">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12.5l5 5L20 6.5"
            stroke="#a97c26"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="font-display mt-6 text-4xl font-semibold text-navy-900">
        {heading}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
        {message}
      </p>
      <Link href="/" className="btn btn-navy mt-8">
        Back to the site
      </Link>
    </div>
  );
}

export default function ClarityCallForm() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitLead("clarity-call", e.currentTarget);
    setStatus(ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <SuccessState
          heading="Request received."
          message="Thank you for sharing where you are. We'll reach out shortly to schedule your Clarity Call, a no-pressure conversation about your next step."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-medium text-navy-900 underline-offset-4 hover:underline">
          ← Back to home
        </Link>
        <span className="overline-label">Private Fit Check</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-navy-900/10 bg-white/70 p-8 shadow-[0_30px_80px_-35px_rgb(15_28_54/0.45)] backdrop-blur-sm">
          <p className="overline-label">Private Fit Check</p>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            Book a Clarity Call
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            Tell us where the pressure is sitting right now. We will use this to
            make the call specific, useful, and honest about whether The Bridge is
            the right next step.
          </p>

          <div className="mt-8 rounded-2xl border border-gold-400/30 bg-gold-50/70 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
              What to expect
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
              <li className="flex gap-3"><span aria-hidden className="font-semibold text-gold-600">•</span><span>30-minute conversation</span></li>
              <li className="flex gap-3"><span aria-hidden className="font-semibold text-gold-600">•</span><span>Honest, no-pressure guidance</span></li>
              <li className="flex gap-3"><span aria-hidden className="font-semibold text-gold-600">•</span><span>Clear next-step recommendations</span></li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-navy-900/10 bg-cream p-8 shadow-[0_30px_80px_-35px_rgb(15_28_54/0.45)] sm:p-10">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="cc-first">
                  Full Name
                </label>
                <input
                  id="cc-first"
                  name="fullName"
                  required
                  className="field-input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="cc-email">
                  Email
                </label>
                <input
                  id="cc-email"
                  name="email"
                  type="email"
                  required
                  className="field-input"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div>
                <label className="field-label" htmlFor="cc-level">
                  Leadership Level
                </label>
                <select
                  id="cc-level"
                  name="leadershipLevel"
                  required
                  defaultValue=""
                  className="field-input"
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  <option>Manager</option>
                  <option>Director</option>
                  <option>VP</option>
                  <option>C-Suite</option>
                  <option>Founder</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="cc-decision">
                  Current Crossroads
                </label>
                <select
                  id="cc-decision"
                  name="decision"
                  required
                  defaultValue=""
                  className="field-input"
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  <option>Stay and lead differently</option>
                  <option>Prepare for a pivot</option>
                  <option>Recover after a layoff</option>
                  <option>Ask for more</option>
                  <option>Change direction</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="cc-pressure">
                What would make this call worth your time?
              </label>
              <textarea
                id="cc-pressure"
                name="pressure"
                rows={4}
                required
                className="field-input resize-none"
                placeholder="A decision, a pattern, or a pressure point you want to untangle..."
              />
            </div>

            <div className="grid gap-3 rounded-2xl border border-gold-400/25 bg-white/55 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-xs leading-relaxed text-ink-soft">
                Your details stay private. We only use them to prepare for this
                conversation and follow up about scheduling.
              </p>
              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-navy-900">
                <input
                  type="checkbox"
                  name="readyForCall"
                  value="Yes"
                  required
                  className="h-4 w-4 accent-gold-600"
                />
                I am open to a real conversation
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-gold w-full disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Request My Clarity Call"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-700">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
