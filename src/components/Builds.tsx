import { builds } from '../data/profile'
import Section from './Section'

export default function Builds() {
  return (
    <Section
      id="projects"
      title="Open-source projects"
      lead="Projects with public code and live demos, built to show the kind of work clients ask for most."
    >
      <ul className="grid gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line sm:grid-cols-2">
        {builds.map((b) => {
          const ready = Boolean(b.live || b.code)
          return (
            <li key={b.title} className="flex flex-col bg-surface p-6 sm:p-8">
              <p className={`text-sm font-medium ${ready ? 'text-select' : 'text-muted'}`}>
                {ready ? 'Live' : 'In progress'}
              </p>
              <h3 className="mt-2 font-display text-2xl leading-tight font-bold tracking-[-0.015em]">{b.title}</h3>
              <p className="mt-3 text-muted">{b.description}</p>
              <p className="mt-4 text-sm">{b.stack.join(', ')}</p>
              {ready && (
                <div className="mt-auto flex gap-5 pt-6 text-[0.95rem] font-semibold">
                  {b.live && (
                    <a href={b.live} target="_blank" rel="noreferrer" className="underline decoration-line decoration-2 underline-offset-4 hover:decoration-select">
                      Open live demo
                    </a>
                  )}
                  {b.code && (
                    <a href={b.code} target="_blank" rel="noreferrer" className="underline decoration-line decoration-2 underline-offset-4 hover:decoration-select">
                      View code
                    </a>
                  )}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
