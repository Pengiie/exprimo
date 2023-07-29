import "./globals.css";
import type { Metadata } from "next";
import { Raleway, Ubuntu } from "next/font/google";
import { ReactNode } from "react";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});
const ubuntuLight = Ubuntu({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-ubuntu-light",
});

export const metadata: Metadata = {
  title: "Nathan Sanchez",
  description: "A portfolio about a developer named Nathan Sanchez",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${ubuntu.variable} ${ubuntuLight.variable} font-body text-text dark:bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
