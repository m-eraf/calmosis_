import Footer from "../Basic/footer";
import Navbar from "../Basic/navbar";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { useAuth } from "../../context/auth";
import {loadStripe} from '@stripe/stripe-js';
import {AiOutlineDelete} from "react-icons/ai"
import {MdOutlineDeleteOutline} from "react-icons/md";
const PeaceMantra = () => {
  const [isOverlay, setIsOverlay] = useState(false);
  const [auth, setAuth] = useAuth();
  const peace_img = "./peace_shop.png";
  const Sleep_img = "./Sleep_shop.png";  //   form
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const coupouns = ["peace", "mantra", "peace mantra", "peace-mantra"];
  const [quanity, setQuanity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCart, setIsCart] = useState(false);

  const couponBtn = (e) => {
    e.preventDefault();

    if (coupouns.includes(couponCode.toLocaleLowerCase())) {
      alert("Coupon Applied");
    } else {
      alert("Coupon Invalid");
    }
  };

  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    if (auth.user) {
      fetch(`https://calmosiss.onrender.com/api/addresses?userId=${auth?.user?._id}`)
        .then((response) => response.json())
        .then((data) => {
          setAddresses(data);
        })
        .catch((error) => {
          console.error('Failed to fetch address data:', error);
        });
    }
  }, [auth?.user]);
  useEffect(() => {
    if (auth.user) {
      fetch(`https://calmosiss.onrender.com/get-cart?userId=${auth?.user?._id}`)
        .then((response) => response.json())
        .then((data) => {
          setCartItems(data);
          if (data.length === 0) {
            setIsEmpty(true);
          } else {
            setIsEmpty(false);
          }
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
        });
    }
  }, [auth?.user]);

  const handleDeleteCartItem = (itemId) => {
    // Make a DELETE request to the server to delete the cart item
    fetch(`https://calmosiss.onrender.com/api/delete-cart-item/${itemId}`, {
      method: 'DELETE',
    })    
      .then((response) => {
        if (response.status === 204) {
          // Successful deletion on the server, now remove the item from your local state
          const updatedCart = cartItems.filter((item) => item._id !== itemId); // Use _id to match cart items
          localStorage.setItem('cartData', JSON.stringify(updatedCart));
          setCartItems(updatedCart);
        } else {
          // Handle the case where the server encountered an error
          console.error('Error deleting cart item');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleDeleteAllAddresses = () => {
    setIsOverlay(true);

    // Get the currently logged-in user's ID from your authentication context or state
    const userId = auth?.user?._id; // Replace with the correct way to access the user's ID
    if (!userId) {
      // Handle the case when the user is not logged in
      return;
    }
  
    // Make a DELETE request to delete all addresses associated with the user
    fetch(`https://calmosiss.onrender.com/api/addresses/delete/${userId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setDeleteMessage(data.message);
        setAddresses([]);
      })
      .catch((error) => {
        console.error('Failed to delete addresses', error);
      });
  };
  
  const makePayment = async () => {
    const stripe = await loadStripe("pk_live_51O96PTSChD17SEYNqVr4YlBhQTBBRLFlMtQTq3qI5aLYiu3dBXk9x4TFSAhSueiKBbwYaGRmZiDPkSSabtyufbiQ00nGso4JIS"); 
      const body = {
      products: cartItems,
      peace_img: peace_img, 
      user: auth?.user?._id,
      username:auth?.user?.name,
      number: auth?.user?.phoneNumber,
      email: "auth?.user?.email"
    };

    const headers = {
      "Content-Type": "application/json",
    };
  
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
  
    const session = await response.json();
    // Redirect to the Stripe Checkout pa
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  
    if (result.error) {
      console.error(result.error);
    }
  };
  
  const increaseQuantity = (itemId, currentQuantity) => {
    // Calculate the new quantity
    const newQuantity = currentQuantity + 1; // Calculate the new quantity as needed
  
    // Update the cart items with the new quantity
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem._id === itemId) { // Use "_id" to compare with the item ID
        return { ...cartItem, quantity: newQuantity }; // Update the quantity property
      }
      return cartItem;
    });
  
    // Update the cart items in the state
    setCartItems(updatedCart);
  
    // Send an API request to update the item's quantity in the database
    fetch(`https://calmosiss.onrender.com/api/update-cart-item/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Item quantity updated successfully in the database
        } else {
          // Handle errors if the server encountered an issue
          console.error('Error updating item quantity');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      // Calculate the new quantity
      const newQuantity = currentQuantity - 1; // Calculate the new quantity as needed
  
      // Update the cart items with the new quantity
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem._id === itemId) { // Use "_id" to compare with the item ID
          return { ...cartItem, quantity: newQuantity }; // Update the quantity property
        }
        return cartItem;
      });
  
      // Update the cart items in the state
      setCartItems(updatedCart);
  
      // Send an API request to update the item's quantity in the database
      fetch(`https://calmosiss.onrender.com/api/update-cart-item/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newQuantity }),
      })
        .then((response) => {
          if (response.status === 200) {
            // Item quantity updated successfully in the database
          } else {
            // Handle errors if the server encountered an issue
            console.error('Error updating item quantity');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };
  

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = auth?.user?._id;
    const newAddress = {
      user: userId,
      name,
      email,
      mobile,
      gender,
      age,
      address,
      city,
      state,
      pincode,
    };

    try {
      const response = await fetch('https://calmosiss.onrender.com/api/addresses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAddress),
      });
      if (response.status === 201) {
        // Address created successfully
        console.log('Address created successfully');
        fetchAddresses();
        setIsOverlay(false);
      } else {
        console.error('Failed to create an address');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchAddresses = async () => {
    if (auth.user) {
      fetch(`https://calmosiss.onrender.com/api/addresses?userId=${auth?.user?._id}`)
        .then((response) => response.json())
        .then((data) => {
          setAddresses(data);
        })
        .catch((error) => {
          console.error('Failed to fetch address data:', error);
        });
    }
  };
 
  return (
    <>
      <main className="shop_list " >
        <Navbar />
        <div className="content  ">
          <div className="detailss sm:py-16 xs:py-8 py-12 sm:p-16 xs:p-8 px-6 py-12 md:max-w-[200vh] md:max-h-[100%] max-h-[70%] max-w-[200vh] flex justify-centre md:flex-row flex-col  sm:p-8 p-4"  >
            <div className=" relative max-md:top-[-4vh] ">
              {!auth?.user ? (
                <>
                  <div className="empty">
                    <img src="./flower_cart.png" alt="" />
                    <p>Please login to view your cart</p>
                  </div>
                </>
              ) : (
                <>
                  {cartItems.length === 0 ? (
                    <div className="empty">
                      <img src="./flower_cart.png" alt="" />
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="cards ">
                      {cartItems.map((item) => {
                        return (
<div
  className={`relative ${cartItems.length === 1 ? 'centered-item' : ''} md:left-[65%] rightdetails md:w-[300px]  xl:w-[400px] lg:max-w-[400px] xl:max-w[300px] lg:h-[250px] max-h-[500px] max-w-[400px]  flex text-center flex-col sm:p-10 p-4  relative`}
  key={item.id}
>
<div className=" relative md:absolute rightdetailsss 	  ">
{item.name === "Peace Mantra" && peace_img && (
                          <img
                            src={peace_img}
                            alt=""
                            className="md:w-[140px] w-[60px] md:h-[150px] h-[50px]"
                          />
                        )}
                        {item.name !== "Peace Mantra" && Sleep_img && (
                          <img
                            src={Sleep_img}
                            alt=""
                            className="md:w-[140px] w-[60px] md:h-[140px] h-[50px]"
                          />
                        )}
                      </div>
                            <div className="middle">
                            <h2 className="md:text-[25px] text-[15px]">{item.name}</h2>
                              <p className="md:text-[20px] text-[10px]" >
                                {item.flavour} - {item.variant}
                              </p>
                              <div className="p-2">
                                <button  className="" onClick={() => decreaseQuantity(item._id, item.quantity)} >-</button> &nbsp;&nbsp;|&nbsp;&nbsp;
                              <span>{item.quantity}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                              <button className="" onClick={() => increaseQuantity(item._id, item.quantity)} >+</button>
                              </div>
                              <p>{item.price}</p>

                            </div>
                            <div className="right md:right-[1vh] right-[5vh] md:top-[14vh] xl:top-[10vh] top-[8vh] md:text-[30px] text-[20px] items-end absolute  ">
                            <button onClick={() => handleDeleteCartItem(item._id)}>
<AiOutlineDelete/>        </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="lg:max-w-[600px] lg:h-[600px] max-h-[600px] max-w-[400px] flex justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[2px] border-[white] md:right-[10%] relative">
            <div className="center-itemss">
  {addresses.length > 0 ? (
    <>
      <a className="btn top-[5vh] text-[20px] right-[5vh] pointerr absolute" onClick={handleDeleteAllAddresses}>
        <AiOutlineDelete onClick={handleDeleteAllAddresses} />
      </a>
    </>
  ) : (
    <div></div>
  )}

  {addresses.map((address) => (
    <p className="addres center-itemsss" key={address._id}>
      Delivery Address: <br /> {address.name}, <br /> {address.mobile}, <br /> {address.address}, {address.city}, {address.state}, {address.pincode}
    </p>
  ))}


    <table className="modern-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
        <tr>
          <td>Doctor's consultation</td>
          <td>-₹500</td>
        </tr>
        <tr>
          <td>Order Total</td>
          <td>₹{calculateTotalPrice()}</td>
        </tr>
      </tbody>
    </table>

   

    <div className="full-width"></div>
    {addresses.length > 0 ? (
    <>
      <div className="btn" onClick={makePayment}>
        <a onClick={makePayment}>
          <span>Proceed to Payment</span>
          <svg width="58" height="46" viewBox="0 0 58 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="55" height="43" fill="#F2D101" stroke="#F2D101" strokeWidth="3" />
            <path
              d="M16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5V21.5ZM42.0607 24.0607C42.6464 23.4749 42.6464 22.5251 42.0607 21.9393L32.5147 12.3934C31.9289 11.8076 30.9792 11.8076 30.3934 12.3934C29.8076 12.9792 29.8076 13.9289 30.3934 14.5147L38.8787 23L30.3934 31.4853C29.8076 32.0711 29.8076 33.0208 30.3934 33.6066C30.9792 34.1924 31.9289 34.1924 32.5147 33.6066L42.0607 24.0607ZM16 24.5L41 24.5V21.5L16 21.5V24.5Z"
              fill="#466F44"
            />
          </svg>
        </a>
      </div>
    </>
  ) : (
      <div className="btn" onClick={() => setIsOverlay(true)}>
        <a href="#">
          <span>Add Address</span>
          <svg width="58" height="46" viewBox="0 0 58 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.5" y="1.5" width="55" height="43" fill="#F2D101" stroke="#F2D101" strokeWidth="3" />
            <path
              d="M16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5V21.5ZM42.0607 24.0607C42.6464 23.4749 42.6464 22.5251 42.0607 21.9393L32.5147 12.3934C31.9289 11.8076 30.9792 11.8076 30.3934 12.3934C29.8076 12.9792 29.8076 13.9289 30.3934 14.5147L38.8787 23L30.3934 31.4853C29.8076 32.0711 29.8076 33.0208 30.3934 33.6066C30.9792 34.1924 31.9289 34.1924 32.5147 33.6066L42.0607 24.0607ZM16 24.5L41 24.5V21.5L16 21.5V24.5Z"
              fill="#466F44"
            />
          </svg>
        </a>
      </div>
    )}
  </div>
</div>

          </div>
        </div>


        <Footer />
      </main>

      <div
        className={`overlay-shop ${isOverlay ? "open" : ""}`}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#shop"
      >
        <div className="close">
          <FiX onClick={() => setIsOverlay(false)} color="white" size={32} />
        </div>
        <div className="content">
          <div className="left">
            <form onSubmit={handleSubmit}>
              <div className="input-flex">
                <div className="form-control">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Email ID"
                  />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="mobile">Mobile *</label>
                <input
                  type="number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  id="mobile"
                  placeholder="Mobile Phone"
                />
              </div>

              <div className="input-flex">
                <div className="form-control">
                  <label htmlFor="gender">Gender *</label>
                  <div className="input-flex">
                    <div className="form-control gender">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={() => setGender("male")}
                      />{" "}
                      <span>Male</span>
                    </div>
                    <div className="form-control gender">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={() => setGender("female")}
                      />{" "}
                      <span>Female</span>
                    </div>
                    <div className="form-control gender">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={gender === "other"}
                        onChange={() => setGender("other")}
                      />
                      <span>Other</span>
                    </div>
                    <div className="form-control gender"></div>
                  </div>
                </div>

                <div className="form-control age">
                  <label htmlFor="age">Age *</label>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    id="age"
                    placeholder="Age"
                  />
                </div>
              </div>

              <div className="full-width">
                <div className="form-control">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    id="address"
                    placeholder="Address"
                  />

                  <div className="input-flex">
                    <div className="form-control">
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        id="city"
                        placeholder="City"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        id="state"
                        placeholder="State"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="number"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        id="pincode"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </div>
              </div>


              <button className="btnn" type="submit" >
                <a type="submit" >
                  <span>Add Address</span>
                  <svg
                    width="58"
                    height="46"
                    viewBox="0 0 58 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.5"
                      y="1.5"
                      width="55"
                      height="43"
                      fill="#F2D101"
                      stroke="#F2D101"
                      strokeWidth="3"
                    />
                    <path
                      d="M16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5V21.5ZM42.0607 24.0607C42.6464 23.4749 42.6464 22.5251 42.0607 21.9393L32.5147 12.3934C31.9289 11.8076 30.9792 11.8076 30.3934 12.3934C29.8076 12.9792 29.8076 13.9289 30.3934 14.5147L38.8787 23L30.3934 31.4853C29.8076 32.0711 29.8076 33.0208 30.3934 33.6066C30.9792 34.1924 31.9289 34.1924 32.5147 33.6066L42.0607 24.0607ZM16 24.5L41 24.5V21.5L16 21.5V24.5Z"
                      fill="#466F44"
                    />
                  </svg>
                </a>

              </button>
            </form>


          </div>


        </div>

      </div>
    </>
  );
};

export default PeaceMantra;
