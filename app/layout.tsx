import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wildmade Expedition | Future of Exploration",
  description: "Experience nature through bio-integrated protocols. Trekking, camping, and rafting redefined for the next generation.",
  keywords: "wildmade, expedition, futuristic, adventure, trekking, camping, rafting, neon, greenery, travel",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppBtn />
        </SmoothScroll>
      </body>
    </html>
  );
}
