import "./SubCategoriesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {
  GetSubCategories,
  DeleteSubCategories,
} from "../../../../services/SubCategory";
import { GetCategories } from "../../../../services/Categories";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SubCategoriesList() {
  const [data, setData] = useState([]);
  const [categoriesdata, setCategoryData] = useState([]);
  useEffect(() => {
    GetCategories().then((res) => {
      setCategoryData(res.data);
    });
  }, []);
  useEffect(() => {
    GetSubCategories().then((res) => {
      const subcategoryData = res.data;
      const newData = subcategoryData.map((item) => {
        let category = categoriesdata.find(
          (catItem) => catItem._id == item.category
        );
        item.categoryName = category.name;
        return item;
      });
      setData(newData);
    });
  }, [categoriesdata]);

  // useEffect(() => {}, [data]);

  const subcategory = data?.map((item) => {
    const { __v, ...data } = item;
    const { _id: id, name, category, categoryName } = data;
    return {
      id,
      name,
      category,
      categoryName,
    };
  });

  const handleDelete = (id) => {
    let result = window.confirm("Are you sure to Delete the subcategory");
    if (result == true) {
      DeleteSubCategories(id)
        .then((res) => {
          if (res) {
            alert("Subcategory deleted successfully");
          }
          var newData = data.filter((item) => item._id != id);
          setData(newData);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Subcategory is not deleted");
    }
  };

  const columns = [
    { field: "id", headerName: "id", width: 91 },
    {
      field: "name",
      headerName: "name",
      width: 140,
    },
    {
      field: "categoryName",
      headerName: "category",
      width: 140,
      //   renderCell: (params) => {
      //     return <div className="subcategoryListItem">{params.value.name}</div>;
      //   },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/subcategories/" + params.row.id}>
              <button className="btn btn-success">Edit</button>
            </Link>
            <DeleteOutline
              className="subcategoryListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="subcategoryList">
      <div className="subcategoryTitleContainer">
        <h1 className="ms-3">Subcategories</h1>
        <Link to="/admin/newSubCategory">
          <button className="btn btn-success me-5">Add New Subcategory</button>
        </Link>
      </div>
      <DataGrid
        rows={subcategory}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        className="subcategoryData"
      />
    </div>
  );
}
