import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lou Carron | Software Developer",
  description:
    "Portfolio of Lou Carron — software developer building platform-focused systems and products.",
  openGraph: {
    title: "Lou Carron | Software Developer",
    description:
      "Portfolio of Lou Carron — software developer building platform-focused systems and products.",
    url: "https://loucarron.dev",
    siteName: "Lou Carron",
    images: [
      {
        url: "https://loucarron.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lou Carron Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lou Carron | Software Developer",
    description:
      "Portfolio of Lou Carron — software developer building platform-focused systems and products.",
    images: ["https://loucarron.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}