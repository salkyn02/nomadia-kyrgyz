"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { MountainSnow } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TravelInquiryForm } from "../TravelInquiryForm";
import { Container } from "../Container";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Header = () => {
  const t = useTranslations("navigation");
  return (
    <header className="w-full bg-background sticky top-0 z-50 ">
      <Container className="flex items-center py-1">
        {/* Logo */}
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

        <div className="ml-auto flex items-center">
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium mr-10">
            <Link className="hover:underline underline-offset-4" href="#about">
              {t("about")}
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#experience"
            >
              {t("experiences")}
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#destinations"
            >
              {t("destinations")}
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="#contact"
            >
              {t("contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="cursor-pointer">Plan Your Trip</Button>
              </DialogTrigger>

              <DialogContent className="max-w-4xl">
                <DialogHeader className="sr-only">
                  <DialogTitle>Plan your trip</DialogTitle>
                </DialogHeader>
                <TravelInquiryForm />
              </DialogContent>
            </Dialog>

            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </header>
  );
};
