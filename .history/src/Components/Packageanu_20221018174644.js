import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { packageStar } from "../Redux/Actions";
const Packageanu = () => {
  //   const dispatch = useDispatch();
  //   const { LoginReducer } = useSelector((state) => state);

  //   const state2 = LoginReducer.user3.data;
  //   dispatch(packageStar({ state2 }));

  const handleGet = () => {};

  return (
    <div class="card">
      <img
        style={{ width: 80, height: 50 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SwBsYIg8mk9-lP3kr9eifIANDZAjYZpN7w&usqp=CAU"
      />
      <div style={{ flex: 1 }}>
        <h2 style={{ textDecorationLine: "underline" }}>EXPLORE FOR FREE</h2>
        <div class="card-body"></div>
        <button
          style={{
            borderRadius: 40,
            backgroundColor: "black",
            color: "white",
            width: 120,
            height: 30,
            marginLeft: 50,
          }}
          onClick={handleGet}
        >
          checkout
        </button>
        <button>Full Details</button>
      </div>
    </div>
  );
};

export default Packageanu;
