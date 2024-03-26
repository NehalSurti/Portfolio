import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function Productspage() {
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
    {
      image: "/project4.png",
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
      image: "/project5.png",
      projectName: "Tabs Section",
      projectLink: "https://nehalsurti.github.io/Tabs-Section/",
      projectDescription:
        "Created a tab section with several tabs, each with a title and text. The title and text displayed will change dynamically when clicked on a tab. Every tab will also have a hover effect applied to it. The content will be updated dynamically using JavaScript.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Tabs-Section",
        externalLink: "https://nehalsurti.github.io/Tabs-Section/",
      },
    },
    {
      image: "/project6.png",
      projectName: "Mouse Position Tracker",
      projectLink: "https://nehalsurti.github.io/Mouse-Position-Tracker/",
      projectDescription:
        "Created a mouse event tracker that shows the mouse's X and Y positions as it goes across the screen. Mouse movement is tracked in the browser by implementing the event listener technique in JavaScript.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Mouse-Position-Tracker",
        externalLink: "https://nehalsurti.github.io/Mouse-Position-Tracker/",
      },
    },
    {
      image: "/project7.png",
      projectName: "Notes App",
      projectLink: "https://notes-app-peach-one.vercel.app/",
      projectDescription:
        "Full-stack note-taking application using tools like TypeScript, React for Frontend and Node.js, Express & Mongoose for Backend with data being stored in MongoDB Atlas. Incorporated necessary features such as note creation, editing, and deletion.",
      projectTech: [
        "React",
        "Typescript",
        "Node",
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
      image: "/project8.png",
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
      image: "/project9.png",
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
      image: "/project10.png",
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
      image: "/project11.png",
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
      image: "/project12.png",
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
      image: "/project13.png",
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
      image: "/project14.png",
      projectName: "Dice Roll Simulator",
      projectLink: "https://nehalsurti.github.io/Dice-Roll-Simulator/",
      projectDescription:
        'Click the "Roll dice" button to trigger an animation and generate a random number, displayed in the center of the dice. The rolled number is also added to a history list for easy tracking.',
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Dice-Roll-Simulator",
        externalLink: "https://nehalsurti.github.io/Dice-Roll-Simulator/",
      },
    },
    {
      image: "/project15.png",
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
    {
      image: "/project16.png",
      projectName: "Stopwatch",
      projectLink: "https://nehalsurti.github.io/Stopwatch/",
      projectDescription:
        "Countdown timer for the New Year's countdown of 2025 generates numbers dynamically and pulls the current date and time from the user's device using JavaScript.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Stopwatch",
        externalLink: "https://nehalsurti.github.io/Stopwatch/",
      },
    },
    {
      image: "/project17.png",
      projectName: "Worthwhile Fintech",
      projectLink: "https://worthwhilefintech.com/",
      projectDescription:
        'Click the "Roll dice" button to trigger an animation and generate a random number, displayed in the center of the dice. The rolled number is also added to a history list for easy tracking.',
      projectTech: ["React", "Django", "cPanel"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Worthwhile-Fintech",
        externalLink: "https://worthwhilefintech.com/",
      },
    },
    {
      image: "/project18.png",
      projectName: "Feedback UI",
      projectLink: "https://nehalsurti.github.io/Feedback-UI/",
      projectDescription:
        "Pomodoro timer includes a countdown clock and three buttons - start, stop, and reset. Clicking start initiates a 25-minute countdown, which can be paused with the stop button and resumed with start. An alert notifies when the timer ends.",
      projectTech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      projectExternalLinks: {
        github: "https://github.com/NehalSurti/Feedback-UI",
        externalLink: "https://nehalsurti.github.io/Feedback-UI/",
      },
    },
  ];
  return (
    <main>
      <div className="projectspage">
        <h1>Projects</h1>
        <ul className="projects-grid">
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
                <li>
                  <div className="project-container">
                    <div className="project-image-overlay"></div>
                    <div className="project-container-upper">
                      <div className="project-image-container">
                        <Image
                          src={image}
                          fill
                          alt={projectName}
                          quality={100}
                        />
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
                          <li
                            className="project-info-tech-list-item"
                            key={tech}
                          >
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
                </li>
                //   <div
                //     className="project"
                //     key={projectName}

                //   >
                //     <div className="project-image">
                //       <div className="project-image-overlay"></div>
                //       <div className="project-image-container">
                //         <Image src={image} fill alt={projectName} quality={100} />
                //       </div>
                //     </div>
                //     <div className="project-info">
                //       <p className="project-info-overline">Featured Project</p>
                //       <h3 className="project-info-title">{projectName}</h3>
                //       <div className="project-info-description">
                //         <p>{projectDescription}</p>
                //       </div>
                //       <ul className="project-info-tech-list">
                //         {projectTech.map((tech) => (
                //           <li className="project-info-tech-list-item" key={tech}>
                //             {tech}
                //           </li>
                //         ))}
                //       </ul>
                //       <ul className="project-info-links">
                //         <li className="project-info-links-item">
                //           <Link
                //             href={projectExternalLinks.github}
                //             className="project-info-links-item-link"
                //           >
                //             <FiGithub />
                //           </Link>
                //         </li>
                //         <li className="project-info-links-item">
                //           <Link
                //             href={projectExternalLinks.externalLink}
                //             className="project-info-links-item-link"
                //           >
                //             <FiExternalLink />
                //           </Link>
                //         </li>
                //       </ul>
                //     </div>
                //   </div>
              );
            }
          )}
        </ul>
      </div>
      <div>page</div>;
    </main>
  );
}

export default Productspage;
