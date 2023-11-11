import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Burger from "../Hero/BurgerMenu";
import Menu from "../Hero/Menu";
import {AiOutlineDelete} from "react-icons/ai"
import {RiDeleteBin5Line} from "react-icons/ri"
import {LiaUserCheckSolid} from "react-icons/lia"
import {RiUserAddLine} from "react-icons/ri"
const Navbar = ({ isHome = false }) => {
  const [isCart, setIsCart] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const Sleep_img = "./Sleep_shop.png";
  const peace_img = "./peace_shop.png";
  const [cartItems, setCartItems] = useState([]);
  const [auth, setAuth] = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  
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
  

  useEffect(() => {
    if (isCart) {
      // Reload the cart items when isCart state changes
      fetchCartItems();
    }
  }, [isCart]);

  const fetchCartItems = () => {
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
  };
  // Load cart items from local storage on component mount
  useEffect(() => {
    // Check if the user is logged in
    if (auth.user) {
      // Make an API request to fetch the cart data for the logged-in user
      fetch(`https://calmosiss.onrender.com/get-cart?userId=${auth?.user?._id}`)
        .then((response) => response.json())
        .then((data) => {
          // Update the cartItems state with the received data
          setCartItems(data);
  
          // Check if the cart is empty
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
  
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

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
  
  return (
    <>
       <nav className="real md:h-[15vh] h-[10vh] md:z-1 z-200	">
          <div className="left md:flex hidden">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div className="right  ">
            <ul>
            <div className="flex md:hidden" ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="flex right">
          <ul>
          <a href="/">
                <img className=" absolute max-w-[15vh] md:max-w-[40vh]  logo_image"   src="./white_name.svg" alt="" />  
                </a>

              <li className="md:flex hidden" >
                <a  href="/lagal/faq">FAQ</a>
  </li>
              <li className="md:flex hidden">              <a  href="/Contact">Contact</a>
  </li>
  </ul>
        </div>
            
              {!auth?.user ? (
                <>
                  <li className="nav-item ">
                    <NavLink to="/otplogin" className="nav-link">
                      < RiUserAddLine/>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <div
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className="nav-link dropdown-toggle"
                      style={{ border: "none" }}
                    >
                      <LiaUserCheckSolid/>
                    </div>
                    {showUserMenu && (
                      <ul className="dropdown-menu row">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" :
                              auth?.user?.role === 2 ? "doctor" : "user"                          }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/otplogin"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              )}
             <li
  onClick={() => {
    setIsCart(!isCart);
    fetchCartItems(); 
  }}
>
  <div className="cart-icon">
    <svg
      className="order"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
        stroke="#466F44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
        stroke="#466F44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="#466F44"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {cartItems.length > 0 && (
      <div className="cart-item-count">{cartItems.length}</div>
    )}
  </div>
</li>

            </ul>
          </div>
        </nav>

      <div className={isCart ? "cart active" : "cart"}>
     <div className="top">
        <p>Cart</p>
        <span
  onClick={() => {
    setIsCart(!isCart);
    fetchCartItems(); 
  }}
  href="#"
>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.25 1.75L1.75 19.25"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.75 1.75L19.25 19.25"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
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
  <div className="">
   {cartItems.map((item) => {
  return (
    <div
  className={`relative ${cartItems.length === 1 ? 'centered-item' : ''}  rightdetailss text-white lg:max-w-[400px] lg:h-[250px] max-h-[200px] max-w-[300px] flex text-center flex-col  relative`}
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
                            <div className="right md:right-[6vh] md:top-[4vh] md:text-[30px] text-[20px] items-end md:absolute relative ">
                            <button onClick={() => handleDeleteCartItem(item._id)}>
<AiOutlineDelete/>        </button>
                            </div>
                          </div>
  );
})}

    <div className="bottomm-btn">
      <div className="btn">
        <a href="/checkout">
          <span>Checkout</span>
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
      </div>
    </div>
  </div>
)}

              </>
            )}
      
    </div>
    </>
  );
};

export default Navbar;
