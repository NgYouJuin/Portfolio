"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { profile } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  // No backend is needed: the form opens the visitor's email app with a pre-filled message.
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${from}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400";

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad">
      <SectionHeading
        id="contact-title"
        eyebrow="07 · Contact"
        title="Let's Connect"
        intro="I'm looking for Software Engineering internships between May 2027 and Jun 2028, and I'm happy to talk about cybersecurity roles too. If you're hiring or building something interesting, I'd love to hear from you."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-4">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="card card-hover flex items-center gap-4 p-5"
            >
              <Mail className="h-6 w-6 text-accent-400" aria-hidden="true" />
              <span>
                <span className="block text-xs text-slate-500">Email</span>
                <span className="text-white">{profile.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover flex items-center gap-4 p-5"
            >
              <LinkedinIcon className="h-6 w-6 text-accent-400" />
              <span>
                <span className="block text-xs text-slate-500">LinkedIn</span>
                <span className="text-white">linkedin.com/in/ngyoujuin</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover flex items-center gap-4 p-5"
            >
              <GithubIcon className="h-6 w-6 text-accent-400" />
              <span>
                <span className="block text-xs text-slate-500">GitHub</span>
                <span className="text-white">github.com/NgYouJuin</span>
              </span>
            </a>
          </li>
        </ul>

        <form onSubmit={onSubmit} className="card space-y-4 p-6">
          <div>
            <label htmlFor="c-name" className="text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              id="c-name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="c-email" className="text-sm font-medium text-slate-300">
              Your email
            </label>
            <input
              id="c-email"
              type="email"
              required
              autoComplete="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className={field}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="c-msg" className="text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="c-msg"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={field}
              placeholder="Tell me about the role or project"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            <Send className="h-4 w-4" aria-hidden="true" />
            Send via email
          </button>
        </form>
      </div>
    </section>
  );
}
