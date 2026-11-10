import { about } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <SectionHeading id="about-title" eyebrow="01 · About" title="About Me" />
      <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg lg:max-w-3xl">
        {about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
