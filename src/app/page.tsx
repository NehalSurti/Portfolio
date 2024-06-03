import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Nehal Surti</title>
      </Head>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}
