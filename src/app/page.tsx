import Image from "next/image";
import HeroSection from "./components/HeroSection";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  return (
    <main className="relative w-full">
      <HeroSection />
      <SectionTwo/>
    </main>
  );
}
