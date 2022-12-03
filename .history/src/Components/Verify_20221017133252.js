import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "../Redux/Actions";

const Verify = () => {
  const [reg_code, setRegcode] = useState("");
  const dispatch = useDispatch();
  const handleVerify = (e) => {
    e.preventDefault();
    dispatch(verifyUser({ reg_code }));
  };

  return (
    <>
      <h3 className="text-info">REGCODE</h3>
      <input
        className="m-2"
        type="text"
        placeholder="enter Regcode"
        onChange={(e) => {
          setRegcode(e.target.value);
        }}
      />
      <br />
      <br />
      <button className="px-3 bg-dark text-white" onClick={handleVerify}>
        VERIFY
      </button>
    </>
  );
};

export default Verify;
