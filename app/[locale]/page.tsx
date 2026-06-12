import { AboutKyrgyzstan } from "@/components/sections/AboutKyrgyzstan";
import { Experiences } from "@/components/sections/Experiences";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TopDestinations } from "@/components/sections/TopDestinations";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <AboutKyrgyzstan />
      <TopDestinations />
      <Experiences />
      <Footer />
    </div>
  );
}
