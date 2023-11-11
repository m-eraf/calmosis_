 
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import { Autoplay } from "swiper/modules";
import Footer from "../Basic/footer";

const testimonials = [
  {
    desc: "Add a testimonial that a happy customer or client has said about working with you.",
    name: "Shrit Shrivastava, COO, HORIZON",
  },
  {
    desc: "Add a testimonial that a happy customer or client has said about working with you.",
    name: "Utlarsh, COO, HORIZON",
  },
  {
    desc: "Add a testimonial that a happy customer or client has said about working with you.",
    name: "Amanda Johns, COO, HORIZON",
  },
  {
    desc: "Add a testimonial that a happy customer or client has said about working with you.",
    name: "Amanda Johns, COO, HORIZON",
  },
];

const HomePage = () => {
  return (
    <div className="home relative bottom-[10vh]" data-scroll-container>
      {/* <div className="bg md:flex hidden">
        <img className="bg md:flex hidden home_image" src="blend_bg.png" alt="" />
      </div> */}
      <p className="text-centre text-center justify-center items-center centre sm:text-[30px] text-[16px] sm:p-16 xs:p-8 px-6 py-12" >
        Experience the epitome of trust with our THC and CBD 
        full-spectrum products, perfectly tailored to enhance your lifestyle.
      </p>
      <div className="divider md:flex row ">
      <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="image home_image"
        >
          <img src="./home_one_left.png" alt="" />
        </motion.div>
        <motion.div
          className=" sm:p-8 xs:p-2 px-6 py-6 text"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          <h1 className="text-[25px] lg:text-[50px] xl:text-[55px] text-start justify-center ">Peace Mantra</h1>
          <p className="text-[15px] md:text-[20px] text-start  w-[42vh] sm:w-full">
            Sleep Mantra, thoughtfully crafted by Calmosis,is a sacred blend
            rooted in ancient Ayurvedic traditions, devoted to nurturing
            peaceful and restorative sleep. Enriched with 2000mg of
            full-spectrum THC and CBD, along with the potent essence of <br />
            <a href="#">Know More</a>
          </p>

          <div className="btn">
            <a href="/peace-mantra">
              <span>Shop Now</span>
              <svg
                width="58"
                height="46"
                viewBox="0 0 58 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="55"
                  height="43"
                  fill="#F2D101"
                  stroke="#F2D101"
                  stroke-width="3"
                />
                <path
                  d="M16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5V21.5ZM42.0607 24.0607C42.6464 23.4749 42.6464 22.5251 42.0607 21.9393L32.5147 12.3934C31.9289 11.8076 30.9792 11.8076 30.3934 12.3934C29.8076 12.9792 29.8076 13.9289 30.3934 14.5147L38.8787 23L30.3934 31.4853C29.8076 32.0711 29.8076 33.0208 30.3934 33.6066C30.9792 34.1924 31.9289 34.1924 32.5147 33.6066L42.0607 24.0607ZM16 24.5L41 24.5V21.5L16 21.5V24.5Z"
                  fill="#466F44"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="divider divider md:flex row left">
      <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}  
          className="image flex  md:hidden home_image"
        >
          <img src="./home_two_right.png" alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="text sm:p-8 xs:p-2 px-6 py-6 "
        >
          <h1 className="text-[25px] lg:text-[50px] xl:text-[55px] text-start justify-center  ">Sleep Mantra</h1>
          <p className="text-[15px] md:text-[20px] text-start   w-[42vh] sm:w-full">
            Sleep Mantra, thoughtfully crafted by Calmosis,is a sacred blend
            rooted in ancient Ayurvedic traditions, devoted to nurturing
            peaceful and restorative sleep. Enriched with 2000mg of
            full-spectrum THC and CBD, along with the potent essence of <br />
            <a href="#">Know More</a>{" "}
          </p>

          <div className="btn">
            <a href="/sleep-mantra">
              <span>Shop Now</span>
              <svg
                width="58"
                height="46"
                viewBox="0 0 58 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="55"
                  height="43"
                  fill="#F2D101"
                  stroke="#F2D101"
                  stroke-width="3"
                />
                <path
                  d="M16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5V21.5ZM42.0607 24.0607C42.6464 23.4749 42.6464 22.5251 42.0607 21.9393L32.5147 12.3934C31.9289 11.8076 30.9792 11.8076 30.3934 12.3934C29.8076 12.9792 29.8076 13.9289 30.3934 14.5147L38.8787 23L30.3934 31.4853C29.8076 32.0711 29.8076 33.0208 30.3934 33.6066C30.9792 34.1924 31.9289 34.1924 32.5147 33.6066L42.0607 24.0607ZM16 24.5L41 24.5V21.5L16 21.5V24.5Z"
                  fill="#466F44"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}  
          className="image md:flex hidden home_image"
        >
          <img src="./home_two_right.png" alt="" />
        </motion.div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <p className="heading text-[30px] sm:text-[70px] sm:p-16 xs:p-8 px-6 py-12">
         <span className="text-yellow-400	">Free!</span>  Ayurvedic Doctor Consultation for Your Hemp Journey
        </p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="workthroughg "
        >
          <img src="./group2.png" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          className="workthrough "
        >
          <img src="./workthrough.png" />
        </motion.div>
        <div className="story sm:p-16 xs:p-8 px-6 py-12" style={{ marginTop: "30px" }}>
          <p className="text-[13px] md:text-[18px]">Our Story</p>
          <p className="text-[30px] md:text-[50px] font-black">Get To Know Us</p>

          <div className="text md:w-[60%] w-[100%]">
            <p>
              Established in 2023, Calmosis is a "Make in India" wellness brand
              that artfully combines the soothing essence of hemp with Ayurvedic
              wisdom.
            </p>
            <p>
              Embrace nature's therapeutic potential, rediscover inner calmness,
              and embark on a harmonious journey with Calmosis, where you'll
              find solace in the serenity of a calm oasis amidst life's journey.
            </p>

            <a className="btn-style-2" href="#">
              Know More...
            </a>
          </div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
            className="flower w-[20vh] right-[-62px] sm:left-[160vh] sm:w-full top-[34vh] md:top-[0]"
          >
            <img  src="./flower.png" alt="" />
          </motion.div>
        </div>  
      </div>

      <div
        style={{ marginTop: "100px", marginBottom: "20px" }}
        className="testimonial "
      >
        <p className="heading relative  text-[30px] md:text-[60px]  " style={{ fontWeight: "bold" }}>
          Our Happy Clients
        </p>
        <Swiper
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          pagination={true}
          modules={[Autoplay]}
          color="white"
          className="mySwiper "
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide className="slides" key={index}>
                <div className="slide">
                  <p className="text md:w-[40%] md:leading-[35px] w-[90%] text-[15px] md:text-[20px]">{item.desc}</p>
                  <p className="name">-- {item.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="line" />

      <Footer />
    </div>
  );
};

export default HomePage;
