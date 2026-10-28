import { skills } from '../data/profile'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Tools I use every day">
      <dl className="grid gap-x-12 gap-y-6 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.group} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line pb-6 sm:grid-cols-[11rem_1fr]">
            <dt className="font-semibold">{s.group}</dt>
            <dd className="text-muted">{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
