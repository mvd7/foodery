import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFood, getAllFood } from "../actions/foodActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import { useNavigate } from "react-router-dom";

const FoodList = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();

  const foodstate = useSelector((state) => state.getAllFoodReducer);

  const { food, error, loading } = foodstate;
  useEffect(() => {
    dispatch(getAllFood());
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
      <h2>Food List</h2>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}

      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Prices</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {food &&
            food.map((food) => {
              return (
                <tr>
                  <td>{food.name}</td>
                  <td>
                    Small : {food.prices[0]["small"]} <br />
                    Medium : {food.prices[0]["medium"]} <br />
                    Large : {food.prices[0]["large"]}
                  </td>
                  <td>{food.category}</td>
                  <td>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => {
                        dispatch(deleteFood(food._id));
                      }}
                    >
                      Remove
                    </button>
                    <Link to={`/admin/editfood/${food._id}`}>
                      <i className="fa fa-edit m-1"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FoodList;
