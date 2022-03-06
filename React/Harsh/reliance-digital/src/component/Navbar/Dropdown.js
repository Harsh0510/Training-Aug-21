import React from "react";
import { useState, useEffect } from "react";
import { GetCategories } from "../../services/Categories";
import { GetSubCategories } from "../../services/SubCategory";
import { GetSubCategoriesChild } from "../../services/SubCategoriesChild";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Dropdown() {
  // set categories
  const [categories, setCategories] = useState([]);
  const category = async () => {
    const cat = await GetCategories();
    setCategories(cat.data);
  };

  useEffect(() => {
    category();
  }, []);

  // set subcategories
  const [subcategories, setSubCategories] = useState([]);
  const subcategory = async () => {
    const sub = await GetSubCategories();
    setSubCategories(sub.data);
  };

  useEffect(() => {
    subcategory();
  }, []);

  // set subcategorieschild
  const [subcategorieschild, setSubCategoriesChild] = useState([]);
  const subcategorieschildren = async () => {
    const subc = await GetSubCategoriesChild();
    setSubCategoriesChild(subc.data);
  };
  useEffect(() => {
    subcategorieschildren();
  }, []);

  return (
    <>
      <div className="nav-parent">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <FaBars className="bar" />
            </button>
            <div className="collapse navbar-collapse" id="navbar">
              {categories.map((item) => {
                return (
                  <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                        <span
                          className="nav-link dropdown-toggle categories"
                          role="button"
                          data-bs-toggle="dropdown"
                        >
                          {item.name}
                        </span>
                        <ul className="dropdown-menu">
                          <div className="cat">
                            {subcategories
                              .filter((i) => item._id === i.category)
                              .map((subcategoryData) => {
                                var subcategoryslug = `/products/subc/${subcategoryData._id}`;
                                return (
                                  <>
                                    <li className="sub">
                                      <span className="dropdown-item">
                                        <Link
                                          to={subcategoryslug}
                                          className="text-decoration-none text-white subc"
                                        >
                                          {subcategoryData.name}
                                        </Link>
                                      </span>
                                      {subcategorieschild
                                        .filter(
                                          (subcategoriesChild) =>
                                            subcategoryData._id ===
                                            subcategoriesChild.subcategory
                                        )
                                        .map((subcategorieschildData) => {
                                          var slug = `/products/sc/${subcategorieschildData._id}`;
                                          return (
                                            <>
                                              <span className="subcategorieschild">
                                                <Link
                                                  to={slug}
                                                  className="text-decoration-none text-white subchild"
                                                >
                                                  {subcategorieschildData.name}
                                                </Link>
                                              </span>
                                            </>
                                          );
                                        })}
                                    </li>
                                  </>
                                );
                              })}
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
