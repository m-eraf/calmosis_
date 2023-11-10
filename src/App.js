import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/about/page";
import Contact from "./pages/Contact.jsx";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/dashboadUser/Dashboard";
import PrivateRoute from "./components/Routes/Private";
// import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import DoctorRoute from "./components/Routes/DoctorRoutes";
import AdminDashboard from "./pages/dashboadAdmin/AdminDashboard";
import AddProduct from "./pages/dashboadAdmin/AddProduct";
import Search from "./pages/Search";
import CartPage from "./pages/CartPage";
import Blog from "./pages/blog/page";
import Shop from "./pages/legal/shop/page";
import PeaceMantra from "./pages/peace-mantra/page";
import Shipping from "./pages/legal/shipping/page";
import Store from "./pages/legal/store/page";
import FAQ from "./pages/legal/faq/page";
import OtpLogin from "./pages/Auth/Otp";
import OtpVerify from "./pages/Auth/Verify";
import OtpLOgin from "./OtpLOgin";
import DashboardOrders from "./pages/dashboadUser/DashboardOrders";
import DashboardPrescription from "./pages/dashboadUser/DashboardPrescription";
import DashboardAddress from "./pages/dashboadUser/DashboardAddress";
import DashboardPayment from "./pages/dashboadUser/DashboardPayment";
import AllUsers from "./pages/dashboadAdmin/AllUsers";
import CreateCoupon from "./pages/dashboadAdmin/Coupon";
import AdminSubscriptions from "./pages/dashboadAdmin/Subscriptions";
import AdminBlog from "./pages/dashboadAdmin/AddBlog";
import AdminPrescription from "./pages/dashboadAdmin/Prescription";
import AllProduct from "./pages/dashboadAdmin/AllProducts";
import AllOrders from "./pages/dashboadAdmin/AllOrders";
import DashboardDoctor from "./pages/DoctorDashBoard/DashboardDoctor";
import AddPrescriptionDoctor from "./pages/DoctorDashBoard/AddPrescription";
import AllPrescriptionDoctor from "./pages/DoctorDashBoard/AllPrescriptionDoctor";
import CheckoutPopup from "./pages/peace-mantra/CheckOut";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";
import SleepMantra from "./pages/sleep-mantra/page";
function App() {
  return (
    
    <>
    <div className="overflow-hidden">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/otplogin" element={<OtpLOgin/>} />
        <Route path="/checkout" element={<CheckoutPopup/>} />
        <Route path="/peace-mantra" element={<PeaceMantra />} />
        <Route path="/sleep-mantra" element={<SleepMantra />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/legal/shipping" element={<Shipping />} />
        <Route path="/legal/faq" element={<FAQ />} />
        <Route path="/legal/Store" element={<Store />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<DashboardOrders />} />
          <Route path="user/prescription" element={<DashboardPrescription />} />
          <Route path="user/address" element={<DashboardAddress />} />
          <Route path="user/payment" element={<DashboardPayment />} />
        </Route>
        <Route path="/dashboard" element={<DoctorRoute />}>
          <Route path="doctor" element={<DashboardDoctor />} />
          <Route path="doctor/addprescription" element={<AddPrescriptionDoctor />} />
          <Route path="doctor/allprescription" element={<AllPrescriptionDoctor />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/addproduct" element={<AddProduct />} />
          <Route path="admin/accounts" element={<AllUsers />} />
          <Route path="admin/coupon" element={<CreateCoupon />} />
          <Route path="admin/subscriptions" element={<AdminSubscriptions />} />
          <Route path="admin/blog" element={<AdminBlog />} />
          <Route path="admin/allprescription" element={<AdminPrescription />} />
          <Route path="admin/products" element={<AllProduct />} />
          <Route path="admin/orders" element={<AllOrders />} />

        </Route>
        <Route path="/register" element={<Register />} />
        {/* <Route path="/forgot-password" element={<ForgotPasssword />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/otp" element={<OtpLogin />} />
        <Route path="/verify" element={<OtpVerify />} /> */}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
      
    </>
  );
}

export default App;
