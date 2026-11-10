import { GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" aria-labelledby="edu-title" className="section-pad">
      <SectionHeading id="edu-title" eyebrow="05 · Education" title="Education" />
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {education.map((e, i) => (
          <li key={e.school} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-[31px] top-6 h-3 w-3 rounded-full ring-4 ring-ink-950 sm:-left-[39px] ${
                i === 0 ? "bg-accent-400" : "bg-slate-600"
              }`}
            />
            <article className="card p-6">
              <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{e.programme}</h3>
                    <p className="text-accent-300">{e.school}</p>
                  </div>
                </div>
                <div className="font-mono text-sm text-slate-400 sm:text-right">
                  <p>{e.period}</p>
                  {e.detail && <p className="text-slate-300">{e.detail}</p>}
                </div>
              </header>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Relevant modules">
                {e.modules.map((m) => (
                  <li key={m} className="tag">
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
