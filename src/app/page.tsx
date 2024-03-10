import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Hero></Hero>
      <SocialIcons></SocialIcons>
      <Email></Email>
    </main>
  );
}
