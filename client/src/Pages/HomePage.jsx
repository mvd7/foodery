import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Food from "../Components/Food";
import { getAllFood } from "../actions/foodActions";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import Filter from "../Components/Filter";

const Homescreen = () => {
  const dispatch = useDispatch();

  const foodState = useSelector((state) => state.getAllFoodReducer);

  const { food, error, loading } = foodState;

  useEffect(() => {
    dispatch(getAllFood());
  }, []);

  return (
    <div>
      <Filter />
      <div className="row flex justify-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong with the server." />
        ) : (
          food.map((food) => {
            return (
              <div className="col-md-3" key={food._id}>
                <div>
                  <Food food={food} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
