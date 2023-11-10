import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <main className="admin" data-scroll-container id="home">
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
        <li >
          <NavLink to="/dashboard/admin/accounts">Manage Accounts</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/coupon">Manage Coupon</NavLink>
        </li>
        <li >
          <NavLink to="/dashboard/admin/subscriptions">Manage Subscriptions</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/addproduct">Add Products</NavLink>
        </li>
         <li>
          <NavLink to="/dashboard/admin/blog">Add Blog</NavLink>
        </li>
       <li>
          <NavLink to="/dashboard/admin/allprescription">All Prescription</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/products">All Products</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/orders">All Orders</NavLink>
        </li>
        
        
      </ul>
    </div>

</main>
  );
};

export default AdminMenu;
