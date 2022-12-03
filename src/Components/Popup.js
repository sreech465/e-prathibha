import React from "react";
import { useSelector } from "react-redux";
import "./Popup.css";

const Popup = (props) => {
  const state = useSelector((state) => state.EexamReducer.user6);
  console.log(state);

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form>
          <button
            style={{ marginLeft: "1000px" }}
            className="close-btn btn btn-info"
            onClick={() => props.setTrigger(false)}
          >
            close
          </button>

          {state.data}
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
