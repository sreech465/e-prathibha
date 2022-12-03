import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleclick = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password, navigate }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <>
      <div className="container text-center">
        <form className="p-3">
          <h3 className="text-info">LOGIN</h3>
          <input
            className="m-2"
            type="text"
            placeholder="enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            className="m-2"
            type="text"
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button className="px-3 bg-dark text-white" onClick={handleclick}>
            LOGIN
          </button>
          <button className="px-3 bg-dark text-white" onClick={handleLogin}>
            REGISTER
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
