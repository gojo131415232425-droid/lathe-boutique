import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";
import MobileNav from "@/components/layout/MobileNav";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";

export const metadata: Metadata = {
  title: "Lathe Boutique | Elegance in Every Drape | Sarees, Custom Dresses & Daily Wear",
  description: "Shop trending sarees, bridal Kanjeevarams, Instagram viral organza, customized sarees, bespoke dresses, daily wear, and offers under ₹199 at Lathe Boutique. Call/WhatsApp 9486230422.",
  keywords: "Lathe Boutique, sarees, kanjeevaram silk, custom sarees, customized dresses, daily wear kurtis, offers under 199, instagram fashion, ethnic wear online",
  openGraph: {
    title: "Lathe Boutique | Elegance in Every Drape",
    description: "Women's premium boutique fashion. Handwoven Sarees, Custom Tailoring, Daily Comfort, and Exclusive Deals.",
    url: "https://latheboutique.com",
    siteName: "Lathe Boutique",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Lathe Boutique - Elegance in every drape",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#290912] font-sans antialiased selection:bg-[#581125] selection:text-[#FAF7F2]">
        <TopBar />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
