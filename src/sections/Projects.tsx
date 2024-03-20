"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useInView, motion } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Pokedex",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon, including their evolution levels and details. You can compare multiple Pokemon using a queue, and add them to your personal list using Firebase's Firestore database.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "PokeApi",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project2.png",
      projectName: "Realtime Chat App",
      projectLink: "https://netlify.com",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React. It has 300+ stars on GitHub and over 180k views on YouTube.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/project3.png",
      projectName: "Netflix App",
      projectLink: "https://netlify.com",
      projectDescription:
        "I made a Netflix copy with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];

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
  //     if (hash === 'work') {
  //       const element = document.getElementById(hash);
  //       console.log("element:",element);
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
  // }, [window.location.hash, isInView]);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="projects"  ref={ref}>
      <motion.div
        className="title"
        id="work"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
