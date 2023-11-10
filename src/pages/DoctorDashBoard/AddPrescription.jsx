import DoctorMenu from "../../components/Layout/DoctorMenu";
import DashNav from "../../components/Layout/dash-nav";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";

const AddPrescriptionDoctor = () => {
  const [auth, setAuth] = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your API when the component mounts
    fetch('https://calmosiss.onrender.com/api/order')
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleApprove = (userId) => {
    fetch(`/api/update-approval/${userId}`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the local state with the updated order (if needed)
        // You can also display a success message
      })
      .catch((error) => {
        console.error('Error approving order:', error);
        // Handle the error, display an error message, etc.
      });
  };
  
  const handleCancel = (userId) => {
    fetch(`/api/update-cancel/${userId}`, {
      method: 'PUT',
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the local state with the updated order (if needed)
        // You can also display a success message
      })
      .catch((error) => {
        console.error('Error canceling order:', error);
        // Handle the error, display an error message, etc.
      });
  };

  return (
    <main className="dashboard order" data-scroll-container id="home">
      <DoctorMenu />
      <div class="mainbar">
        <DashNav />
        <hr class="h-px w-[150vh] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="label">
          <div className="element-terry-francine center-itemsss">
            <p className="text-[30px]">Your Prescription</p>
            <p className="text-[12px] opacity-50 ">View your order history or check the status of a recent order.</p>
          </div>
          <hr class="h-px w-[150vh] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h1>
  {orders.length > 0 ? (
    <ul>
      <p className="element-terry-francine  flex">
        {orders.map((order) => (
          <li key={order._id} className="order-list-item">
            <p>Name: {order.name}</p>
            <p>Mobile: {order.number}</p>
            <p>Approve: {order.aprroval} <span>
            <button className="buttonn" onClick={() => handleApprove(order.user)}>Approve</button>
            <button className="buttonn" onClick={() => handleCancel(order.user)}>Cancel</button></span></p>
          </li>
        ))}
      </p>
    </ul>
  ) : (
    <p>No orders found.</p>
  )}
</h1>

        </div>
      </div>
    </main>
  );
};

export default AddPrescriptionDoctor;
