import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            width="261.021"
            height="298.536"
            viewBox="0 0 261.021 298.536"
          >
            <g transform="translate(-238.695 -107.379)">
              <text
                transform="translate(310 310)"
                // fill="#63ffda"
                font-size="150"
                font-family="SegoeUI-Semibold, Segoe UI"
                font-weight="600"
              >
                <motion.tspan
                  x="0"
                  y="0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                >
                  N
                </motion.tspan>
              </text>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                style={{ originX: "437.036", originY: "563.135" }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z"
                transform="translate(-67 -450)"
                fill="none"
                // stroke="#63ffda"
                // stroke-width="10"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
    // <div className="loader">
    //   <svg
    //     id="logo"
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="261.021"
    //     height="298.536"
    //     viewBox="0 0 261.021 298.536"
    //   >
    //     <g transform="translate(-238.695 -107.379)">
    //       <text
    //         // transform="translate(293 324)"
    //         transform="translate(310 310)"
    //         // fill="#63ffda"
    //         font-size="150"
    //         font-family="SegoeUI-Semibold, Segoe UI"
    //         font-weight="600"
    //       >
    //         <tspan x="0" y="0">
    //           N
    //         </tspan>
    //       </text>
    //       <path
    //         d="M435.651,850.174l126.064-68.158V637.388L437.036,563.135,310.695,632.124V776.474Z"
    //         transform="translate(-67 -450)"
    //         fill="none"
    //         // stroke="#63ffda"
    //         stroke-width="10"
    //       />
    //     </g>
    //   </svg>
    // </div>
  );
}

export default Loader;
