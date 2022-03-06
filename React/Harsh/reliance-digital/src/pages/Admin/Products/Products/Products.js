import { useParams, Link, useNavigate } from "react-router-dom";
import "./Products.css";
import { GetSubCategoriesChild } from "../../../../services/SubCategoriesChild";
import {
  UpdateProducts,
  GetProducts,
  GetProductById,
} from "../../../../services/Products";
import { GetBrands } from "../../../../services/Brand";
import { GetDiscount } from "../../../../services/Discount";

import { useEffect, useState } from "react";
export default function Product() {
  let { id } = useParams();
  let navigate = useNavigate();
  //   get subcategorychild
  let [subcategorychildData, setSubcategorychildData] = useState([]);
  let [brandData, setBrandData] = useState([]);
  let [discountData, setDiscountData] = useState([]);
  let [productData, setProductData] = useState([]);
  useEffect(() => {
    GetSubCategoriesChild()
      .then((res) => setSubcategorychildData(res.data))
      .catch((err) => console.log(err));

    GetBrands()
      .then((res) => setBrandData(res.data))
      .catch((err) => console.log(err));

    GetDiscount()
      .then((res) => setDiscountData(res.data))
      .catch((err) => console.log(err));

    GetProducts()
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));

    GetProductById(id)
      .then((res) => {
        setName(res.data.productName);
        setPrice(res.data.price);
        setImg(res.data.image);
        setDescription(res.data.description);
        setBrand(res.data.brand);
        setDiscount(res.data.discount);
        setSubCategoryChild(res.data.subcategorychild);
      })
      .catch((er) => console.log(er));
  }, []);

  let [name, setName] = useState("");
  let [price, setPrice] = useState(0);
  let [img, setImg] = useState();
  let [description, setDescription] = useState([]);
  let [brand, setBrand] = useState(0);
  let [subcategorychild, setSubCategoryChild] = useState(0);
  let [discount, setDiscount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    UpdateProducts(id, {
      productName: name,
      description: JSON.stringify(description),
      price: price,
      subcategorychild: parseInt(subcategorychild),
      discount: parseInt(discount),
      brand: parseInt(brand),
      image: img,
    })
      .then((res) => {
        if (res) {
          alert("Product updated successfully");
          navigate("/admin/products");
        }
      })
      .catch((err) => console.log(err.response));
  }
  const uploadImage = async (files) => {
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "gtckqyp1");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drv5pusqd/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImg(file.secure_url);
  };

  return (
    <div className="product-edit">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
      </div>
      <div className="productBottom">
        <form className="productForm " onSubmit={handleSubmit}>
          <div className="productFormLeft ">
            <input
              type="text"
              placeholder="Product Name*"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <textarea
              placeholder="Description"
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value.split(","));
              }}
            ></textarea>

            <div>
              <input
                type="file"
                name="file"
                placeholder="upload image"
                onChange={(e) => {
                  uploadImage(e.target.files);
                }}
              />
              <img src={img} width="50px" height="50px"></img>
            </div>

            <input
              type="number"
              placeholder="3000"
              required
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <select
              required
              onChange={(e) => {
                setSubCategoryChild(e.target.value);
              }}
            >
              {subcategorychildData.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>

            <select
              required
              onChange={(e) => {
                setDiscount(e.target.value);
              }}
            >
              {discountData.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.percentage}
                  </option>
                );
              })}
            </select>

            <select
              required
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            >
              {brandData.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <button className="productButton" type="submit">
              Update
            </button>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {/* <img src={img} alt="" className="productUploadImg" /> */}
              {/* <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} /> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
