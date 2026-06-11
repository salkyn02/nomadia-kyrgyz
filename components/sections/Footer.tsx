import Image from "next/image";
import Link from "next/link";
import { MountainSnow, MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Kyrgyzstan landscape"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-5 md:w-1/2">
            {/* Logo (same as header) */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <MountainSnow className="w-8 h-8 md:w-7 md:h-7 lg:w-8 lg:h-8" />

              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest">
                  NOMADIA
                </span>
                <span className="text-[10px] md:text-xs tracking-[0.35em]">
                  KYRGYZ
                </span>
              </div>
            </Link>

            <p className="text-white/80 max-w-sm">
              Your journey to the heart of <br /> Kyrgyzstan begins here.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="WhatsApp">
                <FaWhatsapp className="w-5 h-5 hover:text-primary transition" />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram className="w-5 h-5 hover:text-primary transition" />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF className="w-5 h-5 hover:text-primary transition" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-5 md:w-1/2 md:items-end">
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="flex flex-col gap-4 text-white/80 md:items-end">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bishkek, Kyrgyzstan</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>email@address.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+996 XXX XXX XXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-white/70">
          © 2026 NOMADIA Kyrgyz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
