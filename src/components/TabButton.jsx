import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.9rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button className="tabbutton" onClick={selectTab}>
      <p className={`tabbuttontitle ${active ? "buttonActiveClass" : ""}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="tabbuttonunderline"
      ></motion.div>
    </button>
  );
};

export default TabButton;
