import "./NewProducts.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostProducts } from "../../../../services/Products";
import { GetSubCategoriesChild } from "../../../../services/SubCategoriesChild";
import { GetDiscount } from "../../../../services/Discount";
import { GetBrands } from "../../../../services/Brand";
export default function NewProducts() {
  let navigate = useNavigate();

  let [subcategorychildData, setSubcategorychildData] = useState([]);
  let [brandData, setBrandData] = useState([]);
  let [discountData, setDiscountData] = useState([]);

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
    PostProducts({
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
          alert("Product added successfully");
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
    <div className="newProduct">
      <h1 className="addProductTitle text-center">New Product</h1>
      <form className="productForm " onSubmit={handleSubmit}>
        <div className="productFormLeft ">
          <input
            type="text"
            placeholder="Product Name"
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

          <input
            type="file"
            name="file"
            placeholder="upload image"
            required
            onChange={(e) => {
              uploadImage(e.target.files);
            }}
          />
          <input
            type="number"
            placeholder="price"
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
            <option value="" disabled selected>
              Select Subcategorychild
            </option>
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
              setBrand(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Select Brand
            </option>
            {brandData.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <label>discount</label>
          <select
            required
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Select Discount
            </option>
            {discountData.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.percentage}
                </option>
              );
            })}
          </select>
          <button className="productButton" type="submit">
            Add Product
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
  );
}
