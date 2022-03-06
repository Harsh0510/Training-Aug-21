import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GetBrands } from "../../services/Brand";
import { GetDiscount } from "../../services/Discount";
import img from "../../images/img/1.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
export default function Product({ products }) {
  var tempProducts = [...products];
  // var [tempProducts, setTempProducts] = useState();
  // brand
  const [brand, setBrand] = useState([]);
  const brands = async () => {
    const brand = await GetBrands();
    setBrand(brand.data);
  };
  useEffect(() => {
    brands();
  }, []);

  var brandId = brand.map((item) => item._id);
  var brandProducts = products.filter((item) =>
    brandId.includes(item.brand._id)
  );
  var brandProduct = brandProducts.map((item) => item.brand.name);
  brandProduct = [...new Set(brandProduct)];
  // discount
  const [discount, setDiscount] = useState([]);
  const discounts = async () => {
    const discount = await GetDiscount();
    setDiscount(discount.data);
  };
  useEffect(() => {
    discounts();
  }, []);

  var discountId = discount.map((item) => item._id);
  var discountProducts = products.filter((item) =>
    discountId.includes(item.discount._id)
  );
  var discountProduct = discountProducts.map(
    (item) => item.discount.percentage
  );
  discountProduct = [...new Set(discountProduct)];

  // filter products
  const [selects, setSelects] = useState();

  if (selects === "Price(Low-High)") {
    tempProducts.sort((a, b) => a.offerprice - b.offerprice);
  }
  if (selects === "Price(High-Low)") {
    tempProducts.sort((a, b) => b.offerprice - a.offerprice);
  }
  if (selects === "Name(A-Z)") {
    tempProducts.sort((a, b) =>
      a.productName.toUpperCase() > b.productName.toUpperCase()
        ? 1
        : b.productName.toUpperCase() > a.productName.toUpperCase()
        ? -1
        : 0
    );
  }
  if (selects === "Name(Z-A)") {
    tempProducts.sort((a, b) =>
      b.productName.toUpperCase() > a.productName.toUpperCase()
        ? 1
        : a.productName.toUpperCase() > b.productName.toUpperCase()
        ? -1
        : 0
    );
  }

  const [checkedArr, setCheckedArr] = useState([]);
  const [checkedArrDiscount, setCheckedArrDiscount] = useState([]);
  var handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    if (value) {
      setCheckedArr([...checkedArr, name]);
    } else {
      const arr = checkedArr.filter((item) => item != name);
      setCheckedArr(arr);
    }
  };
  // console.log(checkedArr);
  if (checkedArr.length != 0) {
    tempProducts = tempProducts.filter((item) =>
      checkedArr.includes(item.brand.name)
    );
  }

  var handleChangeDiscount = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    if (value) {
      setCheckedArrDiscount([...checkedArrDiscount, parseInt(name)]);
    } else {
      const arr = checkedArrDiscount.filter((item) => item != name);
      setCheckedArrDiscount(arr);
    }
  };

  if (checkedArrDiscount.length != 0) {
    tempProducts = tempProducts.filter((item) =>
      checkedArrDiscount.includes(item.discount.percentage)
    );
  }

  // min max price

  // const [maxPrice, setMaxPrice] = useState(0);
  // const [price, setPrice] = useState(0);
  // useEffect(() => {
  //   if (products.length > 0) {
  //     var priceArr = products?.map((item) => item.offerprice);
  //     var mPrice = Math.max(...priceArr);
  //     setMaxPrice(mPrice);
  //   }
  // }, [tempProducts]);
  // useEffect(() => {
  //   setPrice(maxPrice);
  // }, [maxPrice]);
  // var handlePrice = (event) => {
  //   setPrice(event.target.value);
  // };
  // if (price) {
  //   tempProducts = tempProducts.filter((item) => {
  //     return item.offerprice <= price;
  //   });
  // }

  // function valuetext(value) {
  //   return `${value}`;
  // }

  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  useEffect(() => {
    if (products.length > 0) {
      var priceArr = products?.map((item) => item.offerprice);
      var maxPrice = Math.max(...priceArr);
      setMaxPrice(maxPrice);
      var minPrice = Math.min(...priceArr);
      setMinPrice(minPrice);
    }
  }, [tempProducts]);

  const [value, setValue] = useState([minPrice, maxPrice]);
  useEffect(() => {
    setValue([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);
  const handleRange = (event, newValue) => {
    setValue(newValue);
  };
  if (value) {
    tempProducts = tempProducts.filter((item) => {
      return item.offerprice >= value[0] && item.offerprice <= value[1];
    });
  }
  return (
    <>
      <div className="parent-products">
        <div className="filters">
          <h4>FILTERS</h4>
          <form>
            <div className="sort mb-4 ms-3 pt-3">
              <label htmlFor="sort" className="sort mb-2">
                Sort by
              </label>
              <select
                name="sort"
                id="sort"
                value={selects}
                onChange={(e) => setSelects(e.target.value)}
                className="d-block w-75 "
              >
                <option value="relevance">relevance</option>
                <option value="Name(A-Z)">Name(A-Z)</option>
                <option value="Name(Z-A)">Name(Z-A)</option>
                <option value="Price(Low-High)">Price(Low-High)</option>
                <option value="Price(High-Low)">Price(High-Low)</option>
              </select>
            </div>
            <div className="price mb-4 ms-3">
              {/* <label htmlFor="price">price ${price}</label>
              <input
                type="range"
                name="price"
                id="price"
                min={0}
                max={maxPrice}
                value={price}
                onChange={handlePrice}
              /> */}
              <label htmlFor="price" className="sort mb-2">
                Price
              </label>
              <Box className="pe-3 w-75 ms-2">
                <Slider
                  min={minPrice}
                  max={maxPrice}
                  step={100}
                  value={value}
                  onChange={handleRange}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div className="brand mb-4 ms-3">
              <h6>BRAND</h6>
              {brandProduct.map((item) => {
                return (
                  <>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        name={item}
                        id={item}
                        // checked={item}
                        onChange={handleChange}
                      />
                      <label htmlFor={item} className="ms-2">
                        {item}
                      </label>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="discount ms-3">
              <h6>DISCOUNT</h6>
              {discountProduct.map((item) => {
                return (
                  <>
                    <div className="mb-2">
                      <input
                        type="checkbox"
                        name={item}
                        id={item}
                        // checked={}
                        onChange={handleChangeDiscount}
                      />
                      <label htmlFor="discount" className="ms-2">
                        {item}%
                      </label>
                    </div>
                  </>
                );
              })}
            </div>
          </form>
        </div>
        <div className="products">
          {tempProducts.length > 0 ? (
            <>
              {tempProducts.map((item) => {
                var slug = `/products/singleproduct/${item._id}`;
                return (
                  <>
                    <div className="product">
                      <Link
                        to={slug}
                        className="text-decoration-none product-link"
                      >
                        <img src={item.image} alt="product" />
                        <div className="content">
                          <h6 className="name">{item.productName}</h6>
                          <p>
                            <span className="dprice text-muted">
                              Deal Price:
                            </span>
                            <span className="dealprice">
                              &#x20B9;{item.offerprice}
                            </span>
                          </p>
                          <p className="price text-muted">
                            M.R.P:<s>&#x20B9;{item.price}</s>
                          </p>
                          <p className="discount text-muted">
                            You Save:{item.discount.percentage}%( &#x20B9;
                            {item.price - item.offerprice})
                          </p>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <p className="fs-1">
              No Products Found On This Filter
              <Link to="/" className="text-decoration-none">
                {" "}
                <button className="btn btn-danger fs-4 d-block shadow-none">
                  HomePage
                </button>
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
