import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import ProductContext from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import { GetSubCategoriesChild } from "../../services/SubCategoriesChild";
import Product from "./Product";

export default function ProductMain() {
  const { slug, subcategorychild } = useParams();
  const a = useContext(ProductContext);
  const { featuredProducts, products } = a;
  // set subcategorieschild
  const [subcategorieschild, setSubCategoriesChild] = useState([]);
  const subcategorieschildren = async () => {
    const subc = await GetSubCategoriesChild();
    setSubCategoriesChild(subc.data);
  };
  useEffect(() => {
    subcategorieschildren();
  }, []);

  const sp = featuredProducts.filter(
    (item) => item.subcategorychild._id === parseInt(slug)
  );
  const scp = products.filter(
    (item) => item.subcategorychild._id === parseInt(slug)
  );
  let sc = subcategorieschild.filter(
    (item) => item.subcategory == parseInt(slug)
  );
  sc = sc.map((item) => item._id);

  const subcategoryproduct = products.filter((item) =>
    sc.includes(item.subcategorychild._id)
  );

  return (
    <div>
      {subcategorychild === "sc" && <Product products={scp} />}
      {subcategorychild === "fp" && <Product products={sp} />}
      {subcategorychild === "subc" && <Product products={subcategoryproduct} />}
    </div>
  );
}
