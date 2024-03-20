"use client";
import type { Metadata } from "next";
// import "./globals.css";
import "@/scss/index.scss";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import { Raleway, Fira_Code } from "next/font/google";
import { useState } from "react";
import HandleLoader from "@/sections/HandleLoader";
import Loader from "@/components/Loader";
import BackToTopButton from "@/components/BackToTopButton";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fira-code",
});

// export const metadata: Metadata = {
//   title: {
//     default: "Nehal Surti",
//     template: "Nehal Surti | %s",
//   },
//   description: "Next.js app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <html lang="en" className={`${raleway.variable} ${firaCode.variable}`}>
      <body>
        {isLoading && (
          <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        )}
        {showContent && (
          <>
            <Navbar></Navbar>
            <SocialIcons></SocialIcons>
            {/* <HandleLoader> */}
            {children}
            {/* </HandleLoader> */}
            <Email></Email>
            <BackToTopButton></BackToTopButton>
          </>
        )}
      </body>
    </html>
  );
}
