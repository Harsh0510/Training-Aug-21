import "./NewSubCategory.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostSubCategories } from "../../../../services/SubCategory";
import { GetCategories } from "../../../../services/Categories";

export default function NewSubCategory() {
  let navigate = useNavigate();

  let [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    GetCategories()
      .then((res) => setCategoryData(res.data))
      .catch((err) => console.log(err));
  }, []);

  let [name, setName] = useState("");
  let [category, setCategory] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    PostSubCategories({
      name: name,
      category: parseInt(category),
    })
      .then((res) => {
        if (res) {
          alert("Subcategory added successfully");
          navigate("/admin/subcategories");
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="newsubcategory">
      <h1 className="addsubcategoryTitle text-center">New Subcategory</h1>
      <form className="subcategoryForm " onSubmit={handleSubmit}>
        <div className="subcategoryFormLeft ">
          <input
            type="text"
            placeholder="Subcategory Name"
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
            <option value="" disabled selected>
              Select Category
            </option>
            {categoryData.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button className="subcategoryButton" type="submit">
            Add Subcategory
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
  );
}
