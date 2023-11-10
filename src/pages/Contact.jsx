import Footer from "./Basic/footer";
import Navbar from "./Basic/navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const messageInput = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      nameInput.current.value === "" ||
      emailInput.current.value === "" ||
      messageInput.current.value === ""||
      phoneInput.current.value ===""
    ) {
      toast.error("Please fill in all the fields", {
        position: toast.POSITION.BOTTOM_RIGHT, 
        autoClose: 1000,
        style: {
          background: 'black',
          color: 'white', 
        },
      });
      return;
    }

    setIsSubmitting(true); 

    emailjs.sendForm(
      "service_dyi1mkc",
      "template_0ft68jm",
      form.current,
      "-RHRbDvmLVA0SJuEO"
    ).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");

        toast.success("sent successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
          style: {
            background: 'black',
            color: 'white', 
          },
        });

        form.current.reset();
        setIsSubmitting(false); 
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      },
      (error) => {
        console.log(error.text);
        setIsSubmitting(false); 
      }
    );
  };
  
  return (
    <main className="contact">
      <Navbar />
      <div className="content">
        <h2 className="out">Contact</h2>

        <div className="details">
          <div className="left">
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-flex">
                <div className="form-control">
                  <label htmlFor="name">Full Name *</label>
                  <input ref={nameInput} type="text" name="user_name" placeholder="Full Name" />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email *</label>
                  <input ref={emailInput} type="email" name="user_email" placeholder="Email ID" />
                </div>
              </div>

              <div className="input-flex">
                <div className="form-control">
                  <label htmlFor="name">Mobile *</label>
                  <input ref={phoneInput}  type="text" id="phone" name="phone" placeholder="Mobile Number" />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Subject*</label>
                  <input  type="text" id="subject" placeholder="Subject" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="message">Message *</label>
                <textarea
                ref={messageInput}
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>        
              <button value={isSubmitting ? "...." : "Submit!"} 
                disabled={isSubmitting}  type="submit" className="btn-style-2">Send Message</button>
            </form>
          </div>

          
        </div>
      </div>
      <ToastContainer />

      <div className="line" />
      <Footer />
    </main>
  );
};

export default Contact;
