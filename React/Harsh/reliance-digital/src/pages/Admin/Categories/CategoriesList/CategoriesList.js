import "./CategoriesList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {
  GetCategories,
  DeleteCategories,
} from "../../../../services/Categories";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CategoriesList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetCategories().then((res) => {
      setData(res.data);
    });
  }, []);

  // useEffect(() => {}, [data]);

  const category = data?.map((item) => {
    const { __v, ...data } = item;
    const { _id: id, name } = data;
    return {
      id,
      name,
    };
  });

  const handleDelete = (id) => {
    let result = window.confirm("Are you sure to Delete the category");
    if (result == true) {
      DeleteCategories(id)
        .then((res) => {
          if (res) {
            alert("Category deleted successfully");
          }
          var newData = data.filter((item) => item._id != id);
          setData(newData);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Category is not deleted");
    }
  };

  const columns = [
    { field: "id", headerName: "id", width: 91 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/categories/" + params.row.id}>
              <button className="btn btn-success mx-3">Edit</button>
            </Link>
            <DeleteOutline
              className="categoryListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="categoryList">
      <div className="categoryTitleContainer">
        <h1 className="ms-3">Categories</h1>
        <Link to="/admin/newCategory">
          <button className="btn btn-success me-5">Add New Category</button>
        </Link>
      </div>

      <DataGrid
        rows={category}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}
