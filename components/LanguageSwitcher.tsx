"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

const locales = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "kg", label: "KG" },
];

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1];

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="outline">
          {locales.find((l) => l.code === currentLocale)?.label ?? "Language"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-background min-w-[40px] p-1"
        align="center"
      >
        {locales.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
