import { createContext, useContext, useState, useEffect } from "react";
import { GetCart, PostCart, UpdateCart, DeleteCart } from "../services/Cart";
const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //   get cart
  const fnCart = async () => {
    try {
      const cart = await GetCart();
      setCart(cart.data);
    } catch (err) {
      console.log(err.message || err);
    }
  };

  useEffect(() => {
    fnCart();
  }, []);

  //   create cart
  const fnCreateCart = async (data) => {
    try {
      const cart = await PostCart(data);
      //   setCart([...cart, cart.data]);

      fnCart();
    } catch (err) {
      console.log(err.message || err);
    }
  };

  //   update cart
  const fnUpdateCart = async (id, data) => {
    try {
      const cart = await UpdateCart(id, data);
      fnCart();
    } catch (err) {
      console.log(err.message || err);
    }
  };

  //   delete cart
  const fnDeleteCart = async (id) => {
    try {
      const deleteCart = await DeleteCart(id);
      const updatedCart = cart.filter((item) => item._id !== id);
      setCart(updatedCart);
    } catch (err) {
      console.log(err.message || err);
    }
  };

  // quantity of items

  const totalItems = () => {
    var sum = cart.reduce((sum, value) => {
      return sum + value.quantity;
    }, 0);
    return sum;
  };

  const values = {
    cart,
    fnCreateCart,
    fnUpdateCart,
    fnDeleteCart,
    fnCart,
    totalItems,
  };

  return (
    <>
      <CartContext.Provider value={values}>{children}</CartContext.Provider>
    </>
  );
}
export { useCartContext, CartProvider };
