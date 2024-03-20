"use client";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;

  //     if (currentScrollPos > prevScrollPos) {
  //       setNavbarVisible(false);
  //     } else if(currentScrollPos === prevScrollPos) {
  //       setNavbarVisible(false);
  //     }  else {
  //       setNavbarVisible(true);
  //     }

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY < 50 ? setNavbarVisible(true) : setNavbarVisible(false);
  //   });
  // }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  // useEffect(() => {
  //   const hash = window.location.hash.split("#")[1];

  //   const element = document.getElementById(hash);
  //   if (element) {
  //     // element.classList.add("disabled");
  //     console.log("nav hash :",hash );
  //     setActiveHash(hash);
  //   }
  // }, [window.location.hash]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Link href="http://localhost:3000">
            <Logo></Logo>
          </Link>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => {
              return (
                <motion.li
                  key={name}
                  className="nav-items-list-item"
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.3 + index * 0.1,
                  }}
                  
                >
                  <Link
                    href={link}
                    // className="nav-items-list-item-link"
                    className={
                      activeHash === name.toLowerCase()
                        ? "disabled nav-items-list-item-link"
                        : "nav-items-list-item-link"
                    }
                  >
                    {name}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
