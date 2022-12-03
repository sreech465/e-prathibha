import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
const Packageanu = () => {
  const dispatch = useDispatch();
  const { LoginReducer } = useSelector((state) => state);

  const state2 = LoginReducer.user3.data;
  dispatch(packageStar({ state2 }));

  return (
    <div class="card">
      <img
        style={{ width: 80, height: 50 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SwBsYIg8mk9-lP3kr9eifIANDZAjYZpN7w&usqp=CAU"
      />
      <div style={{ flex: 1 }}>
        <h2 style={{ textDecorationLine: "underline" }}>EXPLORE FOR FREE</h2>
        <div class="card-body">
          A.3 years old Question
          <br /> paper civils services
          <br />
          (Prelims)
          <br />
          B.Limited UPSC Old <br />
          question papers(CDS <br />
          GEO scientists,CISF
          <br /> ,CAPF ,NDA,engineering services) <br />
          C.Limited questions from
          <br /> basics of School
        </div>
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
          START NOW
        </button>
      </div>
    </div>
  );
};

export default Packageanu;
