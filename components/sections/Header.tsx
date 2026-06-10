"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { MountainSnow } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full border-b backdrop-blur-md sticky top-0 z-50">
      <div className="w-full px-6">
        <div className="max-w-6xl mx-auto flex items-center">
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

          {/* PUSH EVERYTHING RIGHT */}
          <div className="ml-auto flex items-center">
            {/* Nav */}
            <nav className="hidden md:flex items-center gap-12 text-sm font-medium mr-10">
              <Link
                className="hover:underline underline-offset-4"
                href="#about"
              >
                About
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href="#experience"
              >
                Experience
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href="#places"
              >
                Places
              </Link>
              <Link
                className="hover:underline underline-offset-4"
                href="#contact"
              >
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Button className="px-7 py-2 text-sm font-semibold">
                Plan Your Trip
              </Button>
            </div>

            {/* Mobile */}

            {/* <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
};
