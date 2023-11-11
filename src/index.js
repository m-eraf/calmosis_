import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { CartProvider } from "./context/cart";
import Preloader from "./pages/Basic/preloader";
import ScrollSmoothProvider from "./pages/hooks/ScrollSmoothProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Preloader/>
    <ScrollSmoothProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ScrollSmoothProvider>
  </AuthProvider>
);
