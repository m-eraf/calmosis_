import Footer from "../Basic/footer";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Burger from "../Hero/BurgerMenu";
import Menu from "../Hero/Menu";
import { AiOutlineDelete } from "react-icons/ai";

import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaUserCheckSolid } from "react-icons/lia";
import { RiUserAddLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const items = [
  {
    question:
      "Is it legal to consume products with the Cannabis leaf Extract in India?",
    answer:
      "As per government regulations, medicines containing any schedule E (1) ingredient such as the Cannabis Sativa leaf can be legally taken under medical supervision. All products meant for oral consumption can only be purchased against a valid prescription issued by a registered medical practitioner.",
  },
  {
    question: "Can we travel with Calmosis products?",
    answer:
      "Yes, it is possible to travel with Calmosis products, but only with a valid medical prescription. It is important to note that laws and regulations regarding cannabis vary by country and state, so it's essential to research and understand the specific rules and regulations of the destination you are traveling to beforehand.",
  },
  {
    question:
      "Can individuals with certain health conditions safely use cannabis extract?",
    answer:
      "Not recommended for: Individuals under 18,Pregnant or breastfeeding women,Those with heart conditions,Individuals with diabetes",
  },
];
const itemss = [
  {
    question: "Sleep Induction",
    answer:
      "Cannabis extract is recognized for its calming effects, making it a potential aid in inducing sleep by promoting relaxation and reducing insomnia symptoms.",
  },
  {
    question: "Anxiety Relief",
    answer:
      "Cannabis extract may alleviate anxiety symptoms, interacting with the endocannabinoid system to promote a sense of calm and relaxation.",
  },
  {
    question: "Pain Relief",
    answer:
      "Cannabis extract's analgesic effects serve as a natural means to mitigate pain, providing a potential alternative for those seeking relief.",
  },
  {
    question: "Digestive Aid",
    answer:
      "Cannabis extract has been associated with aiding digestion, suggesting its potential in promoting digestive health through its interaction with the endocannabinoid system.",
  },
];
const SleepMantra = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [, setActive] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleClick = () => {
    setIsMoving(!isMoving);
  };
  const delayConst = 2.2;
  const groupControls = useAnimation();
  const subtractControls = useAnimation();
  const [isAboveShopVisible, setIsAboveShopVisible] = useState(true); // Add state variable
  const [isGroupVisible, setIsGroupVisible] = useState(true);
  const [isSubtractVisible, setIsSubtractVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Initialize the loading state

  const [totalPrice, setTotalPrice] = useState(); // Add total price state
  const [auth, setAuth] = useAuth();

  const imageRef = React.useRef(null);
  const [flavour, setFlavour] = useState("Honey");
  const [variant, setVariant] = useState("20ml");

  const [isFennel, setIsFennel] = useState(true);
  const [isPeppermint, setIsPeppermint] = useState(false);

  const [is10ml, setIs10ml] = useState(true);
  const [is30ml, setIs30ml] = useState(false);

  const [quanity, setQuanity] = useState(1);
  const [, setScrolled] = useState(false);

  const [isOneTime, setIsOneTime] = useState(true);
  const [isSubscription, setIsSubscription] = useState(false);

  const [isCart, setIsCart] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const Sleep_img = "./Sleep_shop.png";
  const peace_img = "./peace_shop.png";

  const [open, setOpen] = React.useState(false);
  const node = React.useRef();

  const increaseQuantity = (itemId, currentQuantity) => {
    // Calculate the new quantity
    const newQuantity = currentQuantity + 1; // Calculate the new quantity as needed

    // Update the cart items with the new quantity
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem._id === itemId) {
        // Use "_id" to compare with the item ID
        return { ...cartItem, quantity: newQuantity }; // Update the quantity property
      }
      return cartItem;
    });
    // Update the cart items in the state
    setCartItems(updatedCart);

    // Send an API request to update the item's quantity in the database
    fetch(`/api/update-cart-item/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Item quantity updated successfully in the database
        } else {
          // Handle errors if the server encountered an issue
          console.error("Error updating item quantity");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      // Calculate the new quantity
      const newQuantity = currentQuantity - 1; // Calculate the new quantity as needed

      // Update the cart items with the new quantity
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem._id === itemId) {
          // Use "_id" to compare with the item ID
          return { ...cartItem, quantity: newQuantity }; // Update the quantity property
        }
        return cartItem;
      });

      // Update the cart items in the state
      setCartItems(updatedCart);

      // Send an API request to update the item's quantity in the database
      fetch(`/api/update-cart-item/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newQuantity }),
      })
        .then((response) => {
          if (response.status === 200) {
            // Item quantity updated successfully in the database
          } else {
            // Handle errors if the server encountered an issue
            console.error("Error updating item quantity");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
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
      fetch(`/get-cart?userId=${auth?.user?._id}`)
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
          console.error("Error fetching cart data:", error);
        });
    }
  };
  // Load cart items from local storage on component mount
  useEffect(() => {
    // Check if the user is logged in
    if (auth.user) {
      // Make an API request to fetch the cart data for the logged-in user
      fetch(`/get-cart?userId=${auth?.user?._id}`)
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
          console.error("Error fetching cart data:", error);
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
    fetch(`/api/delete-cart-item/${itemId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          // Successful deletion on the server, now remove the item from your local state
          const updatedCart = cartItems.filter((item) => item._id !== itemId); // Use _id to match cart items
          localStorage.setItem("cartData", JSON.stringify(updatedCart));
          setCartItems(updatedCart);
        } else {
          // Handle the case where the server encountered an error
          console.error("Error deleting cart item");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToPosition = () => {
  //   setActive("");
  //   scrollTo(650, 1000);
  //   // Scroll to position 650 with a duration of 1000ms (1 second)
  // };

  // const scrollTo = (to, duration) => {
  //   const start = window.scrollY;
  //   const change = to - start;
  //   let currentTime = 0;
  //   const increment = 20; // Adjust the animation smoothness

  //   const animateScroll = () => {
  //     currentTime += increment;
  //     const val = easeInOutCubic(currentTime, start, change, duration);
  //     window.scrollTo(0, val);
  //     if (currentTime < duration) {
  //       requestAnimationFrame(animateScroll);
  //     }
  //   };

  //   animateScroll();
  // };

  // // Easing function for smooth animation (cubic ease-in-out)
  // const easeInOutCubic = (t, b, c, d) => {
  //   if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
  //   return (c / 2) * ((t -= 2) * t * t + 2) + b;
  // };

  //   form

  const handleImageSwap = async () => {
    if (!isGroupVisible) {
      return;
    }

    // Start the animations
    groupControls.start({ y: -300, opacity: 1 });
    subtractControls.start({ y: 600, opacity: 1 });
    setTimeout(async () => {
      await groupControls.start({ opacity: 0, zIndex: -1 });
      await subtractControls.start({ opacity: 0, zIndex: -1 });
      setIsGroupVisible(false);
      setIsSubtractVisible(false);
    }, 1000);
  };

  const addToCart = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting the form
    fetchCartItems();

    if (!auth?.user) {
      // If the user is not logged in, display an error toast message
      toast.error("Please log in to add items to the cart", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000, // Adjust the duration as needed
        style: {
          background: "black",
          color: "white",
        },
      });
      fetchCartItems();
      setLoading(false); // Set loading state back to false
      return;
    }

    if (!flavour || !variant || !quanity) {
      alert("Please fill all the fields");
      return;
    }

    const user = auth.user._id;
    const itemData = {
      name: "Sleep Mantra",
      flavour,
      user,
      variant,
      quantity: quanity,
      price: calculatePrice(flavour, variant, quanity),
      isOneTime,
      isSubscription,
    };

    try {
      const response = await fetch("/api/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      if (response.status === 201) {
        // Item added to cart successfully
        console.log("Item added to cart successfully");
        toast.success("Item added to cart", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
          style: {
            background: "black",
            color: "white",
          },
        });
        setLoading(false); // Set loading state back to false when the API request is complete
      } else {
        alert("Failed to add item to cart. Please try again");
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const calculatePrice = (flavour, variant, quantity) => {
    // Define a price map based on flavor and variant
    const priceMap = {
      Honey: {
        "20ml": 4500, // Price for Fennel 10ml
      },
    };

    if (priceMap[flavour] && priceMap[flavour][variant]) {
      const unitPrice = priceMap[flavour][variant];
      return unitPrice * quantity;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const delay = 3900; // 5 seconds in milliseconds
    const timer = setTimeout(() => {
      setIsAboveShopVisible(false); // Hide the above_shop element
    }, delay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const delay = 3000; // 5 seconds in milliseconds
    const timer = setTimeout(() => {
      handleImageSwap();
    }, delay);

    return () => clearTimeout(timer);
  }, []);
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
                  <img className=" absolute max-w-[15vh] md:max-w-[40vh]  logo_image" src="./white_name.svg" alt="" />
                </a>

                <li className="md:flex hidden" >
                  <a href="/blog">Blog</a>
                </li>
                <li className="md:flex hidden">              <a href="/Contact">Contact</a>
                </li>
              </ul>
            </div>

            {!auth?.user ? (
              <>
                <li className="nav-item ">
                  <NavLink to="/otplogin" className="nav-link">
                    < RiUserAddLine />
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
                    <LiaUserCheckSolid />
                  </div>
                  {showUserMenu && (
                    <ul className="dropdown-menu row">
                      <li>
                        <NavLink
                          to={`/dashboard/${auth?.user?.role === 1 ? "admin" :
                              auth?.user?.role === 2 ? "doctor" : "user"}`}
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
                      className={`relative ${cartItems.length === 1 ? "centered-item" : ""
                        }  rightdetailss text-white lg:max-w-[400px] lg:h-[250px] max-h-[200px] max-w-[300px] flex text-center flex-col  relative`}
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
                        <h2 className="md:text-[25px] text-[15px]">
                          {item.name}
                        </h2>
                        <p className="md:text-[20px] text-[10px]">
                          {item.flavour} - {item.variant}
                        </p>
                        <div className="p-2">
                          <button
                            className=""
                            onClick={() =>
                              decreaseQuantity(item._id, item.quantity)
                            }
                          >
                            -
                          </button>{" "}
                          &nbsp;&nbsp;|&nbsp;&nbsp;
                          <span>{item.quantity}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                          <button
                            className=""
                            onClick={() =>
                              increaseQuantity(item._id, item.quantity)
                            }
                          >
                            +
                          </button>
                        </div>
                        <p>{item.price}</p>
                      </div>
                      <div className="right md:right-[6vh] md:top-[4vh] md:text-[30px] text-[20px] items-end md:absolute relative ">
                        <button onClick={() => handleDeleteCartItem(item._id)}>
                          <AiOutlineDelete />{" "}
                        </button>
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

      <main className="shop_list" id="shop" data-scroll-container>
        <div className="heightt">

        </div>
        <div className="content">
          {/* <div className="home">
            {isAboveShopVisible && (
              // <motion.div
              //   className="above_shop"
              //   initial={{ opacity: 0, y: 100 }}
              //   animate={{ opacity: 1, y: 0 }}
              //   transition={{ duration: 1.2, delay: delayConst }}
              // >
              //   <div className="labell">
              //     <div className="text-wrapperr ">Sleep mantra</div>
              //   </div>
              //   <div className="box">
              //     <div className="ellipse" />
              //   </div>
              //   <motion.img
              //     onClick={handleImageSwap}
              //     className="group"
              //     src="./group.png"
              //     alt=""
              //     initial={{ opacity: 1, zIndex: 5 }}
              //     animate={groupControls}
              //   />
              //   <motion.img
              //     onClick={handleImageSwap}
              //     className="subtract"
              //     src="./subtract.png"
              //     alt=""
              //     initial={{ opacity: 1, zIndex: 5 }}
              //     animate={subtractControls}
              //   />

              //   <a onClick={scrollToPosition}>
              //     <img className="rotates" src="./Group5.png" alt="" />
              //   </a>
              // </motion.div>
            )}
          </div> */}

          <motion.div
            // when scrolling change y from middle to initial
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="shop z-10	"
          >
            <div className=" left">
              <h1>Sleep Mantra</h1>
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  // delay: delayConst + 0.5,
                  ease: "easeInOut",
                }}
                className="right md:hidden flex"
              >
                <img src="./Sleep_inner_shop.png" alt="" />
              </motion.div>
              <div>
                {" "}
                <p>
                  Introducing Sleep Mantra - your Ayurvedic ally for a
                  revitalizing night's sleep! Our expertly crafted elixir
                  synchronizes with your Endocannabinoid System (ECS) to ensure
                  you awaken refreshed and prepared for a new day. Quality sleep
                  is essential for a well-rested and vibrant life, and "Sleep
                  Mantra" is your guide to achieving Ayurvedic well-being.
                  <br /> <a href="#desc-Sleep">Know More</a>
                </p>
              </div>
              <div className="price">
                ₹4500
              </div>

              <div className="row">
                <div className="fennel">
                  <p>Flavour</p>
                  <div className="choose">
                    <span
                      onClick={() => {
                        setIsFennel(true);
                        setIsPeppermint(false);
                        setFlavour("Honey");
                      }}
                      className={isFennel ? "selected" : ""}
                    >
                      Honey
                    </span>


                  </div>
                </div>

                <div className="variants relative md:left-[-15vh]">
                  <p>Variant</p>
                  <div className="choose">

                    <span
                      onClick={() => {
                        setIs10ml(false);
                        setIs30ml(true);
                        setVariant("20ml");
                      }}
                      className={is30ml ? "selected" : ""}
                    >
                      20ml
                    </span>
                  </div>
                </div>
              </div>

              <div className="quanity">
                <p>Quantity</p>
                <div className="quan">
                  <span
                    onClick={() => {
                      if (quanity > 1) {
                        setQuanity(quanity - 1);
                      }
                    }}
                  >
                    -
                  </span>
                  <span>{quanity}</span>
                  <span
                    onClick={() => {
                      if (quanity < 99) {
                        setQuanity(quanity + 1);
                      }
                    }}
                  >
                    +
                  </span>
                </div>
              </div>

              <div className="choose subscription">
                <span
                  onClick={() => {
                    setIsOneTime(true);
                    setIsSubscription(false);
                  }}
                  className={isOneTime ? "selected" : ""}
                >
                  One-time purchase: ₹4500
                </span>


              </div>

              <div className="btns one">
                <div className="btn" onClick={addToCart}>
                  <a href="#">
                    {loading ? (
                      <div className="simple-spinner">
                        <span></span>
                      </div>
                    ) : (
                      "Add to Cart"
                    )}
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
                        stroke-width="3"
                      />
                      <path
                        d="M16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5V21.5ZM42.0607 24.0607C42.6464 23.4749 42.6464 22.5251 42.0607 21.9393L32.5147 12.3934C31.9289 11.8076 30.9792 11.8076 30.3934 12.3934C29.8076 12.9792 29.8076 13.9289 30.3934 14.5147L38.8787 23L30.3934 31.4853C29.8076 32.0711 29.8076 33.0208 30.3934 33.6066C30.9792 34.1924 31.9289 34.1924 32.5147 33.6066L42.0607 24.0607ZM16 24.5L41 24.5V21.5L16 21.5V24.5Z"
                        fill="#466F44"
                      />
                    </svg>
                  </a>
                </div>
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
                        stroke-width="3"
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

            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                // delay: delayConst + 0.5,
                ease: "easeInOut",
              }}
              className="right md:flex hidden"
            >
              <img src="./Sleep_inner_shop.png" alt="" />
            </motion.div>
          </motion.div>

          <div className="about">
            <div className="desc" id="desc-Sleep">
              <h1>Description</h1>

              <p className="md:text-[20px] text-[17px]">
                <span>
                  Presenting "Sleep Mantra," your Ayurvedic ally for a
                  revitalizing night's sleep! Expertly crafted, this elixir
                  synchronizes with your Endocannabinoid System (ECS) to ensure
                  you awaken refreshed and prepared for a new day. Quality sleep
                  is your gateway to a well-rested and vibrant life, and "Sleep
                  Mantra" is your guide to Ayurvedic well-being.
                </span>

                <span>
                  Embark on your journey to a more balanced, tranquil, and
                  vibrant life with "Sleep Mantra" – the epitome of
                  CBD-enriched, full-spectrum tranquility elixirs. Our carefully
                  crafted blend is designed to enhance your sleep experience,
                  ensuring a restful night for a rejuvenated and revitalized
                  life. Order now and unlock the gateway to a good night's sleep
                  for a better, more fulfilling life.
                </span>
              </p>
            </div>
            <div className="howw">
              <div className="benefits">
                <div className="inner">
                  <div className="left">
                    <h1>Benefits</h1>

                    <p className="md:text-[20px] text-[17px]">
                      Welcome to a realm where we're more than just a brand;
                      we're your partners in achieving a healthier, more
                      balanced life. Our journey is inspired by Naturopathy and
                      the timeless wisdom of the Vedas, particularly the revered
                      Atharva Veda, where Cannabis is celebrated as one of the
                      five sacred plants. These sacred plants, central to
                      Ayurveda, include Cannabis, Sandalwood, Tulsi, Jasmine,
                      and Neem each contributing to happiness, well-being, and
                      holistic health in unique ways.
                    </p>
                  </div>

                  <div className="right">
                    <img src="./Sleep_shop_item.png" alt="" />
                  </div>
                </div>
                <div className="absolute bett flex left-[140vh]">
                  <Accordion style={{ marginBottom: "30px" }}>
                    <AccordionItem className="accordion-item">
                      {itemss.map((item, index) => (
                        <AccordionItem
                          key={index}
                          className="accordion-item-child"
                        >
                          <AccordionItemHeading>
                            <AccordionItemButton className="accordion-button">
                              <div className="arrow-circle">&#9660;</div>
                              <h3>{item.question}</h3>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel className="relief">
                            <p>{item.answer}</p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      ))}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="how">
                <h1>How To Use</h1>
                <p>
                  <span>
                    This Ayurvedic Blend is most effective when taken
                    sublingually (under the tongue) after food. Use the dripper
                    provided along with the bottle to extract the recommended
                    amount. Shake the bottle well before use.
                  </span>

                  <span>
                    will add the how to use section when the images are their,
                    it would be much easier that way
                  </span>
                </p>

                <img className="rotatess" src="./how_to.png" />
              </div>
              {/* <div className="review">
                <h1>Reviews</h1>

                <p>
                  We will be using some service for this so design will be when
                  that is decided
                </p>
              </div> */}

              <div className="faq">
                <h1>FAQ</h1>

                <Accordion style={{ marginBottom: "30px" }}>
                  <AccordionItem>
                    {/* map with data */}
                    {items.map((item, index) => (
                      <AccordionItem key={index}>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <h3>{item.question}</h3>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p>{item.answer}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                  </AccordionItem>
                </Accordion>

                <a
                  href="/legal/faq"
                  style={{ marginTop: "20px" }}
                  className="btn-style-2"
                >
                  More Questions
                </a>
              </div>
              <div className="line relative top-[5vh] md:top-[0]" />
              <Footer />
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
};

export default SleepMantra;
