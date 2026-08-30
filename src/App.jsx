import Hero from './components/Hero.jsx'
import MenuBoard from './components/MenuBoard.jsx'
import PhotoStrip from './components/PhotoStrip.jsx'
import VisitUs from './components/VisitUs.jsx'
import { shop } from './data/menu.js'

export default function App() {
  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to menu
      </a>
      <Hero />
      <main>
        <MenuBoard />
        <PhotoStrip />
        <VisitUs />
      </main>
      <footer className="bg-navy-deep py-8 text-center">
        <p className="font-board text-xs tracking-[0.3em] text-paper/40 uppercase">
          {shop.name} — {shop.address}
        </p>
      </footer>
    </>
  )
}
