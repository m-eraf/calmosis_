import React, { useState, useEffect } from 'react';
import { firebase, auth } from './firebaseConfig';
import { useAuth } from ".././src/context/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Layout from './components/Layout/Layout';

const OtpLOgin = () => {
  // State variables
  const [phoneNumber, setnumber] = useState("+91");
  const [otp, setotp] = useState('');
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Initialize the loading state
  const [authh, setAuth] = useAuth();
  const navigate = useNavigate();

  // Load reCAPTCHA when the component is mounted
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const signin = async () => {
    if (phoneNumber === "" || phoneNumber.length < 10) return;

    setLoading(true);

    let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    try {
      // Extract the actual phone number without the +91 prefix

      const result = await auth.signInWithPhoneNumber(phoneNumber, verify);
      setfinal(result);
      toast.success("Otp sent !", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
        style: {
          background: 'black',
          color: 'white',
        },
      });
      setshow(true);
    } catch (err) {
      alert(err);
      window.location.reload();
    } finally {
      setLoading(false); // Set loading state back to false
    }
  }

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index - 1] = e.target.value;
    setotp(newOtp.join(""));

    if (e.target.value === "" && e.keyCode === 8 && index > 1) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }

    if (index < 6 && e.target.value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };





  const ValidateOtp = async () => {
    setLoading(true); // Set loading state to true when validating OTP

    try {
      const res = await final.confirm(otp);
      const ress = await axios.post("/verify", {
        otp,
        phoneNumber: phoneNumber
      });
      if (ress && ress.data.success) {
        toast.success(ress.data && ress.data.message);
        setAuth({
          ...authh,
          user: ress.data.user,
          token: ress.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(ress.data));
        localStorage.setItem("auth", JSON.stringify(ress.data));

        if (ress.data.message === "Login") {
          navigate("/");
        } else if (ress.data.message === "register") {
          navigate("/register", { state: { phoneNumber } });
        }
      } else {
        toast.error(ress.data.message);
      }
      console.log(res);
      setUser(res.user);
    } catch (err) {
      console.log(err);
      alert("Wrong code");
    } finally {
      setLoading(false); // Set loading state back to false
    }
  }

  return (
    <Layout title="Register - Calmosis">
      <div className="h-[15vh]"></div>
      <main className='login items-center justify-center h-screen'>
        <div className='content'>
          <h2>Login</h2>
          <p>Click to Login With Password &nbsp;<a href="/login">Log In</a></p>
          <center>
            <div style={{ display: !show ? "block" : "none" }} className='inner '>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setnumber(e.target.value)}
                className="form-controll"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+91..."
                required
              />
              <br /><br />
              <div id="recaptcha-container"></div>
              <button className="btn btn-primary buttonn" onClick={signin} disabled={loading}>
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </div>
            <div style={{ display: show ? "block" : "none" }}>
              <div className="otp-input-container">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={otp[index - 1] || ""}
                    onChange={(e) => handleOtpChange(e, index)}
                    id={`otp-input-${index}`}
                  />
                ))}
              </div>
              <br /><br />
              <button className=" buttonn btn btn-primary" onClick={ValidateOtp} disabled={loading}>
                {loading ? "Verifying..." : "Verify"}
              </button>
            </div>

          </center>
        </div>
      </main>
      <ToastContainer />
    </Layout>
  );
}

export default OtpLOgin;
