"use client";

import { useTranslations } from "next-intl";
import { Container } from "../Container";
import { Mountain, Landmark, Trees, Compass } from "lucide-react";

export const AboutKyrgyzstan = () => {
  const t = useTranslations("about");
  return (
    <section id="about" className="py-20 scroll-mt-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              {t("title")}
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
              {t("section_header")}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("section_body")}
            </p>
          </div>

          {/* LEFT SIDE - FEATURES */}
          <div className="grid grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="flex gap-3">
              <Mountain className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">{t("heritage_title")}</h4>
                <p className="text-sm text-gray-600">{t("heritage_desc")}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex gap-3">
              <Landmark className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">{t("culture_title")}</h4>
                <p className="text-sm text-gray-600">{t("culture_desc")}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex gap-3">
              <Trees className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">{t("canyon_title")}</h4>
                <p className="text-sm text-gray-600">{t("canyon_desc")}</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex gap-3">
              <Compass className="w-6 h-6 shrink-0 text-black" />
              <div>
                <h4 className="font-semibold">{t("adventure_title")}</h4>
                <p className="text-sm text-gray-600">{t("adventure_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
