import { useState, useEffect } from "react";
import ProductContext from "./ProductContext";
import { GetProducts } from "../services/Products";

const ProductState = (props) => {
  //   products
  const [allproducts, setAllProducts] = useState([]);
  const getproduct = async () => {
    const prod = await GetProducts();
    setAllProducts(prod.data);
  };
  useEffect(() => {
    getproduct();
  }, []);

  //   set products in pages
  const state = {
    products: [],
    sortedProducts: [],
    featuredProducts: [],
  };
  const [product, setProduct] = useState(state);
  useEffect(() => {
    let products = allproducts;
    let featuredProducts = allproducts.filter((item) => {
      return (
        (item.subcategorychild._id === 1 && item.offerprice < 50000) ||
        (item.subcategorychild._id === 3 && item.brand._id === 4) ||
        (item.subcategorychild._id === 15 && item.brand._id === 9)
      );
    });
    setProduct({ products, featuredProducts, sortedProducts: products });
  }, [allproducts]);

  // var getProduct = (slug) => {
  //   let tempProducts = product.products;
  //   const sproduct = tempProducts.find((item) => item._id === slug);
  //   return sproduct;
  // };

  return (
    <ProductContext.Provider value={product}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductState;
