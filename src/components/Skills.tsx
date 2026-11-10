import { skillGroups } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { NamedIcon } from "./Icons";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad">
      <SectionHeading
        id="skills-title"
        eyebrow="02 · Skills"
        title="Technical Skills"
        intro="Grouped by area. Every item is something I have used in coursework, internships, National Service or projects."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <article key={g.title} className="card card-hover p-6">
            <h3 className="flex items-center gap-3 text-base font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-400/10 text-accent-400">
                <NamedIcon name={g.icon} className="h-5 w-5" />
              </span>
              {g.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
