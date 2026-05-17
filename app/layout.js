import { Orbitron, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";
import SchemaMarkup from "@/components/SchemaMarkup";
import { SITE } from "@/lib/site";

const display = Orbitron({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | GTA 6 News & Rumors Hub`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "GTA 6",
    "GTA VI",
    "Grand Theft Auto 6",
    "Rockstar Games",
    "Vice City",
    "Jason",
    "Lucia",
    "GTA 6 news",
    "GTA 6 release date",
    "GTA 6 leaks",
    "GTA 6 trailer",
  ],
  authors: [{ name: `${SITE.name} editorial` }],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr": "/fr",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} | GTA 6 News & Rumors`,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
    alternateLocale: ["fr_FR"],
    images: [
      {
        url: "/logo-lg.png",
        width: 2048,
        height: 2048,
        alt: "GTA6 Vault Logo",
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    image: "/logo-lg.png",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <SchemaMarkup />
      </head>
      <body className="min-h-full flex flex-col relative z-10">
        <SchemaMarkup />
        <VideoBackground />
        <Header />
        <main className="flex-1 relative z-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
