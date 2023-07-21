import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loading from "../Components/Loading";
import Success from "../Components/Success";
import Error from "../Components/Error";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const dispatch = useDispatch();

  function handleRegister() {
    if (password !== cPassword) {
      alert("Your passwords aren't matching.");
    } else {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(registerUser(user));
      console.log(user);
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5 text-start ">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Succesefully." />}
          {error && <Error error="Email already registered." />}

          <h2 className="text-center mb-4" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <input
            required
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="Email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="Confirm Password"
            className="form-control"
            value={cPassword}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
          <button
            onClick={handleRegister}
            className="btn btn-danger mt-3 w-100"
          >
            Register Now
          </button>
          <a className="btn btn-success mt-3 w-100" href="/login">
            Already have an account? Log in here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
