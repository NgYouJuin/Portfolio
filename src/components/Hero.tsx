import { ArrowDown, Download, MapPin, CalendarCheck } from "lucide-react";
import { profile, quickFacts } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black, transparent 70%)",
        }}
      />
      <div className="section-pad relative !pb-16 !pt-20 sm:!pt-28">
        <div className="animate-rise">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 text-xs text-accent-300">
            <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.availability}
          </p>
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
          <p className="mt-4 bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-lg font-semibold text-transparent sm:text-2xl">
            {profile.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
              View My Projects
            </a>
            <a href={profile.resumePath} download className="btn-secondary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download My Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {quickFacts.map((f) => (
            <div key={f.label} className="card p-4">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-white sm:text-base">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
