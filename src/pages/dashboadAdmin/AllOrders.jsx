import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DashNav from "../../components/Layout/dash-nav";
const AllOrders = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("https://calmosiss.onrender.com/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <main className="dashboard account " data-scroll-container id="home">

      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div class="mainbar">
          <DashNav/>
          <div className="content">
            <div className="heading ">
          <h1 className="text-center">All Products List</h1>

            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">

                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </div>
          
        </div>
      </div>
      </main>
  );
};

export default AllOrders;
