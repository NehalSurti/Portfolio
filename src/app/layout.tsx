import "@/scss/index.scss";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import { Raleway, Fira_Code } from "next/font/google";
import BackToTopButton from "@/components/BackToTopButton";
import LoaderWrapper from "@/components/LoaderWrapper";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--raleway",
});
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fira-code",
});

export const metadata = {
  title: {
    default: "Nehal Surti",
    template: "Nehal Surti | %s",
  },
  description: "Nehal Surti Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${firaCode.variable}`}>
      <body>
        <div className="webpageContainer">
          <LoaderWrapper>
            <Navbar></Navbar>
            <SocialIcons></SocialIcons>
            {children}
            <Email></Email>
            <BackToTopButton></BackToTopButton>
          </LoaderWrapper>
        </div>
      </body>
    </html>
  );
}
