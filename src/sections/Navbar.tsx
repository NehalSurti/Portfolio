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

  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

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
    const socialIcons = document.querySelector(".social-icons-list");
    const brandIcon = document.querySelector(".brand");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
      socialIcons?.classList.add("blur");
      brandIcon?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
      socialIcons?.classList.remove("blur");
      brandIcon?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

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
          <Link href="/">
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
              className="closeIcon"
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
            <Button text="Resume" link="/resume.pdf" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
