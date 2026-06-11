import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";
import Providers from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata = {
  title: { default: "Thioro Group Sarlu — Conakry, Guinée", template: "%s | Thioro Group" },
  description: "Thioro Group Sarlu : équipements électriques de qualité et Eau Minérale Kouria, votre partenaire de confiance en Guinée.",
  keywords: ["équipements électriques Guinée", "eau minérale Kouriah", "câbles électriques Conakry", "Thioro Group"],
  openGraph: {
    title: "Thioro Group Sarlu",
    description: "Équipements électriques et Eau Minérale Kouria — Conakry, Guinée",
    locale: "fr_GN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-opensans bg-white text-foreground antialiased">
        <Providers>
          <NextTopLoader
            color="#0054A6"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            showSpinner={false}
          />
          {children}
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              style: { fontFamily: "var(--font-opensans)" },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
