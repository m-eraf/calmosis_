 
import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import DashNav from "../../components/Layout/dash-nav";
import axios from "axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();

  const [btnActive, setBtnActive] = useState(false);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("https://calmosiss.onrender.com/api/v1/auth/profile", {
        name,
        email,
        phoneNumber,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="dashboard account" data-scroll-container id="home">
      <UserMenu/>
      <div class="mainbar">
        <DashNav />

        <div className="line" />

        <div className="content">
          <div className="top">
            <div className="top-left">
              <span>
                <h2 >Hello <span className="capital">{auth?.user?.name}
                  </span></h2>
                <p>You can edit your personal info below.</p>
              </span>
              
            </div>
          </div>

          <div className="form">
            <form>
              <div className="input-flex">
                <div className="form-control">
                  <label htmlFor="name">Your Full Name *</label>
                  <input
                    type="text"
                    defaultValue={auth.user?.name}
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={auth.user?.email}
                    placeholder="Email ID"
                    disabled
                  />
                                  <p>Your Login email can’t be changed</p>

                </div>
              </div>

              <div className="form-control">
                <label htmlFor="name">Mobile *</label>
                <input
                    type="text"
                    value={auth.user?.phoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    disabled                  />
              </div>
              <div className="mb-3">
              <label htmlFor="name">Address *</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                  />
                </div>
            </form>
          </div>

          <div className="btn-dash">
            <a href="/dashboard" className="btn-style-2">
              Discard
            </a>
            <a
              href="#"
              onClick={handleSubmit}
              className={`btn-style-2 ${btnActive ? "active" : ""}`}
            >
              {loading ? "Updating..." : "Update Info"}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
