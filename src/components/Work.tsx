import { caseStudies } from '../data/profile'
import Section from './Section'

export default function Work() {
  return (
    <Section
      id="work"
      title="Production work"
      lead="Apps I built as a frontend developer at my current company. Client names and source code are confidential, so here is what each one does and what I built. I am happy to walk through the architecture on a call."
    >
      <div className="space-y-6">
        {caseStudies.map((c) => (
          <article
            key={c.title}
            className="grid gap-8 rounded-[1.75rem] border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14"
          >
            <div>
              <p className="text-sm text-muted">{c.kind}</p>
              <h3 className="mt-2 font-display text-[1.75rem] leading-[1.1] font-bold tracking-[-0.02em] sm:text-3xl">
                {c.title}
              </h3>
              <p className="mt-4 text-muted">{c.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {c.stack.map((t) => (
                  <li key={t} className="rounded-md border border-line px-2.5 py-1 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">What I built</h4>
              <ul className="space-y-3">
                {c.built.map((b) => (
                  <li key={b} className="border-l-2 border-select pl-4 leading-snug">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
