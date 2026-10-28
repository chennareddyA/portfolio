import { useEffect, useRef, useState } from 'react'
import { caseStudies, profile } from '../data/profile'

type Mode = 'design' | 'built'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** A selection handle on a corner of the design frame. */
function Handle({ className }: { className: string }) {
  return <span className={`absolute size-2.5 border border-select bg-surface ${className}`} />
}

/** A pink spacing measurement, like the redlines in Figma's inspect mode. */
function Redline({ label, className = '' }: { label: string; className?: string }) {
  return (
    <span className={`absolute flex flex-col items-center ${className}`}>
      <span className="h-px w-2 bg-redline" />
      <span className="w-px flex-1 bg-redline" />
      <span className="h-px w-2 bg-redline" />
      <span className="absolute top-1/2 left-2 -translate-y-1/2 rounded-sm bg-redline px-1 text-[0.7rem] leading-4 font-semibold text-white">
        {label}
      </span>
    </span>
  )
}

export default function Hero() {
  const [mode, setMode] = useState<Mode>(() => (prefersReducedMotion() ? 'built' : 'design'))
  const userChose = useRef(false)
  const design = mode === 'design'

  // One page-load moment: the annotated design frame "builds" itself.
  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = window.setTimeout(() => {
      if (!userChose.current) setMode('built')
    }, 1700)
    return () => window.clearTimeout(t)
  }, [])

  function choose(next: Mode) {
    userChose.current = true
    setMode(next)
  }

  const fade = `transition-opacity duration-500 ${design ? 'opacity-100' : 'opacity-0'}`

  return (
    <section id="top" aria-label="Introduction" className="canvas-grid">
      <div className="mx-auto max-w-6xl px-5 pt-10 pb-20 sm:px-8 md:pt-12 md:pb-28">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          {profile.available && (
            <p className="flex items-center gap-2 text-[0.95rem] text-muted">
              <span className="relative flex size-2.5">
                <span className="absolute inset-0 rounded-full bg-select opacity-40 motion-safe:animate-ping" />
                <span className="relative size-2.5 rounded-full bg-select" />
              </span>
              Available for new projects
            </p>
          )}
          <div
            role="group"
            aria-label="Show this section as"
            className="inline-flex rounded-lg border border-line bg-surface p-1 text-sm"
          >
            {(['design', 'built'] as const).map((m) => (
              <button
                key={m}
                type="button"
                aria-pressed={mode === m}
                onClick={() => choose(m)}
                className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                  mode === m ? 'bg-ink text-canvas' : 'text-muted hover:text-ink'
                }`}
              >
                {m === 'design' ? 'Design' : 'Built'}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Design-tool annotations: frame outline, handles, labels, redlines */}
          <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-10 ${fade}`}>
            <span className="absolute inset-0 border border-select" />
            <Handle className="-top-[5px] -left-[5px]" />
            <Handle className="-top-[5px] -right-[5px]" />
            <Handle className="-bottom-[5px] -left-[5px]" />
            <Handle className="-right-[5px] -bottom-[5px]" />
            <span className="absolute -top-7 left-0 rounded-sm bg-select px-1.5 text-xs leading-5 font-medium text-select-ink">
              Hero / Desktop
            </span>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 rounded-sm bg-select px-1.5 text-xs leading-5 font-medium text-select-ink">
              Fill × Hug
            </span>
            <Redline label="32" className="top-0 left-[12%] h-8 md:hidden" />
            <Redline label="64" className="top-0 left-[12%] hidden h-16 md:flex" />
          </div>

          <div
            className={`relative grid gap-12 border bg-surface px-6 py-8 transition-[border-radius,border-color] duration-500 md:px-16 md:py-16 lg:grid-cols-[minmax(0,1fr)_16rem] ${
              design ? 'rounded-none border-transparent' : 'rounded-[1.75rem] border-line'
            }`}
          >
            <div>
              <h1
                className={`max-w-[14ch] font-display text-[2.6rem] leading-[0.98] font-extrabold tracking-[-0.035em] outline-offset-8 transition-[outline-color] duration-500 sm:text-6xl md:text-[5rem] ${
                  design ? 'outline-1 outline-dashed outline-select' : 'outline-1 outline-dashed outline-transparent'
                }`}
              >
                {profile.headline}
              </h1>

              <div aria-hidden="true" className="relative h-8">
                <span className={fade}>
                  <Redline label="32" className="top-0 left-[12%] h-full" />
                </span>
              </div>

              <p className="max-w-[56ch] text-lg text-muted">{profile.intro}</p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={profile.links.upwork}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex h-12 items-center rounded-lg border px-6 font-semibold transition-colors duration-500 ${
                    design
                      ? 'border-dashed border-select bg-transparent text-ink'
                      : 'border-ink bg-ink text-canvas hover:opacity-90'
                  }`}
                >
                  Hire me on Upwork
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className={`inline-flex h-12 items-center rounded-lg border px-6 font-semibold transition-colors duration-500 ${
                    design ? 'border-dashed border-select text-ink' : 'border-line text-ink hover:border-ink'
                  }`}
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
      </div>
    </section>
  )
}
