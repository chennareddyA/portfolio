import { services } from '../data/profile'
import Section from './Section'

export default function Services() {
  return (
    <Section
      id="services"
      title="What I can build for you"
      lead="Fixed-price projects or hourly work. Every project includes responsive layouts, clean TypeScript and a live preview link while I work."
    >
      <ul className="divide-y divide-line border-y border-line">
        {services.map((s) => (
          <li key={s.title} className="grid gap-4 py-8 md:grid-cols-[1.1fr_1.4fr_1fr] md:gap-10">
            <h3 className="font-display text-2xl leading-tight font-bold tracking-[-0.015em]">{s.title}</h3>
            <p className="text-muted">{s.description}</p>
            <div>
              <ul className="space-y-1 text-[0.95rem]">
                {s.youGet.map((item) => (
                  <li key={item} className="flex gap-2">
                    <svg viewBox="0 0 16 16" className="mt-1.5 size-3.5 shrink-0 text-select" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                      <path d="M3 8.5l3 3 7-7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted">{s.turnaround}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
