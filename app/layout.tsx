import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GreenHome Real Estate",
  description: "Buy, sell, rent, and invest in premium properties with GreenHome Real Estate."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      forest: "#1B5E3A",
                      leaf: "#4CAF50",
                      mint: "#F7FAF8",
                      ink: "#1A2E35"
                    },
                    fontFamily: {
                      sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"]
                    },
                    boxShadow: {
                      soft: "0 18px 50px rgba(27, 94, 58, 0.12)"
                    }
                  }
                }
              };
            `
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}