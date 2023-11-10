import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";
import Preloader from "./pages/Basic/preloader";
import ScrollSmoothProvider from "./pages/hooks/ScrollSmoothProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <Preloader/>
    <ScrollSmoothProvider>
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
    </ScrollSmoothProvider>
    
  </AuthProvider>
);


reportWebVitals();
