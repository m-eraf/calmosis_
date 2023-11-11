"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const delayConst = 2.2;
  return (
    <>
      <motion.div
        className="landing_home laptop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="overlay" />
        <div className="logo_top top-[-15vh] md:top-[10vh] md:w-[60vh] w-[35vh] h-[40vh] md:h-[50vh]">
          <img src="./black_logo.svg" alt="" />
          <span>
            Harmonizing <strong>Natural</strong> journey
          </span>
        </div>

        <div className="images">
        <div className="absolute flex">
  <div>
    <motion.strong
      initial={{ opacity: 0, scale: 0.5, x: "50%" }}
      animate={{ opacity: 1, scale: 1, x: "-220px" }}
      transition={{ duration: 2, ease: "easeInOut", delay: delayConst + 2 }}
      transformOrigin="50% 50%"
    >
      Mirage
    </motion.strong>
    <br />
    <motion.span
      initial={{ opacity: 0, scale: 0.5, x: "50%" }}
      animate={{ opacity: 1, scale: 1, x: "-220px" }}
      transition={{ duration: 2, ease: "easeInOut", delay: delayConst + 2 }}

      transformOrigin="50% 50%"
    >
      Your Blissful
    </motion.span>
  </div>
  <div style={{ marginLeft: "300px" }}>
    <motion.strong
      className="md:flex hidden"
      initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
      animate={{ opacity: 1, scale: 1, x: "140px" }}
      transition={{ duration: 2, ease: "easeInOut", delay: delayConst + 2 }}

      transformOrigin="50% 50%"
    >
      <span className="strong">to Oasis</span>
    </motion.strong>
    <br />
    <motion.span
      initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
      animate={{ opacity: 1, scale: 1, x: "110px" }}
      transition={{ duration: 2, ease: "easeInOut", delay: delayConst + 2 }}

      transformOrigin="50% 50%"
    >
      Journey
    </motion.span>
  </div>
</div>
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: delayConst }}
            className="max-w-[700px] max-h-[700px]"
            src="./home_page.png"
            alt=""
          />
          <div>            

          </div>
          
        </div>
      </motion.div>
      <div className="landing_home mobile">
        <img src="logoblack.svg" className="logo" />

        <div className="inner">
        <div className="flex md:hidden text-center justify-center items-center absolute">
  <motion.h1
    className="text-[35px] text-center text-white justify-center items-center top-[-30vh] relative"
    initial={{ opacity: 0, scale: 0.2, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      delay: delayConst + 1,
    }}
  >
    {" "}
    <span className="text-[20px] Mirage">Mirage&nbsp; &nbsp;</span> to Oasis
    <br />
    Your Blissful{" "}
    <span className="text-[20px] Mirage ">&nbsp;&nbsp;Journey</span>
  </motion.h1>
</div>
      <motion.img
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: delayConst }}
             src="home_page.png" className="bottle" />
        </div>
      </div>
    </>
  );
};

export default Hero;
