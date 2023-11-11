import React from "react";
import { NavLink } from "react-router-dom";
import {RiAccountCircleLine} from "react-icons/ri"
import {BsCartCheck} from "react-icons/bs";
import {BsPrescription2} from "react-icons/bs"
import {LiaAddressBookSolid} from "react-icons/lia"
const UserMenu = () => {
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
        <ul className="dashmob">
          <li className="active">
            <NavLink to="/dashboard/user/"><RiAccountCircleLine/></NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/orders"><BsCartCheck/></NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/prescription"><BsPrescription2/></NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/address"><LiaAddressBookSolid/></NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/user/payment">as</NavLink>
          </li> */}
        </ul>
        <ul >
          <li className="active">
            <NavLink to="/dashboard/user/">Account</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/prescription">Prescription</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user/address">Addresses</NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/user/payment">Payment Details</NavLink>
          </li> */}
        </ul>
      </div>
     
  </main>
  );
};

export default UserMenu;
