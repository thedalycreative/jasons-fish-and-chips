import { useState } from 'react'
import { menu } from '../data/menu.js'
import Reveal from './Reveal.jsx'

const price = (n) => `$${n.toFixed(2).replace(/\.00$/, '')}`

const BUBBLES = ['12%', '28%', '55%', '73%', '88%']

// The signature: the shop-window letterboard menu.
export default function MenuBoard() {
  const [active, setActive] = useState(menu[0].id)
  const section = menu.find((m) => m.id === active)

  return (
    <section id="menu" className="bg-gradient-to-b from-paper via-gold/15 to-paper py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="font-board text-sm font-medium tracking-[0.4em] text-sauce uppercase">
            Straight from the window
          </p>
          <h2 className="font-sign mt-3 text-4xl text-navy sm:text-5xl">The Menu Board</h2>
        </Reveal>

        {/* category tabs — plastic letter strips */}
        <Reveal delay={100}>
          <div role="tablist" aria-label="Menu categories" className="mt-10 flex flex-wrap justify-center gap-2">
            {menu.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={m.id === active}
                onClick={() => setActive(m.id)}
                className={`rounded px-4 py-2 font-board text-sm font-semibold tracking-widest uppercase transition focus:outline-2 focus:outline-offset-2 focus:outline-sauce ${
                  m.id === active
                    ? 'bg-navy text-gold shadow-md'
                    : 'bg-navy/5 text-navy hover:bg-navy/10'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* the board */}
        <Reveal delay={200}>
          <div className="relative mt-8 overflow-hidden rounded-lg border-8 border-navy-deep bg-board shadow-2xl">
            {/* frying bubbles along the bottom */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24">
              {BUBBLES.map((left, i) => (
                <span
                  key={i}
                  className="bubble absolute bottom-2 h-2 w-2 rounded-full bg-gold/40"
                  style={{ left, animationDelay: `${i * 0.6}s` }}
                />
              ))}
            </div>

            <div className="px-6 py-10 sm:px-12">
              <div className="flex items-baseline justify-between border-b-2 border-gold/40 pb-3">
                <h3 className="font-board text-2xl font-semibold tracking-[0.2em] text-gold uppercase">
                  {section.label}
                </h3>
                <p className="hidden font-board text-xs tracking-widest text-paper/50 uppercase sm:block">
                  {section.note}
                </p>
              </div>

              <ul className="mt-6 space-y-1">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-baseline gap-3 rounded px-2 py-2.5 transition hover:bg-paper/5"
                  >
                    <span className="font-board text-lg font-medium tracking-wide text-paper">
                      {item.name}
                      {item.star && (
                        <span className="ml-2 text-sm text-gold" title="Local favourite" aria-label="Local favourite">
                          ★
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-paper/25 group-hover:border-gold/50"
                    />
                    <span className="font-board text-lg font-semibold text-gold tabular-nums">
                      {price(item.price)}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-center font-board text-xs tracking-[0.3em] text-paper/40 uppercase">
                ★ local favourite &nbsp;•&nbsp; all fish battered, crumbed or grilled
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
