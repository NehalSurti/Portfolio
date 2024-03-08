import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
    </main>
  );
}
