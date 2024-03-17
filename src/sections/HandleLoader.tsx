"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/sections/Navbar";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Loader from "@/components/Loader";

function HandleLoader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  //   const handleLoaderLoaded = () => {
  //     setIsLoading(false);
  //     setTimeout(() => setShowContent(true), 450);
  //   };

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
      setIsLoading(false);
    }, 450);
  }, [setIsLoading]);

  return (
    <>
      {isLoading && (
        <Loader
        //   isLoading={isLoading}
        //   setIsLoading={handleLoaderLoaded}
        />
      )}
      {showContent && (
        <>
          <Navbar></Navbar>
          <SocialIcons></SocialIcons>
          {children}
          <Email></Email>
          {/* <Loader
          //   isLoading={isLoading}
          //   setIsLoading={handleLoaderLoaded}
          /> */}
        </>
      )}
    </>
  );
}

export default HandleLoader;
