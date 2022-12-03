import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      registerUser({ email, name, phone, password, confirmPassword, navigate })
    );
  };

  return (
    <>
      <h3 className="text-info">REGISTER</h3>
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
      <input
        className="m-2"
        type="text"
        placeholder="enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        className="m-2"
        type="text"
        placeholder="enter phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        className="m-2"
        type="text"
        placeholder="enter confirmpassword"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button className="px-3 bg-dark text-white" onClick={handleRegister}>
        REGISTER
      </button>
    </>
  );
};

export default Register;
