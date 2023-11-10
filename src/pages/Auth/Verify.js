import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
const OtpVerify = () => {
  const [otp, setMObile] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/verify", {
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        localStorage.setItem("auth", JSON.stringify(res.data));

        // Check the message for navigation
        if (res.data.message === "Login") {
          navigate("/");
        } else if (res.data.message === "register") {
          navigate("/register");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid OTP");
    }
  };
  return (
    <Layout title="Register - Calmosis">

      <main className='login'>

        <div className="content">
          <form onSubmit={handleSubmit}>

            <div className="inner">
              <input
                type="text"
                value={otp}
                onChange={(e) => setMObile(e.target.value)}
                className="form-control"
                id="otp"
                name="otp"
                placeholder="Enter Otp"
                required
              />
            </div>
            <p>
              Click to Send OTP again <a href="/otp">Log In</a>
            </p>
            <button type="submit" className="btn btn-primary">
              Verify Otp
            </button>
          </form>
        </div>
      </main>

    </Layout>
  );
};

export default OtpVerify;
