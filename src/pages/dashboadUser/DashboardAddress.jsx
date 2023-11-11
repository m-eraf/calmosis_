import DashNav from "../../components/Layout/dash-nav";
import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const DashboardAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    // Check if the user is logged in
    if (auth.user) {
      // Make an API request to fetch the cart data for the logged-in user
      fetch(`/api/addresses?userId=${auth?.user?._id}`)
        .then((response) => response.json())
        .then((data) => {
          // Update the cartItems state with the received data
          setAddresses(data);
        })
        .catch((error) => {
          console.error('Failed to fetch address data:', error);
        });
    }
  }, [auth?.user]);

  return (
    <main className="dashboard order" data-scroll-container id="home">
      <UserMenu />
      <div class="mainbar">
        <DashNav />
        <hr class="h-px w-[150vh] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="label">
          <div className="element-terry-francine center-itemsss"><p className="text-[30px]">Addresses</p>

            <p className="text-[12px] opacity-50	">Add and manage the addresses you use often.</p>

          </div>

          <p className="element-terry-francine">
            <hr class="h-px w-[150vh] my-8 bg-gray-200 border-0 dark:bg-gray-700" />

            <h1>{addresses.map((address) => (
              <p className="addres center-itemsss" key={address._id}>
                Deleivery Address: <br /> {address.name}, <br /> {address.mobile} ,<br /> {address.address} ,{address.city}, {address.state}, {address.pincode}
              </p>
            ))}
              <hr class="h-px w-[150vh] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            </h1>
          </p>
          <div />
        </div>
      </div>
    </main>
  );
};


export default DashboardAddress;
