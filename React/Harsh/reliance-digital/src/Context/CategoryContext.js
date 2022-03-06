import { createContext, useContext, useState, useEffect } from "react";
import {
  GetCategories,
  PostCategories,
  UpdateCategories,
  DeleteCategories,
} from "../services/Categories";
const CategoryContext = createContext();
const useCategoryContext = () => useContext(CategoryContext);

function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  //   get category
  const fnCategory = async () => {
    try {
      const category = await GetCategories();
      setCategories(category.data);
    } catch (err) {
      console.log(err.message || err);
    }
  };

  useEffect(() => {
    fnCategory();
  }, []);

  //   create category
  const fnCreateCategory = async (data) => {
    try {
      const category = await PostCategories(data);
      setCategories([...categories, category.data]);
    } catch (err) {
      console.log(err.message || err);
    }
  };

  //   update categories
  const fnUpdateCategory = async (id, data) => {
    try {
      const category = await UpdateCategories(id, data);
      fnCategory();
    } catch (err) {
      console.log(err.message || err);
    }
  };

  //   delete categories
  const fnDeleteCategory = async (id) => {
    try {
      const category = await DeleteCategories(id);
      const updatedCategory = categories.filter((item) => item.id !== id);
      setCategories(updatedCategory);
    } catch (err) {
      console.log(err.message || err);
    }
  };

  const values = {
    categories,
    fnCreateCategory,
    fnUpdateCategory,
    fnDeleteCategory,
  };

  return (
    <>
      <CategoryContext.Provider value={values}>
        {children}
      </CategoryContext.Provider>
    </>
  );
}
export { useCategoryContext, CategoryProvider };
