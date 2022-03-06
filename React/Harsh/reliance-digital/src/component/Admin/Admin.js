import { useEffect } from "react";
import "./Admin.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import UserList from "../../pages/Admin/Users/UserList/UserList";
import User from "../../pages/Admin/Users/User/User";
import NewUser from "../../pages/Admin/Users/NewUser/NewUser";
import Categories from "../../pages/Admin/Categories/Categories/Categories";
import NewCategories from "../../pages/Admin/Categories/NewCategories/NewCategories";
import CategoriesList from "../../pages/Admin/Categories/CategoriesList/CategoriesList";
import ProductList from "../../pages/Admin/Products/ProductsList/ProductsList";
import NewProducts from "../../pages/Admin/Products/NewProducts/NewProducts";
import Product from "../../pages/Admin/Products/Products/Products";
import SubCategoryList from "../../pages/Admin/SubCategories/SubCategoriesList/SubCategoriesList";
import NewSubCategory from "../../pages/Admin/SubCategories/NewSubCategories/NewSubCategory";
import Subcategory from "../../pages/Admin/SubCategories/SubCategories/SubCategories";
import SubCategoriesChildList from "../../pages/Admin/SubCategoriesChild/SubCategoriesChildList/SubCategoriesChildList";
import NewSubCategoryChild from "../../pages/Admin/SubCategoriesChild/NewSubCategoriesChild/NewSubCategoriesChild";
import Subcategorychild from "../../pages/Admin/SubCategoriesChild/SubCategoriesChild/SubCategoriesChild";
export default function Admin() {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <div className="others">
          <Routes>
            <Route exact path="users" element={<UserList />} />
            <Route exact path="users/:userId" element={<User />} />
            <Route exact path="newUser" element={<NewUser />} />
            <Route exact path="categories" element={<CategoriesList />} />
            <Route exact path="categories/:id" element={<Categories />} />
            <Route exact path="newCategory" element={<NewCategories />} />
            <Route exact path="subcategories" element={<SubCategoryList />} />
            <Route exact path="subcategories/:id" element={<Subcategory />} />
            <Route exact path="newSubCategory" element={<NewSubCategory />} />
            <Route
              exact
              path="subcategorieschild"
              element={<SubCategoriesChildList />}
            />
            <Route
              exact
              path="subcategorieschild/:id"
              element={<Subcategorychild />}
            />
            <Route
              exact
              path="newSubCategoryChild"
              element={<NewSubCategoryChild />}
            />
            <Route exact path="products" element={<ProductList />} />
            <Route exact path="newproducts" element={<NewProducts />} />
            <Route exact path="product/:id" element={<Product />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
