"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  // console.log("window.location.hash :", window.location.hash);
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
  //     if (hash === 'experience') {
  //       const element = document.getElementById(hash);
  //       console.log(element);
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

  const expereinces = [
    {
      name: "Rapidops",
      role: "Full Stack Developer",
      url: "https://www.rapidops.com",
      start: "January 2021",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "Youtube",
      role: "Content Creator",
      url: "https://www.youtube.com/kishansheth21",
      start: "April 2021",
      end: "Present",
      shortDescription: [
        "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
        "Over time, I have developed and shared over 50 projects using React on my channel.",
        "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
      ],
    },
    {
      name: "ACES",
      role: "President",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
        "Additionally, I secured sponsorships from reputable brands to support our events.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "ISTE",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Shashaan",
      role: "Founder",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2018",
      end: "November 2021",
      shortDescription: [
        "While still a student, I founded a web hosting company that offered affordable hosting services.",
        "With over 300 customers, the business thrived until I graduated and sold it to another company.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
