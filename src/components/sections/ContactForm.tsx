"use client";

import { useState } from "react";
import TopicDropdown from "@/components/TopicDropdown";

type Status = "idle" | "loading" | "success" | "error";

const TOPICS = [
  "General Inquiry",
  "Products & Services",
  "Partnership",
  "Careers",
  "Press",
  "Other",
];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const fieldClasses =
  "w-full border-b border-white/40 bg-transparent pb-2 text-base text-white placeholder:text-white/60 outline-none transition focus:border-white";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !isValidEmail(email.trim()) || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields with a valid email.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to send message.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 border-b border-white/40 pb-4 text-base font-medium text-white">
        <svg className="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0L3.296 9.21a1 1 0 111.42-1.42l3.996 3.996 6.55-6.55a1 1 0 011.42 0z"
            clipRule="evenodd"
          />
        </svg>
        Thanks — your message has been sent. We&rsquo;ll be in touch soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className={fieldClasses}
            />
          </div>

          <TopicDropdown
            options={TOPICS}
            value={topic}
            onChange={setTopic}
            placeholder="topic"
            fieldClassName={fieldClasses}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={7}
            placeholder="type your thoughts..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            className="w-full resize-none rounded-lg border border-white/40 bg-transparent p-4 text-base text-white placeholder:text-white/60 outline-none transition focus:border-white"
          />

          {status === "error" && (
            <p className="mt-4 text-sm font-medium text-red-300">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-12 inline-flex items-center justify-center gap-2 self-end rounded-full border-2 border-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-[#1E2B61] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
                Sending
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
