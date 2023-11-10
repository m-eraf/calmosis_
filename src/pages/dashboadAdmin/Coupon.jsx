import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import DashNav from "../../components/Layout/dash-nav";
const { Option } = Select;

const CreateCoupon = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");


  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <main className="dashboard account" data-scroll-container id="home">
      <AdminMenu />
      <div className="container-fluid mainbar m-3 p-3">
        <DashNav />
        <div className='login'>

          <div className="content">
            <form>
            <h1>Add Coupon</h1>

            <div className="m-1 w-75">
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Add Coupon"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>         
             
              <button className="btn btn-primary" onClick={handleCreate}>
                Add Coupon
              </button>
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </main>

  );
};

export default CreateCoupon;
