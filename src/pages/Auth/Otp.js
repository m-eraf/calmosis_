import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
const OtpLogin = () => {
  const [phoneNumber, setMObile] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://calmosiss.onrender.com/login", {
        phoneNumber,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success("Otp Sent Successfully");
        navigate(location.state || "/verify");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Calmosis">
       <div className="h-[15vh]">

</div>
  <main className='login items-center justify-center h-screen' >    
      <div className="content">
        <form onSubmit={handleSubmit}>
        <h2>Phone Login</h2>          <p>
          Click to Login With Password<a href="/login">Log In</a>
        </p>
          <div className="inner">
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setMObile(e.target.value)}
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+91..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Otp
          </button>
        </form>
      </div>
      </main>

      </Layout>
  );
};

export default OtpLogin;
