import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Perdices Tavi | Granja Cinegética en Granada",
  description:
    "Granja cinegética especializada en perdiz roja y machos de reclamo. Más de 16 años de experiencia en Andalucía y Murcia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="es">
  <body
    className={`${inter.variable} ${merriweather.variable} antialiased`}
  >
    <Header />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
  </body>
</html>
  );
}