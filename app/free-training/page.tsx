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

export default function FreeTrainingPage() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const ok = await submitLead("free-training", e.currentTarget);
    setStatus(ok ? "success" : "error");
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-4xl px-5 py-24 lg:px-8">
        <SuccessState
          heading="You're on the list."
          message="Watch your inbox, we'll send you the details for the next free masterclass. We can't wait to meet you."
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Link href="/" className="text-sm font-medium text-navy-900 underline-offset-4 hover:underline">
          ← Back to home
        </Link>
        <span className="overline-label">Free Masterclass</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-navy-900/10 bg-white/70 p-8 shadow-[0_30px_80px_-35px_rgb(15_28_54/0.45)] backdrop-blur-sm">
          <p className="overline-label">The Moment of Choice</p>
          <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            You know what needs to change.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-900">
            So why do you keep falling back into the same patterns?
          </p>

          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Join this complimentary masterclass and discover what happens in the
            space between awareness and transformation, and why knowing what needs
            to change is not the same as becoming the woman who can live it.
          </p>

          <div className="mt-8 rounded-2xl border border-gold-400/30 bg-gold-50/70 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
              In this free 90-minute masterclass, you&rsquo;ll discover:
            </p>

            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink">
              {[
                "Why awareness alone doesn’t create lasting change.",
                "What keeps you repeating patterns you already understand.",
                "How to recognize the moment when a different choice becomes possible.",
                "How conscious choices build self-trust and a new way of leading.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 font-semibold text-gold-600" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-navy-900/10 bg-cream p-8 shadow-[0_30px_80px_-35px_rgb(15_28_54/0.45)] sm:p-10">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="ft-first">
                  Full Name
                </label>
                <input
                  id="ft-first"
                  name="fullName"
                  required
                  className="field-input"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="ft-email">
                  Email
                </label>
                <input
                  id="ft-email"
                  name="email"
                  type="email"
                  required
                  className="field-input"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[130px_1fr]">
              <div>
                <label className="field-label" htmlFor="ft-code">
                  Code
                </label>
                <input
                  id="ft-code"
                  name="countryCode"
                  className="field-input"
                  placeholder="+1"
                />
              </div>
              <div>
                <label className="field-label" htmlFor="ft-phone">
                  Phone
                </label>
                <input
                  id="ft-phone"
                  name="phone"
                  type="tel"
                  className="field-input"
                  placeholder="555 000 0000"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gold-400/35 bg-white/70 px-4 py-3 text-sm font-medium text-navy-900 shadow-[0_12px_28px_-22px_rgb(18_32_63/0.4)]">
                <input
                  type="radio"
                  name="trainingDate"
                  value="09/03/2026 6PM EST"
                  required
                  className="h-4 w-4 accent-gold-600"
                />
                09/03/2026 at 6pm EST
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gold-400/35 bg-white/70 px-4 py-3 text-sm font-medium text-navy-900 shadow-[0_12px_28px_-22px_rgb(18_32_63/0.4)]">
                <input
                  type="radio"
                  name="trainingDate"
                  value="09/10/2026 1PM EST"
                  className="h-4 w-4 accent-gold-600"
                />
                09/10/2026 at 1pm EST
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="btn btn-gold mt-2 w-full disabled:cursor-wait disabled:opacity-70"
            >
              {status === "submitting"
                ? "Saving your seat…"
                : "Register for the Next Free Masterclass"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm text-red-700">
                Something went wrong, please try again.
              </p>
            )}
          </form>

          <p className="mt-6 text-center text-xs leading-relaxed text-ink-soft/80">
            We host a free masterclass every month so you can experience our work,
            and get to know Allye + Amanda, before deciding what&rsquo;s next. No
            pressure, no pitch. Just 90 minutes of real work that moves you
            forward. We respect your privacy and will never share your
            information.
          </p>
        </div>
      </div>
    </div>
  );
}
