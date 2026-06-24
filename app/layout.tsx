import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ArchTech — IT Solutions & Consulting | Batangas City",
  description:
    "ArchTech is a full-service IT firm based in Batangas City, Philippines. We specialize in web development, software engineering, networking, cybersecurity, and IT consulting. Built Solid. Built Smart.",
  keywords: [
    "IT firm Batangas",
    "web development Philippines",
    "software development Batangas",
    "network setup Batangas City",
    "cybersecurity Philippines",
    "IT consulting Batangas",
    "ArchTech",
  ],
  authors: [{ name: "Charles", url: "https://archtech.ph" }],
  openGraph: {
    title: "ArchTech — IT Solutions & Consulting | Batangas City",
    description:
      "Full-service IT firm based in Batangas City. Web development, networking, software engineering, security, and consulting.",
    type: "website",
    locale: "en_PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-arch-dark text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
