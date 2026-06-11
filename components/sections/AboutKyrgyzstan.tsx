import { Container } from "../Container";
import { Mountain, Landmark, Trees, Compass } from "lucide-react";

export const AboutKyrgyzstan = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              About Kyrgyzstan
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
              A Land of Mountains, Traditions <br />& Timeless Hospitality
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From snow-capped peaks to vast valleys, Kyrgyzstan is a land of
              breathtaking landscapes, nomadic heritage, and deep-rooted
              traditions. It offers a unique blend of untouched nature and
              authentic cultural experiences.
            </p>
          </div>

          {/* LEFT SIDE - FEATURES */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex gap-3">
              <Mountain className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">Nomadic Heritage</h4>
                <p className="text-sm text-gray-600">
                  Experience authentic nomadic way of life.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-3">
              <Landmark className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">Rich Culture</h4>
                <p className="text-sm text-gray-600">
                  Warm hospitality, traditional cuisine and crafts.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-3">
              <Trees className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">Skazka Canyon</h4>
                <p className="text-sm text-gray-600">
                  Breathtaking mountains, lakes and endless horizons.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-3">
              <Compass className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">Endless Adventures</h4>
                <p className="text-sm text-gray-600">
                  Exploration opportunities across wild nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
