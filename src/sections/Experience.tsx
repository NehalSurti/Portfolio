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

  const expereinces = [
    {
      name: "Freelance",
      role: "Full Stack Developer",
      url: "",
      start: "December 2023",
      end: "Present",
      shortDescription: [
        "Specializing in web development using MERN Stack, I create dynamic and responsive websites tailored to client needs.",
        "Experienced in developing and maintaining projects from inception to deployment, ensuring high-quality and scalable solutions.",
        "Collaborate closely with clients to understand their vision and deliver custom web applications that not only meet but exceed their expectations.",
        "Proficient in integrating a variety of technologies, optimizing performance, and delivering seamless user experiences across all devices.",
      ],
    },
    {
      name: "Gorillas",
      role: "Operations Associate",
      url: "https://gorillas.io/",
      start: "June 2021",
      end: "May 2023",
      shortDescription: [
        "Played a key role in ensuring the smooth operation of warehouse activities, managing various aspects to maintain high productivity levels.",
        "Preparation of customer orders quickly and accurately, ensuring they met promised delivery times for customers.",
        "Managed inventory and stock levels effectively, ensuring sufficient supply to meet customer demands and operational needs.",
        "Kept inventory discrepancies to a minimum while maintaining high accuracy levels.",
        "Worked closely with the customer service team to efficiently resolve customer enquiries.",
      ],
    },
    {
      name: "Aarti",
      role: "Mechanical Design Engineer",
      url: "https://www.aarti-industries.com/",
      start: "September 2019",
      end: "November 2020",
      shortDescription: [
        "Mechanical design of static equipment (ASME Section VIII Div.1, TEMA, API 650) and boilers (IBR Code) using PVElite, Compress, and SEG software.",
        "Prepared mechanical datasheets, design specifications, and PVElite reports. Coordinate with draughtsman for GA drawings and created 2D/3D CAD models and drafts in SolidWorks.",
        "Reviewed vendor drawings, attended technical meetings, resolved technical queries, and coordinated with various engineering disciplines for project integration.",
        'Led a team to inventory unused equipment, contributing to future project efficiency, and received an "Exceed Expectations" rating for outstanding performance.',
      ],
    },
    {
      name: "Heatex",
      role: "Senior Mechanical Design Engineer",
      url: "https://www.heatexindustries.com/",
      start: "September  2015",
      end: "September  2019",
      shortDescription: [
        "Lead a team in developing detailed designs for various boilers and pressure vessels, ensuring compliance with IBR, BS 2790, and ASME codes.",
        "Reviewed design drawings for accuracy and compliance, covering both pressure and non-pressure parts of boilers and auxiliary equipment.",
        "Create 3D and 2D models, technical specifications, material forecasts, BOMs, DCNs, and DCRs using SolidWorks and AutoCAD.",
        "Coordinate with departments, verify welding details, prepare layout arrangements, and incorporate site feedback into designs.",
      ],
    },
    {
      name: "IPR",
      role: "Trainee Design Engineer",
      url: "http://www.ipr.res.in/",
      start: "May 2014",
      end: "May 2015",
      shortDescription: [
        "Designed and developed a Piping Layout with valves of the Compressor and Oil Removal System(CORS). ",
        "Carried out the valve sizing for the valves located in the CORS.",
        "Carried out the static and dynamic analysis of piping in the CAESAR-II software.",
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
              {expereinces[selected].name !== "Freelance" && (
                <span className="exp-details-position-company">
                  &nbsp;@&nbsp;
                  <Link
                    href={expereinces[selected].url}
                    className="link"
                    target="_blank"
                  >
                    {expereinces[selected].name}
                  </Link>
                </span>
              )}
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
