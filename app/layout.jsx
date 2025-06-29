import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Xunite - Where Developers Unite & Code Gets Weird! 🎪",
  description: "A cosmic playground where code meets creativity, bugs become features, and every developer gets their moment to shine! Join the Xunite community and add your own page to our digital circus!",
  keywords: "developer community, coding, programming, open source, collaboration, creativity, technology",
  openGraph: {
    title: "Xunite - Where Developers Unite & Code Gets Weird! 🎪",
    description: "A cosmic playground where code meets creativity, bugs become features, and every developer gets their moment to shine!",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
