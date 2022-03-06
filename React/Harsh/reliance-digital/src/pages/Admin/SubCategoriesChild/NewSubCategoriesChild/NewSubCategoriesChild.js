import "./NewSubCategoriesChild.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostSubCategoriesChild } from "../../../../services/SubCategoriesChild";
import { GetSubCategories } from "../../../../services/SubCategory";

export default function NewSubCategoryChild() {
  let navigate = useNavigate();

  let [subcategoryData, setSubCategoryData] = useState([]);

  useEffect(() => {
    GetSubCategories()
      .then((res) => setSubCategoryData(res.data))
      .catch((err) => console.log(err));
  }, []);

  let [name, setName] = useState("");
  let [subcategory, setSubCategory] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    PostSubCategoriesChild({
      name: name,
      subcategory: parseInt(subcategory),
    })
      .then((res) => {
        if (res) {
          alert("Subcategorychild added successfully");
          navigate("/admin/subcategorieschild");
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="newsubcategorychild">
      <h1 className="addsubcategorychildTitle text-center">
        New Subcategorychild
      </h1>
      <form className="subcategorychildForm " onSubmit={handleSubmit}>
        <div className="subcategorychildFormLeft ">
          <input
            type="text"
            placeholder="Subcategorychild Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <select
            required
            onChange={(e) => {
              setSubCategory(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Select Subcategory
            </option>
            {subcategoryData.map((item, index) => {
              return (
                <option key={index} value={item._id}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <button className="subcategorychildButton" type="submit">
            Add Subcategorychild
          </button>
        </div>
        <div className="subcategorychildFormRight">
          <div className="subcategorychildUpload">
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
