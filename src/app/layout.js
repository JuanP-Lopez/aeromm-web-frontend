import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./Providers";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AeroMailManagement",
  description: "Gestor de correos",
   icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
          <main>
            <Providers>
            {children}
            </Providers>
          </main>
      </body>
    </html>
  );
}
