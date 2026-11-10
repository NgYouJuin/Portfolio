import { Briefcase, ShieldCheck } from "lucide-react";
import { experiences } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="section-pad">
      <SectionHeading
        id="exp-title"
        eyebrow="03 · Experience"
        title="Professional Experience"
        intro="Software engineering at GovTech, and defensive cybersecurity during National Service."
      />
      <ol className="space-y-6">
        {experiences.map((e) => {
          const Icon = e.type === "Cybersecurity" ? ShieldCheck : Briefcase;
          return (
            <li key={e.org + e.role}>
              <article className="card p-6 sm:p-8">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                      <p className="text-accent-300">{e.org}</p>
                    </div>
                  </div>
                  <p className="font-mono text-sm text-slate-400 sm:text-right">{e.period}</p>
                </header>

                <p className="mt-5 text-slate-300">{e.summary}</p>

                <ul className="mt-4 space-y-2.5 text-slate-300">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies and tools">
                  {e.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg border-l-2 border-accent-400/60 bg-white/[0.03] px-4 py-3 text-sm italic text-slate-400">
                  <span className="not-italic font-semibold text-slate-300">What it gave me: </span>
                  {e.relevance}
                </p>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
