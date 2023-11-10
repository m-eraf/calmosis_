import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const delayConst = 2.2;
  return (
    <motion.div
      className="landing_home md:top-[-13vh] md:h-[50vh] h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="overlay" />
      <div className="logo_top top-[-15vh] md:top-[10vh] md:w-[60vh] w-[35vh] h-[40vh] md:h-[50vh]">
        <img src="./logoblack.svg" alt="" />
      </div>
      <div className="flex md:hidden text-center justify-center items-center absolute">
        <motion.h1
          className="text-[35px] text-center text-white justify-center items-center top-[-30vh] relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: delayConst + 1,
          }}        >
          {" "}
          <span className="text-[20px] Mirage">Mirage&nbsp; &nbsp;</span> to
          Oasis
          <br />
          Your Blissful{" "}
          <span className="text-[20px] Mirage ">&nbsp;&nbsp;Journey</span>
        </motion.h1>
      </div>
      <div className="images">
        <div className="md:flex hidden">
          <motion.strong
            className=" md:flex hidden "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: delayConst + 2,
            }}
          >
            {/* Mirage with p */}
            Mirage
          </motion.strong>
          <br />
          {/* Your Blissful */}
          <motion.span
            className=" md:flex hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: delayConst + 2,
            }}
          >
            <span className=" ">Your Bissful</span>
          </motion.span>
        </div>

        <motion.img
          className="top-[-5vh] md:top-[0] relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: delayConst }}
          src="./home_page.png"
          alt=""
        />
        {/* <div className="top-[2vh] ">
            <img className="absolute md:left-[95vh] left-[18vh] " src="./pngwing.png" alt="" />
        <img className="absolute md:left-[55vh] left-[-10vh]" src="./pngwing1.png" alt="" />
        </div> */}

        <div>
          {/* to Oasis */}
          <div className="md:flex hidden">
            {" "}
            <motion.span
              className=" top-[-5vh] md:flex hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delayConst + 2,
              }}
            >
              <span className="strong">to Oasis</span>
            </motion.span>
            <br />
          </div>
          <div className="md:flex hidden">
            {" "}
            <motion.span
              className=" top-[-5vh] right-[-10vh] md:flex hidden"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delayConst + 2,
              }}
            >
              Journey
            </motion.span>
            <br />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

//
