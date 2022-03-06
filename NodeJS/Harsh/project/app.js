const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 3000;
const verifytoken = require("./authentication/verifytoken");
const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`server started on port:${port}`);
});

var cors = require("cors");
app.options(
  "*",
  cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 })
);
app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));

// jwt configuration

global.config = require("./authentication/global.config");

// mongoDB connection

const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/relianceDigital";

const connect = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};
connect();

// file upload
const fileupload = require("express-fileupload");
app.use(
  fileupload({
    useTempFiles: true,
  })
);

// routes
const userRoutes = require("./controllers/user.controller");
app.use("/users", userRoutes);

// profile routes

const profileRoutes = require("./controllers/profile.controller");
app.use("/profile", profileRoutes);

const createRole = require("./models/role.model");
// createRole(
//     { _id: 1, role: "admin" }
// );

// createRole(
//     { _id: 2, role: "user" }
// );

// product routes

const productRoutes = require("./controllers/product.controller");
app.use("/products", productRoutes);

//  discount routes

const discountRoutes = require("./controllers/discount.controller");
app.use("/discount", discountRoutes);

// brand routes

const brandRoutes = require("./controllers/brand.controller");
app.use("/brands", brandRoutes);

// cartItem routes

const cartItemRoutes = require("./controllers/cart.item.controller");
app.use("/cartItem", cartItemRoutes);

// category routes

const categoryRoutes = require("./controllers/category.controller");
app.use("/category", categoryRoutes);

// subcategory routes

const subCategoryRoutes = require("./controllers/subcategory.controller");
app.use("/subCategory", subCategoryRoutes);

// subcategorychild routes

const subCategoryChildRoutes = require("./controllers/subcategorychild.controller");
app.use("/subCategoryChild", subCategoryChildRoutes);

// order routes

const orderRoutes = require("./controllers/order.controller");
app.use("/order", orderRoutes);

// address routes

const addressRoutes = require("./controllers/address.controller");
app.use("/address", addressRoutes);

// payment routes

const paymentRoutes = require("./controllers/payment.controller");
app.use("/payment", paymentRoutes);

module.exports = app;
