"use client";
import { useState} from "react";
import Loader from "./Loader";

export default function LoaderWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <>
      {isLoading && (
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
      )}
      {showContent && children}
    </>
  );
}
