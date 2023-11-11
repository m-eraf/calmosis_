import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="p-2" style={{ marginTop: "20px" }}>
      <div>
        <p className="middle">
          All our products are recognized and approved by the state AYUSH
          Department, Madhya Pradesh.
        </p>
        <ul className="flex socials">
          <li>
            <a href="https://www.facebook.com/profile.php?id=61552363868158">
              <FaFacebook />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/calmosis.official/">
              <FiInstagram />
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/channel/UCjA4zYzm__jA_GiGMjZZsXA"><FaYoutube /></a>
          </li>

        </ul>
      </div>


      <div className="table">

        <div className="row">
          <div className="address">
            <p className="w-[250px]">
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Headquarters
              </span>
              <br />
              <span style={{ paddingTop: "5px" }}>
                Unispace business center, Whitefield, EPIP Zone, Bengaluru,
                Karnataka 560066
              </span>
            </p>
          </div>
        </div>

        <div className="row">
          <p className="w-[250px]">
            <span
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Quick Contact
            </span>
            <br />
            <span style={{ paddingTop: "5px" }}>
              <p>calm@calmosis.com</p>
              <p>Tel; +91-790-890-890</p>
            </span>
          </p>
        </div>

        <div className="row">
          <p className="w-[250px]">
            <span
              style={{
                color: "white",
                fontSize: "20px",
              }}
            >
              Menu
            </span>
            <br />
            <ul>
              <li>
                <p>
                  <a href="/">Home</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/shop">Shop</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="/about">About</a>
                </p>
              </li>
              <li>
                <p>
                  {/* <a href="/blog">Blog</a> */}
                </p>
              </li>
            </ul>
          </p>
        </div>

        <div className="row">
          <p className="policy">
            <span
              className=""
              style={{
                color: "white",
                opacity: "1",
                fontSize: "20px",
              }}
            >
              Policy
            </span >
            <br />
            <div className="">

              <ul>
                <li>
                  <p>
                    <a href="/legal/faq">FAQ</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="/legal/shipping">Shipping & Returns</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="/legal/store">Store Policy</a>
                  </p>
                </li>
                <li>

                </li>
              </ul>
            </div>
          </p>
        </div>

      </div>

      <div className="bottom">
        <p className="md:flex  hidden">© 2023 by Calmosis.Vedic Private Limited. All Rights Reserved.</p>
        <img className="md:h-full h-[8vh] relative top-[-2vh]" src="./white_name.svg" alt="" />
        <p className="md:hidden justify-center items-center text-center text-[10px] flex">© 2023 by Calmosis.Vedic Private Limited. All Rights Reserved.</p>

      </div>

    </footer >
  );
};

export default Footer;
