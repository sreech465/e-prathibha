import React from "react";
import { useDispatch } from "react-redux";
import { successDetails } from "../Redux/Actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Finalpage = () => {
  const navigate = useNavigate();
  const { LoginReducer, WexamReducer } = useSelector((state) => state);
  const state2 = LoginReducer.user3.data;
  const dispatch = useDispatch();
  const handleNag = () => {
    // dispatch(successDetails({ state2 }));
    navigate("/");
  };
  return (
    <>
      <div>Secured checkout</div>
      <h1>REVIEW ORDER</h1>
      <h3>MAKE PAYMENT</h3>
      <div>
        <div class="card">
          <img
            style={{ width: 170, height: 100, paddingLeft: 100 }}
            class="card-img-top"
            src="data:image/jpeg;base64,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"
            alt="Card image cap"
          />
          <button
            style={{ backgroundColor: "black", color: "white" }}
            onclick={handleNag}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Finalpage;
