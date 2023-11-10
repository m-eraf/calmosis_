import DoctorMenu from "../../components/Layout/DoctorMenu";
import DashNav from "../../components/Layout/dash-nav";
import React, { useEffect, useState } from "react";

const AllPrescriptionDoctor = () => {
 
  return (
    <main className="dashboard order" data-scroll-container id="home">
      <DoctorMenu/>
      <div class="mainbar">
        <DashNav />
        <div className="line" />

        <div className="content">
          <div className="heading">
            <h1>All Prescriptions</h1>
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};

export default AllPrescriptionDoctor;
