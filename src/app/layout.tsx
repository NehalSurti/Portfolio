import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
import "@/scss/index.scss";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import { Raleway, Fira_Code } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fira-code",
});

export const metadata: Metadata = {
  title: {
    default: "Next.js 14 Homepage",
    template: "%s | Next.js 14",
  },
  description: "Next.js app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${firaCode.variable}`}>
      <body
      // className={inter.className}
      >
        <Navbar></Navbar>
        <SocialIcons></SocialIcons>
        {children}
        <Email></Email>
      </body>
    </html>
  );
}
