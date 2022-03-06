import { useParams, Link, useNavigate } from "react-router-dom";
import "./Categories.css";
import {
  GetCategories,
  GetCategoryById,
  UpdateCategories,
} from "../../../../services/Categories";
import { useEffect, useState } from "react";
export default function Categories() {
  let { id } = useParams();

  let navigate = useNavigate();

  let [name, setName] = useState("");
  useEffect(() => {
    GetCategoryById(id)
      .then((res) => {
        setName(res.data.name);
      })
      .catch((er) => console.log(er));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    UpdateCategories(id, {
      name: name,
    })
      .then((res) => {
        if (res) {
          alert("Category updated successfully");
          navigate("/admin/categories");
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <div className="category-edit">
      <div className="categoryTitleContainer">
        <h3 className="categoryTitle">Category</h3>
      </div>
      <div className="categoryBottom">
        <form className="categoryForm " onSubmit={handleSubmit}>
          <div className="categoryFormLeft ">
            <label>Category Name</label>
            <input
              type="text"
              placeholder="Category Name*"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button className="categoryButton" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
