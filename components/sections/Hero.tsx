import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center">
      {/* BACKGROUND BANNER */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.jpg"
          alt="Kyrgyzstan banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-xl text-left text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Discover the <br /> Land of Nomads
          </h1>

          <p className="mt-5 text-white/80 text-sm md:text-base">
            Experience the untouched beauty, rich culture, and warm hospitality
            of Kyrgyzstan
          </p>
        </div>
      </div>
    </section>
  );
};
