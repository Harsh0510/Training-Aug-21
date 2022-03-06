import "./NewCategories.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostCategories } from "../../../../services/Categories";

export default function NewCategories() {
  let navigate = useNavigate();

  let [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    PostCategories({
      name: name,
    })
      .then((res) => {
        if (res) {
          alert("Category added successfully");
          navigate("/admin/categories");
        }
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <div className="newcategory">
      <h3 className="addcategoryTitle text-center">New Category</h3>
      <form className="categoryForm  mx-5" onSubmit={handleSubmit}>
        <div className="categoryFormLeft ">
          <input
            type="text"
            placeholder="Category Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="categoryButton mb-3" type="submit">
            Add Category
          </button>
        </div>
        <div className="categoryFormRight">
          <div className="categoryUpload">
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
