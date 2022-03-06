import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import LogOut from "./pages/Logout";
import Admin from "./component/Admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:subcategorychild/:slug" element={<Products />} />
        <Route
          path="products/singleproduct/:slug"
          element={<Singleproduct />}
        />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="products/all/:slug" element={<Products />} /> */}
        {/* <Route path="products/:featured/:slug" element={<Products />} /> */}
      </Routes>
    </>
  );
}

export default App;
