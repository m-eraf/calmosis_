import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import DashNav from "../../components/Layout/dash-nav";
import BasicTable from "../../components/Layout/BasicTable";
import { useAuth } from "../../context/auth";

const AllOrders = () => {
  const [auth, _] = useAuth();
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const headers = [
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 160,
      headerAlign: 'center',
    },
    {
      field: 'id',
      headerName: 'Order #',
      width: 240,
      headerAlign: 'center',
    },
    {
      field: 'paymentStatus',
      headerName: 'Payment Status',
      width: 160,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'customer',
      headerName: 'Customer',
      width: 240,
      valueGetter: (params) =>
        `${params.row.username || ''} | ${params.row.number.slice(3) || ''}`,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 160,
      headerAlign: 'center',
      align: 'center',
      // renderCell: (params) => (
      //   <div>
      //     <a>{params.row.username}</a>
      //     <br/>
      //     <a>{params.row.number}</a>
      //   </div>
      // )

    },
  ]

  //getall products
  const getAllOrders = async () => {
    fetch(`/api/orders?userId=${auth?.user?._id}`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          data[i].createdAt = new Date(data[i].createdAt).toLocaleDateString();
          data[i].paymentStatus = data[i].paymentStatus.toUpperCase();
          data[i].id = data[i]._id;
          data[i].product = '';
          data[i].lineItems.forEach(item => {
            data[i].product += item.name + '*' + item.quantity + ', ';
          })
        }
        setOrders(data);
      })
      .catch((error) => {
        console.error('Error fetching orders data:', error);
      });
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <main className="dashboard account " data-scroll-container id="home">

      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div class="mainbar">
          <DashNav />
          <div className="content" style={{ padding: "0" }}>
            <div className="heading ">
              <h1 className="text-center" style={{ margin: "0" }}>Your Orders</h1>
            </div>
          </div>

          <break />

          <BasicTable headers={headers} data={orders} />

        </div>
      </div>
    </main>
  );
};

export default AllOrders;
