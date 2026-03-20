import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://loucarron.dev"),
  title: "Lou Carron | Software Developer",
  description:
    "Software developer building clean, scalable systems across platform engineering, AI infrastructure, and full-stack applications.",
  openGraph: {
    title: "Lou Carron | Software Developer",
    description:
      "Explore Lou Carron's portfolio: platform systems, AI infrastructure, and production-minded software engineering.",
    url: "https://loucarron.dev",
    siteName: "Lou Carron",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lou Carron portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lou Carron | Software Developer",
    description:
      "Platform systems, AI infrastructure, and full-stack software engineering.",
    images: ["/opengraph-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};