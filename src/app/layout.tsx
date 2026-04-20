import {
  Instrument_Serif,
  Playfair_Display,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "../config/site";
import { createMetadata } from "../lib/createMetadata";
import Footer from "../components/layout/footer";
import Container from "../components/common/container";
import { ThemeProvider } from "next-themes";
import { ThemeScript } from "../components/theme/theme-script";
import Head from "next/head";
import Script from "next/script";

export const metadata = createMetadata({
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  image: siteConfig.icons,
  path: "/",
});

const geistSans = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
      <Head>
        <ThemeScript />
        <Script defer src="https://cloud.umami.is/script.js" data-website-id="931178f2-0368-4b89-bc5f-42a484979afe" />
      </Head>
      
      <body
        className={`${geistSans.className} ${instrumentSerif.variable} ${playfairDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} flex min-h-screen flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ResizablePortfolioNavigation /> */}
          <Container>
            <div className="flex min-h-screen h-full flex-col">
              <main className="grow">{children}</main>
            </div>
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
