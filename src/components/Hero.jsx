import { shop } from '../data/menu.js'
import Awning from './Awning.jsx'
import heroImg from '../assets/hero-fish-chips.jpg'

const STEAM = [
  { left: '30%', delay: '0s' },
  { left: '46%', delay: '1.3s' },
  { left: '62%', delay: '2.6s' },
]

export default function Hero() {
  return (
    <header className="relative bg-navy text-paper">
      <Awning />

      {/* ticker */}
      <div className="overflow-hidden border-y border-gold/30 bg-navy-deep py-1.5">
        <div className="ticker flex w-max whitespace-nowrap font-board text-xs tracking-[0.3em] text-gold uppercase">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex">
              {Array.from({ length: 6 }).map((_, j) => (
                <span key={j} className="px-6">
                  Fresh fish daily &nbsp;•&nbsp; Cooked to order &nbsp;•&nbsp; {shop.address.split(',')[0]} &nbsp;•&nbsp; Call {shop.phone}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* photo backdrop with navy gradient wash */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy-deep/95"
        />

      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
        {/* rising steam */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {STEAM.map((s, i) => (
            <div
              key={i}
              className="steam absolute bottom-16 h-24 w-8 rounded-full bg-paper/10 blur-md"
              style={{ left: s.left, animationDelay: s.delay }}
            />
          ))}
        </div>

        <p className="neon font-board text-sm font-medium tracking-[0.5em] text-gold uppercase">
          Open — hot &amp; fresh
        </p>

        <h1 className="font-sign mt-6 text-5xl leading-none text-paper drop-shadow-[0_4px_0_rgba(0,0,0,0.35)] sm:text-7xl md:text-8xl">
          Jason&rsquo;s
          <span className="mt-2 block text-gold">Food To Go</span>
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold/50" />
          <span className="bob inline-block text-3xl" aria-hidden="true">🐟</span>
          <span className="h-px w-12 bg-gold/50" />
        </div>

        <p className="mt-4 font-board text-xl tracking-[0.25em] uppercase sm:text-2xl">
          Fish &amp; Chips — Cloverdale
        </p>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-paper/70">
          Snapper, Red Spot Emperor and Barra straight out of the fryer, wrapped
          hot the way a corner chippy should. Family run, in the heart of Cloverdale.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-full bg-gold px-8 py-3 font-board text-sm font-semibold tracking-widest text-navy uppercase transition hover:-translate-y-0.5 hover:bg-gold-bright hover:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-gold"
          >
            See the menu
          </a>
          <a
            href={shop.phoneHref}
            className="rounded-full border border-paper/40 px-8 py-3 font-board text-sm font-semibold tracking-widest text-paper uppercase transition hover:-translate-y-0.5 hover:border-gold hover:text-gold focus:outline-2 focus:outline-offset-2 focus:outline-gold"
          >
            Call to order
          </a>
        </div>
      </div>
      </div>
    </header>
  )
}
