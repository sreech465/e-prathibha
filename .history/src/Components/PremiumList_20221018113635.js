import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ListExams.css";

const PremiumList = () => {
  const { PremiumReducer } = useSelector((state) => state);
  const state7 = PremiumReducer.user7.data;
  const state77 = state7.exams[0]["26 Years Old"].length;
  console.log(state77, "arjun");
  return (
    <>
      {state7 ? (
        <>
          <h4 style={{ textAlign: "center" }}>(0/23 Attempted)</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* for(let i=0 ; i<state7.exams[0]["26 Years Old"].total ; i++){ */}
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][0].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][0].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][1].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][1].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][3].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][3].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][4].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][4].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][5].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][5].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[0]["26 Years Old"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[0]["26 Years Old"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
          </div>
          <br />
          <p style={{ textAlign: "center" }}>(2014-2020 UPSC)</p>
          <p style={{ textAlign: "center" }}>(0/57 Attempted)</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][0].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][0].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>{" "}
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][1].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][1].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][2].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][3].Exam.id}`}
            >
              {" "}
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][3].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][4].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][4].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][5].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][5].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][6].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][6].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][7].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][7].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][8].Exam.id}`}
            >
              {" "}
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[1]["2014-2020 UPSC"][8].years.exam_year}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to={`/PremiumList/${state7.exams[1]["2014-2020 UPSC"][9].Exam.id}`}
          >
            <div class="cards" style={{ marginLeft: "400px", width: "180px" }}>
              <p style={{ color: "white", paddingLeft: "30px" }}>
                {state7.exams[1]["2014-2020 UPSC"][9].years.exam_year}
              </p>
              <p style={{ color: "white", paddingLeft: "30px" }}>PAPER 1</p>
            </div>
          </Link>
          <p style={{ textAlign: "center" }}>
            (Limited Questions from basics of school NCERT (6th to 10th class)))
          </p>
          <p style={{ textAlign: "center" }}>(0/4 Attempted)</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[2]["Comprehensive NCERT"][0].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[2]["Comprehensive NCERT"][0].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[2]["Comprehensive NCERT"][1].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[2]["Comprehensive NCERT"][1].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[2]["Comprehensive NCERT"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[2]["Comprehensive NCERT"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/PremiumList/${state7.exams[2]["Comprehensive NCERT"][3].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state7.exams[2]["Comprehensive NCERT"][3].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <p style={{ color: "gray", textAlign: "center" }}>
            (Click on here to start your exam)
          </p>
        </>
      ) : (
        "loading"
      )}
    </>
  );
};

export default PremiumList;
