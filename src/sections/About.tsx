"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useTransition } from "react";
import { useInView, motion } from "framer-motion";
import TabButton from "../components/TabButton";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc list-disc-skill">
          <li className="list-disc-item list-disc-item-skill">JavaScript</li>
          <li className="list-disc-item list-disc-item-skill">React</li>
          <li className="list-disc-item list-disc-item-skill">Next.js</li>
          <li className="list-disc-item list-disc-item-skill">TypeScript</li>
          <li className="list-disc-item list-disc-item-skill">Redux Toolkit</li>
          <li className="list-disc-item list-disc-item-skill">Node.js</li>
          <li className="list-disc-item list-disc-item-skill">Express</li>
          <li className="list-disc-item list-disc-item-skill">PostgreSQL</li>
          <li className="list-disc-item list-disc-item-skill">MongoDb</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc">
          <li className="list-disc-item">
            MTech, Thermal Engineering<span>Nirma University</span>
          </li>
          <li className="list-disc-item">
            BE, Mechanical Engineering
            <span>Gujarat Technological University </span>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc">
          <li className="list-disc-item">
            Complete Python Developer <span>Zero To Mastery Academy </span>
          </li>
          <li className="list-disc-item">
            Complete SQL and Databases Bootcamp{" "}
            <span>Zero To Mastery Academy </span>
          </li>
        </ul>
      ),
    },
  ];

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
            Hello! My name is Nehal and I am passionate about creating digital
            content for the web. I have a strong grasp of web standards and best
            practices, and I am passionate about developing user-friendly and
            visually appealing web applications. As a collaborative team player,
            I am always eager to lend a helping hand and contribute effectively
            to any project. I am now seeking an opportunity to leverage my
            skills and experience to make a positive impact in the field of web
            development.
          </p>
          {/* <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
          </ul> */}
          <div className="tabButtonContainer">
            <div className="tabButtonContainerTitle">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="tabButtonContainerDetails">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
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
