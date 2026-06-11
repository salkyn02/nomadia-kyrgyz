import Image from "next/image";
import { Container } from "../Container";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Kyrgyzstan banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </div>

      {/* CONTENT */}
      <Container className="relative z-10 w-full">
        <div className="max-w-md md:max-w-xl text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            Discover the <br className="hidden sm:block" /> Land of Nomads
          </h1>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            Experience the untouched beauty, rich culture, and warm hospitality
            of Kyrgyzstan
          </p>
        </div>
      </Container>
    </section>
  );
};
