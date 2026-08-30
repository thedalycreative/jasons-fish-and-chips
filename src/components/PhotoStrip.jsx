import Reveal from './Reveal.jsx'
import batteredFish from '../assets/battered-fish.jpg'
import seafoodBasket from '../assets/seafood-basket.jpg'
import heroImg from '../assets/hero-fish-chips.jpg'

const PHOTOS = [
  { src: batteredFish, alt: 'Golden battered fish with chips and lemon', caption: 'Battered fresh to order' },
  { src: heroImg, alt: 'Fish and chips takeaway pack with calamari rings', caption: 'Wrapped hot to go' },
  { src: seafoodBasket, alt: 'Seafood basket with chips, coleslaw and dipping sauce', caption: 'Baskets for the crew' },
]

// Polaroid-style photo strip between the menu and the visit section.
export default function PhotoStrip() {
  return (
    <section aria-label="Photos of our food" className="bg-gradient-to-b from-paper to-gold/25 pb-20 sm:pb-28">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 sm:grid-cols-3">
        {PHOTOS.map((p, i) => (
          <Reveal key={p.caption} delay={i * 120}>
            <figure
              className={`rounded-sm bg-white p-3 pb-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                i % 2 === 0 ? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]'
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
              <figcaption className="mt-3 text-center font-board text-sm tracking-widest text-navy/70 uppercase">
                {p.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
