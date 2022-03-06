import { useParams, Link, useNavigate } from "react-router-dom";
import "./SubCategories.css";
import { GetCategories } from "../../../../services/Categories";
import {
  GetSubCategories,
  UpdateSubCategories,
  GetSubCategoryById,
} from "../../../../services/SubCategory";

import { useEffect, useState } from "react";
export default function Subcategory() {
  let { id } = useParams();
  let navigate = useNavigate();

  let [categoryData, setCategoryData] = useState([]);

  let [subcategoryData, setSubcategoryData] = useState([]);
  useEffect(() => {
    GetCategories()
      .then((res) => setCategoryData(res.data))
      .catch((err) => console.log(err));

    GetSubCategories()
      .then((res) => setSubcategoryData(res.data))
      .catch((err) => console.log(err));

    GetSubCategoryById(id)
      .then((res) => {
        setName(res.data.name);
        setCategory(res.data.category);
      })
      .catch((er) => console.log(er));
  }, []);

  let [name, setName] = useState("");

  let [category, setCategory] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    UpdateSubCategories(id, {
      name: name,
      category: parseInt(category),
    })
      .then((res) => {
        if (res) {
          alert("Subcategory updated successfully");
          navigate("/admin/subcategories");
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="subcategory-edit">
      <div className="subcategoryTitleContainer">
        <h1 className="subcategoryTitle">Subcategory</h1>
      </div>
      <div className="subcategoryBottom">
        <form className="subcategoryForm " onSubmit={handleSubmit}>
          <div className="subcategoryFormLeft ">
            <input
              type="text"
              placeholder="Subcategory Name*"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <select
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {categoryData.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <button className="subcategoryButton" type="submit">
              Update
            </button>
          </div>
          <div className="subcategoryFormRight">
            <div className="subcategoryUpload">
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
