import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorLines from "@/components/CursorLines";
import { profile, siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${profile.name}`,
  },
  description: siteConfig.description,
  keywords: [
    ".NET Developer",
    "ASP.NET Core Developer",
    "Full Stack Developer",
    "C# Developer",
    "Entity Framework Core",
    "SQL Server Developer",
    "Next.js Developer",
    "React Developer",
    "E-commerce Developer",
    "Payment Gateway Integration",
    "Anil Kumar Dhakad",
  ],
  authors: [{ name: profile.name, url: siteConfig.url }],
  creator: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: `${profile.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteConfig.url,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "C#",
    "ASP.NET Core",
    "Entity Framework Core",
    "SQL Server",
    "REST APIs",
    "Next.js",
    "React",
    "E-commerce Development",
    "Payment Gateway Integration",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full scroll-pt-16 sm:scroll-pt-20`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <Script id="js-flag" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js')"}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <CursorLines />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
