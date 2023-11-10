import AdminMenu from "../../components/Layout/AdminMenu";
import DashNav from "../../components/Layout/dash-nav";
import React, { useEffect, useState } from "react";

const AllUsers = () => {
 
  return (
    <main className="dashboard order" data-scroll-container id="home">
      <AdminMenu/>
      <div class="mainbar">
        <DashNav />
        <div className="line" />
        <div className="content">
          <div className="heading">
            <h1>All Users</h1>
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};

export default AllUsers;
