"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  // useEffect(() => {
  //   // Check if URL contains a hash (#) and scroll to the target element
  //   // if (window.location.hash) {
  //   //   const element = document.querySelector(window.location.hash);
  //   //   if (element) {
  //   //     element.scrollIntoView({ behavior: 'smooth' });
  //   //   }
  //   // }
  //   const navbarHeight = 80;
  //     const hash = window.location.hash.split('#')[1];
  //     console.log("hash",hash);
  //     if (hash === 'about') {
  //       const element = document.getElementById(hash);
  //       if (element) {
  //         console.log("element.offsetTop : ",element.offsetTop);
  //         console.log("navbarHeight :",navbarHeight);
  //         // window.scrollBy(0, 100);
  //         const offset = element.offsetTop - 250;
  //         window.scrollTo({ top: offset, behavior: 'smooth'});
          
  //         // element.style.transform = "translateX(80px) !important"
  //         // element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  //         // element.scrollTop += -120;
  //       }
  //     }
  // }, [window.location.hash]);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      ref={ref}
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Kishan, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2016 when I created my first project called Lavish, a
            social media app built using React and Node.js.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://rapidops.com" className="link" target="_blank">
              Rapidops.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my YouTube channel, where I demonstrate how to build
            full-stack applications.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Elasticsearch</li>
            <li className="about-grid-info-list-item">Kibana</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
