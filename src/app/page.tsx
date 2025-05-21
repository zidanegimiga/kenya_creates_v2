import HeroSection    from './components/HeroSection'
import SectionTwo     from './components/SectionTwo'
import OurFilms       from './components/OurFilms'
import RotatingWords  from './components/RotatingWords'
import FilmMakers     from './components/FilmMakers'
import Partners       from './components/Partners'
import OurJourney     from './components/OurJourney/OurJourneyComponent'
import MarqueeSection from './components/MarqueeSection'
import RevealFooterSection from './components/RevealFooterSection'

export default function Home() {
  return (
    <main className=" w-full">
      <HeroSection />
      <SectionTwo />
      <OurFilms />
      <RotatingWords />
      <FilmMakers />
      <Partners />
      <OurJourney />
      <MarqueeSection />
      <RevealFooterSection footerHeight={300} />
    </main>
  )
}
