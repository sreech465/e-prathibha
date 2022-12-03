import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  packageStar,
  paymentDetails,
  submitTheExam,
  writeTheExam,
} from "../Redux/Actions";
import { useDispatch } from "react-redux/es/exports";
import { endTheExam } from "../Redux/Actions";
import { useParams } from "react-router-dom";
import Popup from "./Popup";
import "./WritExam.css";
import striptags from "striptags";

const WriteExam = () => {
  const { LoginReducer, WexamReducer } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { id } = useParams();

  const state2 = LoginReducer.user3.data;

  useEffect(() => {
    dispatch(writeTheExam({ id, state2 }));
  }, []);

  const state3 = WexamReducer.user5;

  const [buttonPopup, setButtonPopup] = useState(false);

  const handleclick = () => {
    dispatch(endTheExam({ state2, id }));
    dispatch(submitTheExam({ state2, id }));
    dispatch(paymentDetails({ state2 }));
  };

  return state3 ? (
    <>
      <h3 style={{ color: "red", fontStyle: "italic" }}>
        {" "}
        PRATHIBHA COMPETETIVE EXAMS MOCK TESTS WEBSITE
      </h3>
      <h3 style={{ color: "brown", fontStyle: "italic" }}>QUESTIONS</h3>

      {state3 &&
        state3.length > 0 &&
        state3.map((element) => {
          return (
            <>
              {" "}
              <p
                key={element.id}
                style={{ color: "black", fontWeight: "bold" }}
              >
                Q.{striptags(element.Question.question.above)}?
              </p>
              <p style={{ color: "green", fontStyle: "italic" }}>
                i.{striptags(element.Question.option1)}
              </p>
              <p style={{ color: "green", fontStyle: "italic" }}>
                ii.{striptags(element.Question.option2)}
              </p>
              <p style={{ color: "green", fontStyle: "italic" }}>
                iii.{striptags(element.Question.option3)}
              </p>
              <p style={{ color: "green", fontStyle: "italic" }}>
                iv.{striptags(element.Question.option4)}
              </p>
            </>
          );
        })}

      <button
        style={{ borderColor: "navy" }}
        onClick={() => setButtonPopup(true)}
        className="bg bg-info"
      >
        SUBMIT
      </button>

      <button className="bg bg-info" onClick={handleclick}>
        DATA
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </>
  ) : (
    "Loading"
  );
};

export default WriteExam;
