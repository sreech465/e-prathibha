import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { packageStar } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";
const Packageanu = () => {
  const navigate = useNavigate();
  const state2 = useSelector((state) => state.PackageReducer.user11);
  console.log(state2, "jjjj");

  const handleGet = () => {
    navigate("/");
  };

  return (
    <div class="card">
      <img
        style={{ width: 180, height: 80 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SwBsYIg8mk9-lP3kr9eifIANDZAjYZpN7w&usqp=CAU"
      />
      <h2>Premium Inagural offer(for 60 days)</h2>
      <p>Exams:1995|1996|1997|1998|1999|2000|2001|2002|2003|2004</p>
      {state2 ? <div> {state2.data.amount}</div> : "loading"}
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
