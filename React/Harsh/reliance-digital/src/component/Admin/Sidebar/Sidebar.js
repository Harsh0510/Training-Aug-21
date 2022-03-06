import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  PersonOutline,
  CategoryOutlined,
  StorefrontOutlined,
  ShoppingCartOutlined,
  LocalOfferOutlined,
  BrandingWatermarkOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <Link
                to="/admin/categories"
                className="text-decoration-none sidebar-link"
              >
                <li className="sidebarListItem">
                  <CategoryOutlined className="sidebarIcon" />
                  Categories
                </li>
              </Link>
              <Link
                to="/admin/subcategories"
                className="text-decoration-none sidebar-link"
              >
                <li className="sidebarListItem">
                  <CategoryOutlined className="sidebarIcon" />
                  SubCategories
                </li>
              </Link>
              <Link
                to="/admin/subcategorieschild"
                className="text-decoration-none sidebar-link"
              >
                <li className="sidebarListItem">
                  <CategoryOutlined className="sidebarIcon" />
                  SubCategoriesChild
                </li>
              </Link>
              <Link
                to="/admin/products"
                className="text-decoration-none sidebar-link"
              >
                <li className="sidebarListItem">
                  <StorefrontOutlined className="sidebarIcon" />
                  Products
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
