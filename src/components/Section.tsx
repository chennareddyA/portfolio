import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  lead?: string
  children: ReactNode
}

export default function Section({ id, title, lead, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <h2
            id={`${id}-title`}
            className="font-display text-[2rem] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[2.75rem]"
          >
            {title}
          </h2>
          {lead && <p className="mt-4 text-muted">{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
