import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import Error from "../Components/Error";
import Loading from "../Components/Loading";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginState = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginState;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function handleLogin() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div>
      <div className="row justify-content-center mt-5 text-start ">
        <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center mb-4" style={{ fontSize: "35px" }}>
            Log In
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

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

          <button onClick={handleLogin} className="btn btn-danger mt-4 w-100">
            Log In
          </button>

          <a className="btn btn-success mt-2 w-100" href="/register">
            Register now !
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
