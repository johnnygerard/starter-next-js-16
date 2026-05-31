import "@/app/globals.css";
import { clsx } from "clsx";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { FC, ReactNode } from "react";

const sansFont = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const monoFont = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Next.js 16 Starter";
const TITLE = SITE_NAME;
const DESCRIPTION = "Minimal Next.js 16 starter template.";

export const metadata: Metadata = {
  metadataBase: new URL("https://starter-next-js-16.vercel.app"),
  icons: ["dark", "light"].map((theme) => ({
    media: `(prefers-color-scheme: ${theme})`,
    type: "image/svg+xml",
    url: `/images/favicon-${theme}.svg`,
  })),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => (
  <html className={clsx(sansFont.variable, monoFont.variable)} lang="en-US">
    <body>{children}</body>
  </html>
);

export default RootLayout;
