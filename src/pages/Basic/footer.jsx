import React from "react";
import { FiInstagram } from "react-icons/fi";
import {FaYoutube} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="p-2" style={{ marginTop: "70px" }}>
      <p className="middle">
        All our products are recognized and approved by the state AYUSH
        Department, Madhya Pradesh.
      </p>

      <div className="table">
        <div className="row">

          <div className="address">
            <p className="w-[250px]">
              <span
                style={{
                  color: "white",
                  opacity: "1",
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

        <div className="row md:flex hidden">
          <h3>Quick Contact</h3>
          <div className="">
            <p>calm@calmosis.com</p>
            <p>Tel; +91-790-890=890</p>
          </div>
        </div>
        <div className="address">
            <p>
              <span
                style={{
                  color: "white",
                  opacity: "1",
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
                <a href="/blog">Blog</a>
              </p>
            </li>
          </ul>
            </p>

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
        
       
        <div className="row md:hidden flex leading-[.1em]">
          <h3 className="leading-[1px]">Quick Contact</h3>
          <div className="">
            <p>calm@calmosis.com</p>
            <p>Tel; +91-790-890=890</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <p className="md:flex  hidden">© 2023 by Calmosis.Vedic Private Limited. All Rights Reserved.</p>
        <ul className="flex socials ">
          <li>
            <FaFacebook/>
          </li>
          <li>
            <FiInstagram/>
          </li>
          <li>
            <FaYoutube/>
          </li>
          
        </ul>
        <img className="md:h-full h-[8vh] relative top-[-2vh]" src="./white_name.svg" alt="" />
        <p className="md:hidden justify-center items-center text-center    text-[10px] flex">© 2023 by Calmosis.Vedic Private Limited. All Rights Reserved.</p>

      </div>
      
    </footer>
  );
};

export default Footer;
