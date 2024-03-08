"use client";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { useState } from "react";

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

  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="">
            <Logo></Logo>
          </Link>
        </div>
        <div className="nav-items">
          <div className="nav-items-list">
            {sectionLinks.map(({ name, link }) => {
              return (
                <li key={name} className="nav-items-list-item">
                  <Link href={link} className="nav-items-list-item-link">
                    {name}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="nav-items-button">
            <Button text="Resume" link="http://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
