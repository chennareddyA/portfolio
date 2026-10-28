import { profile } from '../data/profile'

const platforms = [
  { label: 'Upwork', href: profile.links.upwork },
  { label: 'Fiverr', href: profile.links.fiverr },
  { label: 'LinkedIn', href: profile.links.linkedin },
  { label: 'GitHub', href: profile.links.github },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink text-canvas">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <h2
          id="contact-title"
          className="max-w-[18ch] font-display text-[2.4rem] leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-6xl"
        >
          Have a design to build or a bug to fix?
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg opacity-75">
          Send me the link or a short description. I reply within a day with questions, a quote and a delivery date.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block font-display text-2xl font-bold break-all underline decoration-select decoration-[3px] underline-offset-[6px] hover:decoration-canvas sm:text-4xl"
        >
          {profile.email}
        </a>
        <ul className="mt-12 flex flex-wrap gap-3">
          {platforms.map((p) => (
            <li key={p.label}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-lg border border-canvas/25 px-5 font-semibold hover:border-canvas"
              >
                {p.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-20 text-sm opacity-60">
          © {new Date().getFullYear()} {profile.name}, {profile.role}, {profile.location}
        </p>
      </div>
    </section>
  )
}
