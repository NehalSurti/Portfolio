"use client";
import Button from "@/components/Button";
import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
function Contact() {
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
  //   const hash = window.location.hash.split("#")[1];
  //   console.log("hash", hash);
  //   if (hash === "contact") {
  //     const element = document.getElementById(hash);
  //     console.log(element);
  //     if (element) {
  //       console.log("element.offsetTop : ", element.offsetTop);
  //       console.log("navbarHeight :", navbarHeight);
  //       // window.scrollBy(0, 100);
  //       const offset = element.offsetTop - 250;
  //       window.scrollTo({ top: offset, behavior: "smooth" });

  //       // element.style.transform = "translateX(80px) !important"
  //       // element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  //       // element.scrollTop += -120;
  //     }
  //   }
  // }, [window.location.hash]);

  return (
    <motion.div
      className="contact"
      id="contact"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:nehalsurti9998@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
