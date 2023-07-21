import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../actions/orderActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import { deleteUser, getAllUsers } from "../actions/userAction";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <button
        className="btn btn-primary d-flex justify-content-start m-3"
        onClick={handleGoBack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-short"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
      </button>
      <h1 className="m-5">Users list</h1>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    >
                      Delete User
                    </i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
