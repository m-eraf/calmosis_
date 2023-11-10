 
import Footer from "../../Basic/footer";
import Navbar from "../../Basic/navbar";
import React from "react";
import { motion } from "framer-motion";

const Shop = () => {
  const delayConst = 2.2;
  return (
    <main className="shop">
      <Navbar />

      <div className="content">
        <div className="cards">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: delayConst }}
          >
            <img src="./peace_shop.png" alt="" />
            <h3>Peace Mantra</h3>
            <p className="desc">Thoughtfully crafted by Calmosis,</p>

            <span>
              Flavour: <strong>Honey</strong>
            </span>
            <span>
              Variants: <strong>20ml</strong>
            </span>
            <span>
              MRP: <strong>₹4500</strong>
            </span>

            <div className="btn">
              <a href="/peace-mantra">
                <span>Buy Now</span>
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
            className="card"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: delayConst, delay: delayConst + 0.5 }}
          >
            <img src="./sleep_shop.png" alt="" />
            <h3>Sleep Mantra</h3>
            <p className="desc">Thoughtfully crafted by Calmosis,</p>

            <span>
              Flavour: <strong>Honey</strong>
            </span>
            <span>
              Variants: <strong>20ml</strong>
            </span>
            <span>
              MRP: <strong>₹4500</strong>
            </span>

            <div className="btn">
              <a href="/sleep-mantra">
                <span>Buy Now</span>
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

        <div className="line" />

        <Footer />
      </div>
    </main>
  );
};

export default Shop;
