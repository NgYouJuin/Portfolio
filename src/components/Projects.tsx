import { ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon } from "./Icons";

const accents: Record<Project["accent"], string> = {
  cyan: "from-cyan-400/30 via-sky-500/10 to-transparent",
  blue: "from-blue-500/30 via-indigo-500/10 to-transparent",
  violet: "from-violet-500/25 via-sky-500/10 to-transparent",
};

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-accent-400">{label}</h4>
      <div className="mt-2 text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad">
      <SectionHeading
        id="projects-title"
        eyebrow="04 · Projects"
        title="Featured Projects"
        intro="Contributions listed under each project are my own work, kept separate from the overall team effort."
      />

      <ProjectCard project={featured} featured />

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {rest.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className="card card-hover overflow-hidden">
      <div
        aria-hidden="true"
        className={`h-24 bg-gradient-to-br ${accents[p.accent]} flex items-end p-5`}
      >
        <span className="font-mono text-xs text-slate-300/80">{p.period}</span>
      </div>
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs text-accent-300">{p.badge}</p>
        <h3 className={`mt-2 font-bold text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {p.name}
        </h3>
        <p className="mt-3 text-slate-300">{p.description}</p>

        <div className={`mt-6 grid gap-6 ${featured ? "lg:grid-cols-2" : ""}`}>
          <Block label="Problem">{p.problem}</Block>
          <Block label="Solution">
            <List items={p.solution} />
          </Block>
          <div className={featured ? "lg:col-span-2" : ""}>
            <Block label="My contributions">
              <List items={p.contributions} />
            </Block>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
          {p.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        {(p.github || p.demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2">
                <GithubIcon className="h-4 w-4" /> Repository
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
