import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TransitionEffect from "./TransitionEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hafiz Umair",
  icons: {
    icon: '/favicon.png', // this path assumes favicon.jpg is in public/
  },
  description: "I a'm a passionate web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TransitionEffect>
        {children}
        </TransitionEffect>
      </body>
    </html>
  );
}
