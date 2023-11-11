import React from "react";
import { NavLink } from "react-router-dom";
const DoctorMenu = () => {
  return (
    <main className="dashboard account" data-scroll-container id="home">
      <div
        class="sidebar"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#home"
      >
        <div className="logo">
          <img src="/black_logo.svg" />
        </div>

        <ul>
        <li>
            <NavLink to="/dashboard/doctor/">Your Details</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/doctor/addprescription">All Prescription</NavLink>
          </li>
         
          {/* <li>
            <NavLink to="/dashboard/doctor/allprescription">All Prescription</NavLink>
          </li> */}
        </ul>
      </div>

  </main>
  );
};

export default DoctorMenu;
