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
      image: "/project19.png",
      projectName: "Sommaire – AI PDF Summaries",
      projectLink: "https://sommaire-five.vercel.app/",
      projectDescription:
        "AI-powered SaaS that converts PDFs into concise summaries and reels using LangChain and Gemini. Includes secure uploads, Clerk auth, Stripe billing, and a scalable Neon DB backend.",
      projectTech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Clerk",
        "AWS S3",
        "LangChain",
        "Gemini API",
        "Neon DB (PostgreSQL)",
        "Stripe",
        "Vercel",
        "Framer Motion",
      ],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Sommaire",
        externalLink: "https://sommaire-five.vercel.app/",
      },
    },
    {
      image: "/project1.png",
      projectName: "Ecommerce App",
      projectLink:
        "https://ecommerce-git-main-nehal-surtis-projects.vercel.app",
      projectDescription:
        "Ecommerce web application using React, Node.js, MongoDB, and Stripe for payments.",
      projectTech: [
        "React",
        "React-Redux",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "Stripe",
        "Styled Components",
        "Firebase",
        "MongoDB Atlas",
        "Vercel",
      ],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Ecommerce-Server",
        externalLink:
          "https://ecommerce-git-main-nehal-surtis-projects.vercel.app",
      },
    },
    {
      image: "/project2.png",
      projectName: "Ecommerce Admin App",
      projectLink:
        "https://ecommerce-git-main-nehal-surtis-projects.vercel.app/admin/",
      projectDescription:
        "Application designed for managing user and product data for Ecommerce Website. It includes user and product lists, data grids, and forms for data addition and updates.",
      projectTech: [
        "React",
        "React-Redux",
        "Redux Toolkit",
        "Material UI",
        "Recharts",
        "Node.js",
        "Express",
        "Firebase",
        "MongoDB Atlas",
        "Vercel",
      ],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Ecommerce-Admin",
        externalLink:
          "https://ecommerce-git-main-nehal-surtis-projects.vercel.app/admin/",
      },
    },
    {
      image: "/project4.png",
      projectName: "TechWeb",
      projectLink: "https://tech-web-liard.vercel.app/",
      projectDescription:
        "The Next.js-built consultant agency website has NextAuth-powered authentication and reliable MongoDB data storage for user and post data.",
      projectTech: ["Next.js", "MongoDB", "NextAuth", "Vercel"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/TechWeb-Next.js",
        externalLink: "https://tech-web-liard.vercel.app/",
      },
    },
  ];

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="projects" ref={ref}>
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
                  <div className="project-info-top">
                    <p className="project-info-overline">Featured Project</p>
                    <Link href={projectLink} target="_blank">
                      <h3 className="project-info-title">{projectName}</h3>
                    </Link>
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
                  </div>
                  <div className="project-info-bottom">
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
              </motion.div>
            );
          }
        )}
      </div>
      <div className="projects-showProjects">
        <Link href="/projects" target="_blank">
          <button className="projects-showProjects-button">
            Show More Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
