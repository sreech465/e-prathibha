import React from "react";
import "./App.css";
const Header = () => {
  return (
    <div>
      <div class="cards">
        <p style={{ color: "white", paddingLeft: "30px" }}>
          {
            state1.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam
              .name
          }
        </p>
        <p style={{ color: "white", paddingLeft: "30px" }}>
          UPSC PRELIMS PAPER 1
        </p>
      </div>
    </div>
  );
};

export default Header;
