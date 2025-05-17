import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SectionTwo from "./components/SectionTwo";
import OurFilms from "./components/OurFilms";

export default function Home() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <SectionTwo/>
      <OurFilms/>
      <SectionTwo/>
    </main>
  );
}
