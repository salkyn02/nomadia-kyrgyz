import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const geist = Geist({
  subsets: ["latin"],
  // variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const isValidLocale = routing.locales.some((l) => l === locale);

  if (!isValidLocale) notFound();

  const messages = await getMessages({ locale });

  const className = cn("min-h-full w-screen flex flex-col", geist.variable);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className={className}>{children}</div>
    </NextIntlClientProvider>
  );
}
