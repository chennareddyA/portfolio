import { caseStudies, profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="canvas-grid">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 md:pt-12 md:pb-28">
        {profile.available && (
          <p className="mb-10 flex items-center gap-2 text-[0.95rem] text-muted">
            <span className="relative flex size-2.5">
              <span className="absolute inset-0 rounded-full bg-select opacity-40 motion-safe:animate-ping" />
              <span className="relative size-2.5 rounded-full bg-select" />
            </span>
            Available for new projects
          </p>
        )}

        <div className="grid gap-12 rounded-[1.75rem] border border-line bg-surface px-6 py-8 md:px-16 md:py-16 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div>
            <h1 className="max-w-[14ch] font-display text-[2.6rem] leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-6xl md:text-[5rem]">
              {profile.headline}
            </h1>

            <p className="mt-8 max-w-[56ch] text-lg text-muted">{profile.intro}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={profile.links.upwork}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center rounded-lg border border-ink bg-ink px-6 font-semibold text-canvas transition-opacity hover:opacity-90"
              >
                Hire me on Upwork
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center rounded-lg border border-line px-6 font-semibold text-ink transition-colors hover:border-ink"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="self-end">
            <p className="mb-3 text-sm font-semibold">Recently shipped</p>
            <ul className="space-y-3 border-l border-line pl-4">
              {caseStudies.map((c) => (
                <li key={c.title}>
                  <a href="#work" className="block text-[0.95rem] leading-snug hover:text-select">
                    {c.title}
                  </a>
                  <span className="text-sm text-muted">{c.stack.slice(0, 2).join(', ')}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
