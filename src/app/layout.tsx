import type { Metadata } from "next";
import localFont from "next/font/local";
import { Dancing_Script, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import organizationSchema from "@/lib/schema";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const amertha = localFont({
  src: "../../public/fonts/Amertha.ttf",
  variable: "--font-amertha",
});
const bylinerScript = localFont({
  src: "../../public/fonts/BylinerScript.otf",
  variable: "--font-byliner",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancingScript",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anglictinawelsan.sk"),

  title: {
    default: "Angličtina WELSAN | Individuálne online hodiny angličtiny",
    template: "%s | Angličtina WELSAN",
  },
  description:
    "Individuálne online hodiny angličtiny pre deti aj dospelých. Naučte sa hovoriť po anglicky bez stresu s lektorkou Silviou Welsan.",

  keywords: [
    "angličtina",
    "online angličtina",
    "doučovanie angličtiny",
    "individuálne hodiny",
    "angličtina online",
    "lektorka angličtiny",
    "Welsan",
    "Trnava",
    "angličtina pre dospelých",
    "angličtina pre deti",
  ],

  authors: [{ name: "Angličtina WELSAN" }],
  creator: "Angličtina WELSAN",
  publisher: "Angličtina WELSAN",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Angličtina WELSAN",
    description: "Individuálne online hodiny angličtiny pre deti aj dospelých.",
    url: "https://anglictinawelsan.sk",
    siteName: "Angličtina WELSAN",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angličtina WELSAN",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Angličtina WELSAN",
    description: "Individuálne online hodiny angličtiny pre deti aj dospelých.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dancingScript.variable} ${amertha.variable} ${montSerrat.variable} ${poppins.variable} ${bylinerScript.variable}`}
    >
      <body>
        <ModalProvider>
          <Navbar></Navbar>
          {children}
        </ModalProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
