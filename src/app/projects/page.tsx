import React from "react";
import ProjectsList from "@/components/ProjectsList";

export const metadata = {
  title: "Products",
};

function Productspage() {
  return (
    <main>
      <div className="projectspage">
        <h1>Projects</h1>
        <ProjectsList></ProjectsList>
      </div>
    </main>
  );
}

export default Productspage;
