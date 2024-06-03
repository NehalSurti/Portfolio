"use client";
import Button from "@/components/Button";
import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      className="contact"
      // id="contact"
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
      <h2 className="contact-title" id="contact">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I am currently seeking new opportunities and would love to hear from
        you. Whether you have a question, a project idea, or just want to say
        hello, feel free to reach out. I&apos;ll do my best to respond promptly!
      </p>
      <div className="contact-cta">
        <Button link="mailto:nehalsurti9998@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
