"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

function ProjectsList() {
  const projectsData = [
    {
      image: "/project5.png",
      projectName: "Worthwhile Fintech",
      projectLink: "https://worthwhilefintech.com/",
      projectDescription:
        "Responsive website for a fintech using React for the front-end and Django for the back-end, deployed on cPanel.",
      projectTech: ["React", "Django", "cPanel"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Worthwhile-Fintech",
        externalLink: "https://worthwhilefintech.com/",
      },
    },
    {
      image: "/project18.png",
      projectName: "Smart Brain - Face Detection App",
      projectLink: "https://smart-brain-nu-seven.vercel.app/",
      projectDescription:
        "A face recognition web application that leverages the Clarifai Face Detection API to identify and highlight face in an image submitted via URL.",
      projectTech: [
        "React",
        "Styled Components",
        "React Testing Library",
        "Node.js",
        "Express",
        "Clarifai API",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "yup",
        "Vercel",
      ],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/SmartBrain-Server",
        externalLink: "https://smart-brain-nu-seven.vercel.app/",
      },
    },
    {
      image: "/project6.png",
      projectName: "Notes App",
      projectLink: "https://notes-app-peach-one.vercel.app/",
      projectDescription:
        "Full-stack note-taking application using tools like TypeScript, React for Frontend and Node.js, Express & Mongoose for Backend with data being stored in MongoDB Atlas. Incorporated necessary features such as note creation, editing, and deletion.",
      projectTech: [
        "React",
        "Typescript",
        "Node.js",
        "Express",
        "Mongoose",
        "MongoDB Atlas",
        "Vercel",
      ],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Notes-App-Backend",
        externalLink: "https://notes-app-peach-one.vercel.app/",
      },
    },
    {
      image: "/project7.png",
      projectName: "Retro Design",
      projectLink: "https://nehalsurti.github.io/Retro-Design-Website/",
      projectDescription:
        "A captivating website with a retro feel that makes use of HTML, CSS, and JavaScript, enhanced by the use of retro color palettes and funky typography. This takes you back in time.",
      projectTech: ["HTML", "CSS", "JavaScript", "GSAP", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Retro-Design-Website",
        externalLink: "https://nehalsurti.github.io/Retro-Design-Website/",
      },
    },
    {
      image: "/project8.png",
      projectName: "Contact App",
      projectLink: "https://nehalsurti.github.io/Contact-App-React/",
      projectDescription:
        "React and Chakra UI were used to create a dynamic contact application, which was supported by Firebase's real-time database. It provides basic features like contact creation, editing, and deletion for a streamlined user experience.",
      projectTech: ["React", "Chakra UI", "Firebase", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Contact-App-React/tree/main",
        externalLink: "https://nehalsurti.github.io/Contact-App-React/",
      },
    },
    {
      image: "/project9.png",
      projectName: "Tic-Tac-Toe",
      projectLink: "https://nehalsurti.github.io/Tic-Tac-Toe-React/",
      projectDescription:
        "A tic-tac-toe game app made using React and leveraging state management with React Redux. Used indexing to track the board's state, ensuring smooth gameplay.",
      projectTech: [
        "React",
        "React-Redux",
        "Redux Toolkit",
        "Styled-components",
        "GitHub Pages",
      ],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Tic-Tac-Toe-React",
        externalLink: "https://nehalsurti.github.io/Tic-Tac-Toe-React/",
      },
    },
    {
      image: "/project10.png",
      projectName: "Image Search App",
      projectLink: "https://nehalsurti.github.io/Image-Search-App/",
      projectDescription:
        "Image search app that lets you search for any desired image. Enter your search query and receive results accompanied by a description.  Using the Unsplash API, the app fetches up to 1000 unique and non-repetitive images.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Image-Search-App",
        externalLink: "https://nehalsurti.github.io/Image-Search-App/",
      },
    },
    {
      image: "/project11.png",
      projectName: "Random Color Generator",
      projectLink: "https://nehalsurti.github.io/Random-Color-Generator/",
      projectDescription:
        "An App that generates multiple random colors and codes with JavaScript. With each page refresh, up to 30 color containers display randomly changing colors and corresponding codes.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Random-Color-Generator",
        externalLink: "https://nehalsurti.github.io/Random-Color-Generator/",
      },
    },
    {
      image: "/project12.png",
      projectName: "Background Generator",
      projectLink: "https://nehalsurti.github.io/Background-Generator/",
      projectDescription:
        "An interactive background generator that allows users to test and see live changes of color gradient and tilted direction. If done, simply copy the CSS code.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Background-Generator",
        externalLink: "https://nehalsurti.github.io/Background-Generator/",
      },
    },
    {
      image: "/project13.png",
      projectName: "Random Password Generator",
      projectLink: "https://nehalsurti.github.io/Random-Password-Generator/",
      projectDescription:
        "Random password generator with a copy icon and a button to generate random password. A notification indicating the successful copying of the password can be seen by users when they use the given icon.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Random-Password-Generator",
        externalLink: "https://nehalsurti.github.io/Random-Password-Generator/",
      },
    },
    {
      image: "/project14.png",
      projectName: "Analogue Clock",
      projectLink: "https://nehalsurti.github.io/Analogue-Clock/",
      projectDescription:
        "An analog clock which will dynamically display the current time based on the user's browser. Utilizing JavaScript, the current time will be converted into degrees to accurately position the hour, minute, and second hands on the clock face.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Analogue-Clock",
        externalLink: "https://nehalsurti.github.io/Analogue-Clock/",
      },
    },
    {
      image: "/project15.png",
      projectName: "New Year Countdown",
      projectLink: "https://nehalsurti.github.io/New-Year-Countdown/",
      projectDescription:
        "Countdown timer for the New Year's countdown of 2025 generates numbers dynamically and pulls the current date and time from the user's device using JavaScript.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/New-Year-Countdown",
        externalLink: "https://nehalsurti.github.io/New-Year-Countdown/",
      },
    },
    {
      image: "/project16.png",
      projectName: "Pomodoro Timer",
      projectLink: "https://nehalsurti.github.io/Pomodoro-Timer/",
      projectDescription:
        "Pomodoro timer includes a countdown clock and three buttons - start, stop, and reset. Clicking start initiates a 25-minute countdown, which can be paused with the stop button and resumed with start. An alert notifies when the timer ends.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Pomodoro-Timer",
        externalLink: "https://nehalsurti.github.io/Pomodoro-Timer/",
      },
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.ul
      className="projects-grid"
      variants={container}
      initial="hidden"
      animate="show"
    >
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
            <motion.li key={projectName} variants={item}>
              <div className="project-container">
                <div className="project-image-overlay"></div>
                <div className="project-container-upper">
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                  <div className="project-info">
                    <Link href={projectLink} target="_blank">
                      <h2 className="project-info-title">{projectName}</h2>
                    </Link>
                    <p className="project-info-description">
                      {projectDescription}
                    </p>
                  </div>
                </div>
                <div className="project-container-lower">
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
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.li>
          );
        }
      )}
    </motion.ul>
  );
}

export default ProjectsList;
