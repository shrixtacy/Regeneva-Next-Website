import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saapro – Revolutionary Mobile Waste Management Solution",
  description:
    "Total waste disposal of all types of waste with unlimited capacity. Disposal technology for governments & municipalities, real estate developers, manufacturing & industrial sectors.",
  openGraph: {
    title: "Saapro – Revolutionary Mobile Waste Management Solution",
    description:
      "Total waste disposal of all types of waste with unlimited capacity. Disposal technology for governments & municipalities, real estate developers, manufacturing & industrial sectors.",
    url: "https://www.saapro.ae",
    siteName: "Saapro",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/6738e85481d888807bed36d9_badge.webp",
        width: 1200,
        height: 630,
        alt: "Saapro Mobile Waste Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saapro – Revolutionary Mobile Waste Management Solution",
    description:
      "Total waste disposal of all types of waste with unlimited capacity. Disposal technology for governments & municipalities.",
    images: [
      "https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/6738e85481d888807bed36d9_badge.webp",
    ],
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
