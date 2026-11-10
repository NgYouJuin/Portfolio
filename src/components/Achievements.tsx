import { achievements } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { NamedIcon } from "./Icons";

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="ach-title" className="section-pad">
      <SectionHeading id="ach-title" eyebrow="06 · Highlights" title="Achievements & Activities" />
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a) => (
          <article key={a.title} className="card card-hover flex gap-4 p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-400/10 text-accent-400">
              <NamedIcon name={a.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-white">{a.title}</h3>
              <p className="mt-0.5 font-mono text-xs text-slate-500">{a.meta}</p>
              <p className="mt-2 text-sm text-slate-300">{a.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
