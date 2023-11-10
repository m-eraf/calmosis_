import DashNav from "../../components/Layout/dash-nav";
import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
const DashboardPayment = () => {
  return (
    <main className="dashboard order" data-scroll-container id="home">
      <UserMenu/>
      <div class="mainbar">
        <DashNav />
        <div className="line" />

        <div className="content">
          <div className="heading">
            <h1>Payment</h1>
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};


export default DashboardPayment;
