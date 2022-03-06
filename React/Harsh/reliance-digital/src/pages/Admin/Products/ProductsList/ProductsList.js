import "./ProductsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { GetProducts, DeleteProducts } from "../../../../services/Products";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetProducts().then((res) => {
      setData(res.data);
    });
  }, []);

  // useEffect(() => {}, [data]);

  const product = data?.map((item) => {
    const { __v, discount, description, ...data } = item;
    const {
      _id: id,
      productName,
      image,
      price,
      offerprice,
      brand,
      subcategorychild,
    } = data;
    return {
      id,
      productName,
      image,
      price,
      offerprice,
      brand,
      subcategorychild,
    };
  });

  const handleDelete = (id) => {
    let result = window.confirm("Are you sure to Delete the product");
    if (result == true) {
      DeleteProducts(id)
        .then((res) => {
          if (res) {
            alert("Product deleted successfully");
          }
          var newData = data.filter((item) => item._id != id);
          setData(newData);
        })
        .catch((err) => console.log(err));
    } else {
      alert("Product is not deleted");
    }
  };

  const columns = [
    { field: "id", headerName: "id", width: 91 },
    {
      field: "productName",
      headerName: "name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.image} alt="" />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 140,
    },
    {
      field: "offerprice",
      headerName: "offerprice",
      width: 140,
    },
    {
      field: "subcategorychild",
      headerName: "subcategorychild",
      width: 145,
      renderCell: (params) => {
        return <div className="productListItem">{params.value.name}</div>;
      },
    },
    {
      field: "brand",
      headerName: "brand",
      width: 145,
      renderCell: (params) => {
        return <div className="productListItem">{params.value.name}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/product/" + params.row.id}>
              <button className="btn btn-success">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="productList">
      <div className="productTitleContainer">
        <h1 className="ms-3">Products</h1>
        <Link to="/admin/newproducts">
          <button className="btn btn-success me-5">Add New Product</button>
        </Link>
      </div>
      <DataGrid
        rows={product}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        checkboxSelection
        className="productData"
      />
    </div>
  );
}
