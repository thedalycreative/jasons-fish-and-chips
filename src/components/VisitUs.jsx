import { shop } from '../data/menu.js'
import Reveal from './Reveal.jsx'

export default function VisitUs() {
  return (
    <section id="visit" className="bg-gradient-to-br from-navy via-navy to-navy-deep py-20 text-paper sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-2">
        <Reveal>
          <p className="font-board text-sm font-medium tracking-[0.4em] text-gold uppercase">Find us</p>
          <h2 className="font-sign mt-3 text-4xl sm:text-5xl">Come say g&rsquo;day</h2>
          <p className="mt-6 leading-relaxed text-paper/75">
            We&rsquo;re the little shop on Belgravia Street — look for the fish on the
            sign. Ring ahead and your order&rsquo;s hot and wrapped when you walk in.
          </p>
          <address className="mt-8 space-y-3 text-sm not-italic">
            <p className="flex items-start gap-3">
              <span aria-hidden="true">📍</span>
              <a
                href="https://maps.google.com/?q=381A+Belgravia+Street+Cloverdale+WA+6105"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-gold/50 underline-offset-4 transition hover:text-gold"
              >
                {shop.address}
              </a>
            </p>
            <p className="flex items-start gap-3">
              <span aria-hidden="true">📞</span>
              <a href={shop.phoneHref} className="underline decoration-gold/50 underline-offset-4 transition hover:text-gold">
                {shop.phone}
              </a>
            </p>
          </address>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-lg border-4 border-gold/60 bg-navy-deep p-8 shadow-xl">
            <h3 className="font-board text-xl font-semibold tracking-[0.2em] text-gold uppercase">
              Frying times
            </h3>
            <ul className="mt-6 space-y-4">
              {shop.hours.map((h) => (
                <li key={h.days} className="flex items-baseline gap-3">
                  <span className="font-board text-sm tracking-wide text-paper uppercase">{h.days}</span>
                  <span aria-hidden="true" className="flex-1 border-b border-dotted border-paper/25" />
                  <span className={`font-board text-sm tabular-nums ${h.time === 'Closed' ? 'text-sauce' : 'text-gold'}`}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-paper/50">
              Hours can shift on public holidays — give us a ring to be sure.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
