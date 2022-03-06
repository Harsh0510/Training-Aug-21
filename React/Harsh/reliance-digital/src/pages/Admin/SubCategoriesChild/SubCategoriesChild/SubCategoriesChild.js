import { useParams, Link, useNavigate } from "react-router-dom";
import "./SubCategoriesChild.css";
import { GetSubCategories } from "../../../../services/SubCategory";
import {
  GetSubCategoriesChild,
  UpdateSubCategoriesChild,
  GetSubCategoriesChildById,
} from "../../../../services/SubCategoriesChild";
import { useEffect, useState } from "react";
export default function Subcategorychild() {
  let { id } = useParams();
  let navigate = useNavigate();

  let [subcategoryData, setSubCategoryData] = useState([]);

  let [subcategorychildData, setSubcategoryChildData] = useState([]);
  useEffect(() => {
    GetSubCategories()
      .then((res) => setSubCategoryData(res.data))
      .catch((err) => console.log(err));

    GetSubCategoriesChild()
      .then((res) => setSubcategoryChildData(res.data))
      .catch((err) => console.log(err));

    GetSubCategoriesChildById(id)
      .then((res) => {
        setName(res.data.name);
        setSubCategory(res.data.subcategory);
      })
      .catch((er) => console.log(er));
  }, []);

  let [name, setName] = useState("");

  let [subcategory, setSubCategory] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    UpdateSubCategoriesChild(id, {
      name: name,
      subcategory: parseInt(subcategory),
    })
      .then((res) => {
        if (res) {
          alert("Subcategorychild updated successfully");
          navigate("/admin/subcategorieschild");
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="subcategorychild-edit">
      <div className="subcategorychildTitleContainer">
        <h1 className="subcategorychildTitle">Subcategorychild</h1>
      </div>
      <div className="subcategorychildBottom">
        <form className="subcategorychildForm " onSubmit={handleSubmit}>
          <div className="subcategorychildFormLeft ">
            <input
              type="text"
              placeholder="Subcategorychild Name*"
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
              {subcategoryData.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <button className="subcategorychildButton" type="submit">
              Update
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
    </div>
  );
}
