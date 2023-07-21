import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Food = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart(food, quantity, variant));
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded card-container">
      <div onClick={handleShow}>
        <h1>{food.name}</h1>
        <img src={food.image} className="img-size" />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variant</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
          >
            {food.variant.map((size) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: {food.prices[0][variant] * quantity}MKD
          </h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn btn-danger mt-2" onClick={handleAddToCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart-plus"
              viewBox="0 0 16 16"
            >
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{food.name}</Modal.Title>
          <button className="btn-close" onClick={handleClose}></button>
        </Modal.Header>

        <Modal.Body
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img src={food.image} className="img-fluid" />
        </Modal.Body>

        <Modal.Footer>
          <p style={{ fontWeight: "bold" }}>{food.description}</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Food;
