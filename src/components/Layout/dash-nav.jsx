import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import {LiaUserCheckSolid} from "react-icons/lia"
import { RiUserAddLine } from "react-icons/ri"
const DashNav = () => {
  const [auth, setAuth] = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <nav className="dashboard-nav">
      <ul className="left">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div className="right">
            <ul>
            {!auth?.user ? (
              <>
                <li className="nav-item text-black">
                  <NavLink to="/otplogin" className=" nav-link">
                    < RiUserAddLine />

                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <div
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="nav-link dropdown-toggle"
                    style={{ border: "none" }}
                  >
<LiaUserCheckSolid/>                  </div>
                  {showUserMenu && (
                    <ul className="dropdown-menu row">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user?.role === 1 ? "admin" :
                            auth?.user?.role === 2 ? "doctor" : "user"}`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/otplogin"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </>
            )}
            </ul>
          </div>
    </nav>
  );
};

export default DashNav;
