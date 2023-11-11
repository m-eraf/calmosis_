import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false); // Initialize the loading state

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting the form
  
    try {
      const res = await axios.post("https://calmosiss.onrender.com/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // Set loading state back to false when the API request is complete
    }
  };
  
  return (
    <Layout title="Register - Calmosis">
       <div className="h-[15vh]">

       </div>
          <main className='login  items-center justify-center h-screen'>
          
      <div className="content">
      <h2>Login</h2>
     
        <p>
          Login with Otp <a href="/otplogin"> Log In</a>
        </p>
        <form onSubmit={handleSubmit}>

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
          <label>Your Pasword</label>

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
         {/* <a  onClick={() => {
                navigate("/forgot-password");
              }}> Forget Password</a> */}
<button
              type="submit"
              className="btn btn-primary "
              disabled={loading} // Disable the button when in the loading state
            >
  {loading ? <div className="simple-spinner"><span ></span></div>  : "LOGIN"}
            </button>
        </form>
      </div>
      </main>

    </Layout>
  );
};

export default Login;
