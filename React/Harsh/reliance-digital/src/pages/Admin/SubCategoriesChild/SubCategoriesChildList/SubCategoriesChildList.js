import "./SubCategoriesChildList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {
  GetSubCategoriesChild,
  DeleteSubCategoriesChild,
} from "../../../../services/SubCategoriesChild";
import { GetSubCategories } from "../../../../services/SubCategory";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SubCategoriesChildList() {
  const [data, setData] = useState([]);
  const [subcategoriesdata, setSubCategoryData] = useState([]);
  useEffect(() => {
    GetSubCategories().then((res) => {
      setSubCategoryData(res.data);
    });
  }, []);
  useEffect(() => {
    GetSubCategoriesChild().then((res) => {
      const subcategoryChildData = res.data;
      const newData = subcategoryChildData.map((item) => {
        let subcategory = subcategoriesdata.find(
          (subItem) => subItem._id == item.subcategory
        );
        item.subcategoryName = subcategory.name;
        return item;
      });
      setData(newData);
    });
  }, [subcategoriesdata]);

  // useEffect(() => {}, [data]);

  const subcategorychild = data?.map((item) => {
    const { __v, ...data } = item;
    const { _id: id, name, subcategory, subcategoryName } = data;
    return {
      id,
      name,
      subcategory,
      subcategoryName,
    };
  });

  const handleDelete = (id) => {
    let result = window.confirm("Are you sure to Delete the subcategorychild");
    if (result == true) {
      DeleteSubCategoriesChild(id)
        .then((res) => {
          if (res) {
            alert("Subcategorychild deleted successfully");
          }
          var newData = data.filter((item) => item._id != id);
          setData(newData);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Subcategorychild is not deleted");
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
      field: "subcategoryName",
      headerName: "subcategory",
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
            <Link to={"/admin/subcategorieschild/" + params.row.id}>
              <button className="btn btn-success">Edit</button>
            </Link>
            <DeleteOutline
              className="subcategorychildListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div
      style={{ height: 400, width: "100%" }}
      className="subcategorychildList"
    >
      <div className="subcategorychildTitleContainer">
        <h1 className="ms-3">Subcategorychild</h1>
        <Link to="/admin/newSubCategoryChild">
          <button className="btn btn-success me-5">
            Add New Subcategorychild
          </button>
        </Link>
      </div>
      <DataGrid
        rows={subcategorychild}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        className="subcategorychildData"
      />
    </div>
  );
}
