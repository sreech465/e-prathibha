import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { packageStar } from "../Redux/Actions";
const Packageanu = () => {
  const state2 = useSelector((state) => state.PackageReducer.user11);
  console.log(state2);

  const handleGet = () => {};

  return (
    <div class="card">
      <img
        style={{ width: 180, height: 80 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SwBsYIg8mk9-lP3kr9eifIANDZAjYZpN7w&usqp=CAU"
      />
      <div style={{ flex: 1 }}>
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
