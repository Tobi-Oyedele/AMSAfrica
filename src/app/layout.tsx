import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amsafrica.org"),

  title: {
    default: "AMSAfrica | Association of Medical Schools in Africa",
    template: "%s | AMSAfrica",
  },
  description:
    "AMSAfrica advances medical education across Africa to strengthen health systems through collaboration, training, and research.",
  keywords:
    "medical schools Africa, medical education Africa, AMSAfrica, African medical schools, healthcare education, medical training Africa, health systems Africa",
  applicationName: "AMSAfrica",
  alternates: {
    canonical: "/", // becomes https://www.amsafrica.org/
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.amsafrica.org/",
    siteName: "AMSAfrica",
    title: "AMSAfrica | Association of Medical Schools in Africa",
    description:
      "Advancing medical education across Africa to strengthen health systems through collaboration, training, and research.",

    images: [
      {
        url: "/images/amsa-logoo.png",
        alt: "AMSAfrica - Association of Medical Schools in Africa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AMSAfrica | Association of Medical Schools in Africa",
    description:
      "Advancing medical education across Africa to strengthen health systems through collaboration, training, and research.",
    images: ["/images/amsa-logoo.png"],
  },

  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        <main className="">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
