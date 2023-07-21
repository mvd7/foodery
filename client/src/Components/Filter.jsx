import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFoods } from "../actions/foodActions";

const Filter = () => {
  const [searchkey, setsearchkey] = useState("");
  const [category, setcategory] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 w-100">
          <input
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            value={searchkey}
            type="text"
            className="form-control w-100"
            placeholder="search food"
          />
        </div>
        <div className="col-md-3 w-100">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="vegan">Vegan</option>
            <option value="nonvegan">Non Vegan</option>
          </select>
        </div>
        <div className="col-md-3 w-100">
          <button
            className="btn btn-danger w-100 mt-2"
            onClick={() => {
              dispatch(filterFoods(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
