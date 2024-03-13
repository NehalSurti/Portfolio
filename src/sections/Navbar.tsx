"use client";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
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
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setNavbarVisible(true) : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    // const links = document.querySelectorAll(".nav-items-list-item-link");
    // links.forEach((link) => {
    //   link.addEventListener("click", () => setResponsiveNavVisible(false));
    // });
    // const nav = document.querySelector(".nav-items");
    // nav?.addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className="brand">
          <Link href="">
            <Logo></Logo>
          </Link>
        </div>
        <div className="nav-responsive-toggle">
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
        </div>
        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => {
              return (
                <li key={name} className="nav-items-list-item">
                  <Link
                    href={link}
                    className="nav-items-list-item-link"
                    onClick={(e) => {
                      setResponsiveNavVisible(false);
                    }}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="nav-items-button">
            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
