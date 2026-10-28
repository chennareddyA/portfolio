import { process } from '../data/profile'
import Section from './Section'

export default function Process() {
  return (
    <Section id="process" title="How working with me goes">
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {process.map((step, i) => (
          <li key={step.title} className="border-t-2 border-ink pt-5">
            <span className="font-display text-4xl font-bold text-select">{i + 1}</span>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{step.title}</h3>
            <p className="mt-2 text-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
