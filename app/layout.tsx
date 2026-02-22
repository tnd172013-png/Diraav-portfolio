import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/lib/smooth-scroll";
import { ThemeProvider } from "@/contexts/ThemeContext";

const garamond = EB_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Diraav | Turning Ideas into Dream Projects",
  description:
    "Diraav is a marketing & consulting agency that blends strategy, storytelling, and soulful design to help brands grow with purpose.",
  keywords: [
    "marketing agency",
    "brand consulting",
    "web development",
    "brand strategy",
    "SEO",
    "Diraav",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('diraav-theme');if(t==='light'){document.documentElement.classList.add('theme-light');}})()`,
          }}
        />
      </head>
      <body className={`${garamond.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
