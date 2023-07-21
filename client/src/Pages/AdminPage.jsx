import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

import AddFood from "./AddFood";
import EditFood from "./EditFood";
import OrdersList from "./OrdersList";
import FoodList from "./FoodList";
import UsersList from "./UserList";

const AdminPage = () => {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      {/* ... */}
      <ul className="adminfunctions" style={{ listStyle: "none" }}>
        <li className="btn btn-primary">
          <Link
            to="/admin/userslist"
            style={{ color: "black", textDecoration: "none" }}
          >
            Users List
          </Link>
        </li>
        <li className="btn btn-primary">
          <Link
            to="/admin/foodlist"
            style={{ color: "black", textDecoration: "none" }}
          >
            Food List
          </Link>
        </li>
        <li className="btn btn-primary">
          <Link
            to="/admin/addfood"
            style={{ color: "black", textDecoration: "none" }}
          >
            Add Food
          </Link>
        </li>
        <li className="btn btn-primary">
          <Link
            to="/admin/orderslist"
            style={{ color: "black", textDecoration: "none" }}
          >
            Orders List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
