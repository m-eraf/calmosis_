import DashNav from "../../components/Layout/dash-nav";
import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
const AdminSubscriptions = () => {
  return (
    <main className="dashboard order" data-scroll-container id="home">
      <AdminMenu/>
      <div class="mainbar">
        <DashNav />
        <div className="line" />

        <div className="content">
          <div className="heading">
            <h1>Subscriptions</h1>
          </div>
          <div />
        </div>
      </div>
    </main>
  );
};


export default AdminSubscriptions;
