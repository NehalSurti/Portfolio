import Image from "next/image";
// import styles from "./page.module.css";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
    </main>
  );
}
