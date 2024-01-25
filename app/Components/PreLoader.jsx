'use client'
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeLoading = setTimeout(() => {
      // Simulating a delay for demonstration purposes
      setIsLoading((prev) => !prev);
    }, 2000);

    return () => clearTimeout(fakeLoading); // Clear the timeout on component unmount
  }, []);

  const preloaderVariants = {
    initial: { scaleY: 1 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };

  const moblinkvar = {
    initial: {
      y: "20vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
    },
  };

  const containervar = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          variants={preloaderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 left-0 right-0 bottom-0 origin-top flex justify-center items-center bg-white z-50"
        >
          <motion.div
            variants={containervar}
            initial="initial"
            animate="open"
            exit="initial"
            className="overflow-hidden p-2"
          >
            <motion.h2 variants={moblinkvar} className="text-3xl font-semibold">
           བཀྲ་ཤིས་བདེ་ལེགས་
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;