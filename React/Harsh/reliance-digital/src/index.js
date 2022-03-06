import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProductState from "./Context/ProductState";
import { AuthProvider } from "./Context/AuthContext";
import { OrderProvider } from "./Context/OrderContext";
import { CategoryProvider } from "./Context/CategoryContext";
import { CartProvider } from "./Context/CartContext";

ReactDOM.render(
  <AuthProvider>
    <ProductState>
      <CartProvider>
        <CategoryProvider>
          <OrderProvider>
            <React.StrictMode>
              <Router>
                <App />
              </Router>
            </React.StrictMode>
          </OrderProvider>
        </CategoryProvider>
      </CartProvider>
    </ProductState>
  </AuthProvider>,
  document.getElementById("root")
);
