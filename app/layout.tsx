import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// Adding Playfair Display for elegant serif headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thebeautycompany.com"),
  title: {
    default: "The Beauty Company | Lash Extensions in Northglenn & Westminster, CO",
    template: "%s | The Beauty Company",
  },
  description:
    "Premier lash extensions, microneedling, permanent makeup, and beauty treatments in Northglenn & Westminster, Colorado. 15+ years of experience. Book your appointment today.",
  keywords: [
    "lash extensions Northglenn",
    "lash extensions Westminster CO",
    "microneedling Colorado",
    "beauty treatments Northglenn",
    "lash artist Westminster",
    "volume lashes Colorado",
    "permanent makeup Northglenn",
    "microblading Colorado",
    "brow lamination Westminster",
    "eyelash extensions near me",
  ],
  authors: [{ name: "The Beauty Company" }],
  creator: "The Beauty Company",
  publisher: "The Beauty Company",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebeautycompany.com",
    siteName: "The Beauty Company",
    title: "The Beauty Company | Expert Lash Extensions in Northglenn & Westminster, CO",
    description:
      "Premier lash extensions, microneedling, permanent makeup, and beauty treatments. 15+ years of experience serving Colorado. Book your appointment today.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Beauty Company - Luxury Lash Extensions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Beauty Company | Expert Lash Extensions in Northglenn & Westminster, CO",
    description:
      "Premier lash extensions, microneedling, permanent makeup, and beauty treatments. 15+ years of experience serving Colorado.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.jpg" }, { url: "/apple-icon-180x180.jpg", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

// Updated viewport for better mobile experience
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7FE7E1",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "The Beauty Company",
              description:
                "Expert lash extensions, microneedling, and beauty treatments in Northglenn & Westminster, Colorado",
              url: "https://thebeautycompany.com",
              telephone: "+17204475863",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Northglenn",
                addressRegion: "CO",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                addressLocality: "Northglenn & Westminster, Colorado",
              },
              priceRange: "$$",
              servesCuisine: null,
              image: "https://thebeautycompany.com/images/og-image.jpg",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              sameAs: ["https://www.facebook.com/thebeautycompany", "https://www.instagram.com/thebeautycompany"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
