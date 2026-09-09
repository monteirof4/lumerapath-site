"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function UnsubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xppzkdbj", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          reason,
          unsubscribe: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setEmail("");
      setName("");
      setReason("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl px-5 py-24 text-center lg:px-8">
        <div className="rounded-[2rem] border border-navy-900/10 bg-white/70 p-8 shadow-[0_30px_80px_-35px_rgb(15_28_54/0.45)] backdrop-blur-sm">
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
            Your request has been received.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            You&rsquo;ll be removed from our email list shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
      <div className="rounded-[2rem] border border-navy-900/10 bg-white/70 p-8 shadow-[0_30px_80px_-35px_rgb(15_28_54/0.45)] backdrop-blur-sm sm:p-10">
        <p className="overline-label">Email preferences</p>
        <h1 className="font-display mt-5 text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
          Unsubscribe from email updates
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
          We&rsquo;re sorry to see you go. Please confirm the email address you&rsquo;d
          like removed from our list.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="unsubscribe-name">
                Full name (optional)
              </label>
              <input
                id="unsubscribe-name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="field-input"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="unsubscribe-email">
                Email address
              </label>
              <input
                id="unsubscribe-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="field-input"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="field-label" htmlFor="unsubscribe-reason">
              Reason for unsubscribing (optional)
            </label>
            <textarea
              id="unsubscribe-reason"
              name="reason"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              rows={4}
              className="field-input min-h-[120px] resize-none"
              placeholder="We value your feedback. If you have a moment, tell us what you’d prefer instead."
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn btn-gold mt-2 w-full disabled:cursor-wait disabled:opacity-70"
          >
            {status === "submitting" ? "Submitting…" : "Unsubscribe"}
          </button>

          {status === "error" && (
            <p className="text-center text-sm text-red-700">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
