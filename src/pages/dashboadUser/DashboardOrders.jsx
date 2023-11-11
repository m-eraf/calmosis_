import UserMenu from "../../components/Layout/UserMenu";
import DashNav from "../../components/Layout/dash-nav";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";

const DashboardOrders = () => {
  const [auth, setAuth] = useAuth();
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  useEffect(() => {
    // Check if the user is logged in
    if (auth.user) {
      // Make an API request to fetch the orders data for the logged-in user
      fetch(`/api/orders?userId=${auth?.user?._id}`)
        .then((response) => response.json())
        .then((data) => {
          setOrders(data);
        })
        .catch((error) => {
          console.error('Error fetching orders data:', error);
        });
    }
  }, [auth?.user]);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(orders.length / ordersPerPage))
    );
  };

  return (
    <main className="dashboard order" data-scroll-container id="home">
      <UserMenu />
      <div className="mainbar">
        <DashNav />
        <hr className="h-px w-[150vh] my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="label">
          <div className="element-terry-francine center-itemsss">
            <p className="text-[30px]">Your Orders</p>
            <p className="text-[12px] opacity-50">
              View your order history or check the status of a recent order.
            </p>
          </div>

          <div className="order-list">
            {currentOrders.length > 0 ? (
              <ul className="order-items">
                {currentOrders.map((order) => (
                  <li key={order.transactionId} className="order-item">
                    <p className="transaction-id">
                      Transaction ID: <span>{order.transactionId}</span>
                    </p>
                    {order.lineItems.map((item) => (
                      <li key={item._id}>
                        Name: {item.name}, Price: {item.price}, Quantity: {item.quantity}
                      </li>
                    ))}
                    <p className="approval-status">
                      Total Amount: <span>{order.price}</span>
                    </p>
                    <p className="approval-status">
                      Approval Status: <span>{order.aprroval}</span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              onClick={goToPreviousPage}
              className={`page-button ${currentPage === 1 ? "disabled" : ""
                }`}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>

            {[...Array(Math.ceil(orders.length / ordersPerPage)).keys()].map(
              (number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`page-button ${number + 1 === currentPage ? "active" : ""
                    }`}
                >
                  {number + 1}
                </button>
              )
            )}

            <button
              onClick={goToNextPage}
              className={`page-button ${currentPage === Math.ceil(orders.length / ordersPerPage)
                  ? "disabled"
                  : ""
                }`}
              disabled={
                currentPage === Math.ceil(orders.length / ordersPerPage)
              }
            >
              {">"}
            </button>
          </div>
        </div>
        <div />
      </div>
    </main>
  );
};

export default DashboardOrders;
