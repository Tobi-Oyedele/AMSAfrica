import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // normal and bold
  variable: "--font-montserrat", // optional CSS variable
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "AMSAfrica",
  description:
    "The Association of Medical Schools in Africa was established in Ibadan in 1961 and formally inaugurated at the subsequent meeting in Kampala Uganda in December, 1963. The objectives of the Association is the advancement of medical education as the driver of effective health systems in Africa in all of its aspects.",
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
