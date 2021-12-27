const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log(`server started on port:${port}`);
});

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

// routes
const userRoutes = require("./controllers/user.controller");
app.use("/users", userRoutes);

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

// cart routes

const cartRoutes = require("./controllers/cart.item.controller");
app.use("/cart", cartRoutes);

// category routes

const categoryRoutes = require("./controllers/category.controller");
app.use("/category", categoryRoutes);

// subcategory routes

const subCategoryRoutes = require("./controllers/subcategory.controller");
app.use("/subCategory", subCategoryRoutes);

// order routes

const orderRoutes = require("./controllers/order.details.controller");
app.use("/order", orderRoutes);

// payment routes

const paymentRoutes = require("./controllers/payment.controller");
app.use("/payment", paymentRoutes);
