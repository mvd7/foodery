import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../actions/orderActions";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import { useNavigate } from "react-router-dom";

const OrdersList = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const dispatch = useDispatch();
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;
  useEffect(() => {
    dispatch(getAllOrders());
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
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      <table className="table table-striped table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>
                    {order.isDelivered ? (
                      <h1>Delivered</h1>
                    ) : (
                      <button
                        className="btn"
                        onClick={() => {
                          dispatch(deliverOrder(order._id));
                        }}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
