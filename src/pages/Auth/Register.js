import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Register = () => {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useAuth();

  const [password, setPassword] = useState("");
  const phoneNumberFromState = location.state && location.state.phoneNumber;
  const [loading, setLoading] = useState(false); // Initialize the loading state

  const [phoneNumber, setPhone] = useState(phoneNumberFromState || "");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      const res = await axios.post("https://calmosiss.onrender.com/api/v1/auth/register", {
        name,
        email,
        password,
        phoneNumber,
      });

      if (res && res.data.success) {
        await axios.post("/email/welcome", { email });
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        setLoading(false);
        navigate("/");
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
          <main className='signup items-center justify-center h-screen'>

      <div className="content">
        <form onSubmit={handleSubmit}>
        <h2>Welcome to Calmosis</h2>          <p>
          Already Have An Account? <a href="/login">Log In</a>
        </p>
       
          <div className="inner d">
          <label>Your Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="inner">
            <label>Your Email</label>
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="inner">
            <label>Enter Your Pasword</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="inner">
          <label>Your Mobile</label>

            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Same otp Phone"
              disabled
              />
          </div>
         
          <button
              type="submit"
              className="btn btn-primary buttonn"
              disabled={loading} // Disable the button when in the loading state
            >
              {loading ? "Registering..." : "REGISTER"}
            </button>
        </form>
      </div>
      </main>

    </Layout>
  );
};

export default Register;
